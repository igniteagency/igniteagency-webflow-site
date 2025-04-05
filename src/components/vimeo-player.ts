import Player from '@vimeo/player';

class VimeoPlayerManager {
  private static instance: VimeoPlayerManager | null = null;

  // Data attribute selectors
  private readonly CONTAINER_SELECTOR = '[data-vimeo-el="component"]';
  private readonly PLAYER_SELECTOR = '[data-vimeo-el="player-iframe"]';
  private readonly PLAY_PAUSE_BUTTON_SELECTOR = '[data-vimeo-el="toggle-button"]';
  private readonly PLAY_ICON_SELECTOR = '[data-vimeo-el="play-icon"]';
  private readonly PAUSE_ICON_SELECTOR = '[data-vimeo-el="pause-icon"]';
  private readonly LOOP_ATTR = 'data-vimeo-loop';
  private readonly HOVER_ATTR = 'data-vimeo-hover';

  private players: Map<HTMLElement, Player> = new Map();
  private playerStates: Map<
    HTMLElement,
    {
      playing: boolean;
      isInView: boolean;
      userPaused: boolean;
      isHoverMode: boolean;
    }
  > = new Map();

  private intersectionObserver: IntersectionObserver | null = null;

  private constructor() {
    // Private constructor to enforce singleton pattern
    this.initIntersectionObserver();
  }

  private initIntersectionObserver(): void {
    // Create an IntersectionObserver to efficiently track when elements are in view
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = entry.target as HTMLElement;
          const playerState = this.playerStates.get(container);
          const player = this.players.get(container);

          if (!playerState || !player) return;

          // Update the isInView state
          playerState.isInView = entry.isIntersecting;

          // Check for reduced motion preference
          const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;

          // Only auto-play/pause based on visibility if reduced motion is not preferred
          // and not in hover mode
          if (!prefersReducedMotion && !playerState.isHoverMode) {
            if (entry.isIntersecting && playerState.playing && !playerState.userPaused) {
              // Coming into view while playing
              player.play();
            } else if (!entry.isIntersecting && playerState.playing) {
              // Going out of view while playing
              player.pause();
            }
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Consider visible when at least 10% is in view
      }
    );
  }

  public static getInstance(): VimeoPlayerManager {
    if (!VimeoPlayerManager.instance) {
      VimeoPlayerManager.instance = new VimeoPlayerManager();
    }
    return VimeoPlayerManager.instance;
  }

  private setupPlayerEvents(container: HTMLElement, player: Player): void {
    const iframe = container.querySelector(this.PLAYER_SELECTOR) as HTMLIFrameElement;
    const playPauseButton = container.querySelector(this.PLAY_PAUSE_BUTTON_SELECTOR) as HTMLElement;
    const playIcon = container.querySelector(this.PLAY_ICON_SELECTOR) as HTMLElement;
    const pauseIcon = container.querySelector(this.PAUSE_ICON_SELECTOR) as HTMLElement;

    // Check if looping should be disabled
    const disableLoop = container.getAttribute(this.LOOP_ATTR) === 'false';
    if (disableLoop) {
      player.setLoop(false);
    } else {
      player.setLoop(true); // Enable looping by default
    }

    // Check if hover mode is enabled
    const isHoverMode = container.getAttribute(this.HOVER_ATTR) === 'true';

    // Initialize player state
    const playerState = {
      playing: false,
      isInView: false,
      userPaused: false,
      isHoverMode: isHoverMode,
    };
    this.playerStates.set(container, playerState);

    // Set up hover functionality if enabled
    if (isHoverMode) {
      container.addEventListener('mouseenter', () => {
        if (!playerState.userPaused) {
          player
            .play()
            .then(() => {
              playerState.playing = true;
              playIcon.classList.add('hide');
              pauseIcon.classList.remove('hide');
            })
            .catch((err) => console.error('Error playing on hover:', err));
        }
      });

      container.addEventListener('mouseleave', () => {
        if (playerState.playing) {
          player
            .pause()
            .then(() => {
              playerState.playing = false;
              pauseIcon.classList.add('hide');
              playIcon.classList.remove('hide');
            })
            .catch((err) => console.error('Error pausing on hover out:', err));
        }
      });
    }

    // Only override automatic playing, not user-initiated playing
    player.on('play', () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // If the play event wasn't triggered by a user action, we should pause
      if (prefersReducedMotion && !playerState.playing && !playerState.userPaused) {
        console.log('Preventing autoplay due to reduced motion preference');
        player
          .pause()
          .then(() => {
            pauseIcon.classList.add('hide');
            playIcon.classList.remove('hide');
          })
          .catch((err) => console.error('Error preventing autoplay:', err));
      } else {
        // This is a user-initiated or intended play
        console.log('Allowing play - user initiated or intended');
        playerState.playing = true;
        playIcon.classList.add('hide');
        pauseIcon.classList.remove('hide');
      }
    });

    // Add click event to the play/pause button
    playPauseButton.addEventListener('click', () => {
      console.log(
        'Play/pause button clicked, current state:',
        playerState.playing,
        'on container:',
        container
      );

      // Force get the actual player state to ensure we're in sync
      player
        .getPaused()
        .then((isPaused) => {
          console.log('Actual player paused state:', isPaused);
          playerState.playing = !isPaused;

          if (playerState.playing) {
            // Currently playing, so pause
            player
              .pause()
              .then(() => {
                console.log('Video paused successfully by user');
                pauseIcon.classList.add('hide');
                playIcon.classList.remove('hide');
                playerState.playing = false;
                playerState.userPaused = true; // User manually paused
              })
              .catch((err) => console.error('Error pausing:', err));
          } else {
            // Currently paused, so play
            // Set userPaused to false BEFORE playing to indicate this is a user action
            playerState.userPaused = false; // User is manually playing

            player
              .play()
              .then(() => {
                console.log('Video played successfully by user');
                playIcon.classList.add('hide');
                pauseIcon.classList.remove('hide');
                playerState.playing = true;
              })
              .catch((err) => {
                console.error('Error playing:', err);
                // Reset flags if play fails
                playerState.playing = false;
                playerState.userPaused = true;
              });
          }
        })
        .catch((err) => {
          console.error('Error getting player state:', err);
          // Fallback behavior if we can't get the player state
          playerState.playing = !playerState.playing;
          playerState.userPaused = !playerState.playing;

          if (playerState.playing) {
            player
              .play()
              .then(() => {
                playIcon.classList.add('hide');
                pauseIcon.classList.remove('hide');
                console.log('Fallback: Video playing by user');
              })
              .catch((err) => console.error('Fallback play error:', err));
          } else {
            player
              .pause()
              .then(() => {
                pauseIcon.classList.add('hide');
                playIcon.classList.remove('hide');
                console.log('Fallback: Video paused by user');
              })
              .catch((err) => console.error('Fallback pause error:', err));
          }
        });
    });

    // Update icons if the video state changes elsewhere
    player.on('play', () => {
      playerState.playing = true;
      playIcon.classList.add('hide');
      pauseIcon.classList.remove('hide');
    });

    player.on('pause', () => {
      // Only update UI if in view
      if (playerState.isInView) {
        playerState.playing = false;
        pauseIcon.classList.add('hide');
        playIcon.classList.remove('hide');
      }
    });
  }

  private initializePlayer(container: HTMLElement): void {
    const iframe = container.querySelector(this.PLAYER_SELECTOR) as HTMLIFrameElement;
    const player = new Player(iframe);
    this.players.set(container, player);

    const playIcon = container.querySelector(this.PLAY_ICON_SELECTOR) as HTMLElement;
    const pauseIcon = container.querySelector(this.PAUSE_ICON_SELECTOR) as HTMLElement;

    // Check if hover mode is enabled
    const isHoverMode = container.getAttribute(this.HOVER_ATTR) === 'true';

    // Basic initialization
    player
      .ready()
      .then(() => {
        // Set initial volume to 0 (muted)
        return player.setVolume(0);
      })
      .then(() => {
        // Explicitly pause the video first to ensure it doesn't autoplay
        return player.pause();
      })
      .then(() => {
        // Initialize player state
        const playerState = {
          playing: false,
          isInView: false,
          userPaused: false,
          isHoverMode: isHoverMode,
        };
        this.playerStates.set(container, playerState);

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        console.log('User prefers reduced motion:', prefersReducedMotion);

        // Default state is paused
        pauseIcon.classList.add('hide');
        playIcon.classList.remove('hide');

        // Only consider playing if reduced motion is not preferred and not in hover mode
        if (!prefersReducedMotion && !isHoverMode) {
          // Start playing if in view and reduced motion is not preferred
          return player
            .play()
            .then(() => {
              playerState.playing = true;
              playIcon.classList.add('hide');
              pauseIcon.classList.remove('hide');
              console.log('Video autostarted because in view and reduced motion not preferred');
            })
            .catch((err) => {
              console.warn('Could not autoplay video:', err);
              playerState.playing = false; // Ensure we know the video is still paused
            });
        } else if (prefersReducedMotion) {
          console.log('Video kept paused due to reduced motion preference');
        }
      })
      .then(() => {
        const playerState = this.playerStates.get(container);
        console.log('Vimeo player initialized successfully, playing:', playerState?.playing);
      })
      .catch((error) => {
        console.error('Error initializing Vimeo player:', error);
        // Ensure video is paused on error
        player.pause().catch((e) => console.error('Failed to pause on error:', e));
        const playerState = this.playerStates.get(container);
        if (playerState) {
          playerState.playing = false;
        }
        pauseIcon.classList.add('hide');
        playIcon.classList.remove('hide');
      });

    // Set up player events
    this.setupPlayerEvents(container, player);

    // Observe the container for intersection changes
    if (this.intersectionObserver) {
      this.intersectionObserver.observe(container);
    }
  }

  private checkForIframeAPIConflicts(): void {
    // Look for iframe attributes that might be causing autoplay
    const allIframes = document.querySelectorAll('iframe[src*="vimeo"]');
    allIframes.forEach((iframe) => {
      const src = iframe.getAttribute('src');
      if (src && src.includes('autoplay=1')) {
        console.warn('Found iframe with autoplay=1 which may override preferences:', iframe);
      }
    });
  }

  public initializeAllPlayers(): void {
    this.checkForIframeAPIConflicts();

    const containers = document.querySelectorAll(this.CONTAINER_SELECTOR);
    console.log('Found', containers.length, 'Vimeo containers');

    // Initialize each container separately
    containers.forEach((container, index) => {
      console.log('Initializing player', index + 1);
      try {
        this.initializePlayer(container as HTMLElement);
      } catch (error) {
        console.error('Error initializing player', index + 1, error);
      }
    });

    console.log('All players initialization attempted');
  }
}

// Export a function to initialize all players
export function initializeVimeoPlayers(): void {
  VimeoPlayerManager.getInstance().initializeAllPlayers();
}
