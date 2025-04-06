import Player from '@vimeo/player';

// Define the PlayerState interface
interface PlayerState {
  playing: boolean;
  isInView: boolean;
  userPaused: boolean;
  isHoverMode: boolean;
  initialized: boolean;
}

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
  private readonly HIDE_CLASS = 'hide';

  private players: Map<HTMLElement, Player> = new Map();
  private playerStates: Map<HTMLElement, PlayerState> = new Map();
  private intersectionObserver: IntersectionObserver | null = null;
  private prefersReducedMotion: boolean;

  private constructor() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.initIntersectionObserver();

    // Listen for changes to reduced motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.prefersReducedMotion = e.matches;
      this.handleReducedMotionChange();
    });
  }

  private handleReducedMotionChange(): void {
    // Pause all playing videos if user enables reduced motion
    if (this.prefersReducedMotion) {
      this.players.forEach((player, container) => {
        const state = this.playerStates.get(container);
        if (state?.playing && !state.userPaused) {
          this.pauseVideo(player, state);
          this.updatePlayPauseUI(container, false);
        }
      });
    }
  }

  private initIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = entry.target as HTMLElement;
          const state = this.playerStates.get(container);
          if (!state) return;

          state.isInView = entry.isIntersecting;

          // Handle initialization if needed
          if (entry.isIntersecting && !state.initialized) {
            this.initializePlayer(container);
            state.initialized = true;
            return;
          }

          // Handle play/pause based on visibility
          const player = this.players.get(container);
          if (!player) return;

          // Only auto-play/pause based on visibility if reduced motion is not preferred
          // and not in hover mode
          if (!this.prefersReducedMotion && !state.isHoverMode) {
            if (entry.isIntersecting && !state.playing && !state.userPaused) {
              // Coming into view while not playing
              this.playVideo(player, state)
                .then(() => this.updatePlayPauseUI(container, true))
                .catch(() => this.updatePlayPauseUI(container, false));
            } else if (!entry.isIntersecting && state.playing) {
              // Going out of view while playing
              this.pauseVideo(player, state);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1,
      }
    );
  }

  public static getInstance(): VimeoPlayerManager {
    if (!VimeoPlayerManager.instance) {
      VimeoPlayerManager.instance = new VimeoPlayerManager();
    }
    return VimeoPlayerManager.instance;
  }

  private updatePlayPauseUI(container: HTMLElement, isPlaying: boolean): void {
    const playIcon = container.querySelector(this.PLAY_ICON_SELECTOR) as HTMLElement;
    const pauseIcon = container.querySelector(this.PAUSE_ICON_SELECTOR) as HTMLElement;
    const toggleButton = container.querySelector(this.PLAY_PAUSE_BUTTON_SELECTOR) as HTMLElement;

    if (isPlaying) {
      playIcon.classList.add(this.HIDE_CLASS);
      pauseIcon.classList.remove(this.HIDE_CLASS);
      if (toggleButton) {
        toggleButton.setAttribute('aria-label', 'Pause video');
      }
    } else {
      pauseIcon.classList.add(this.HIDE_CLASS);
      playIcon.classList.remove(this.HIDE_CLASS);
      if (toggleButton) {
        toggleButton.setAttribute('aria-label', 'Play video');
      }
    }
  }

  private playVideo(player: Player, state: PlayerState): Promise<void> {
    return player
      .play()
      .then(() => {
        state.playing = true;
        state.userPaused = false;
      })
      .catch((err) => {
        console.error('Error playing video:', err);
        state.playing = false;
        state.userPaused = true;
      });
  }

  private pauseVideo(player: Player, state: PlayerState): Promise<void> {
    return player
      .pause()
      .then(() => {
        state.playing = false;
      })
      .catch((err) => console.error('Error pausing video:', err));
  }

  private togglePlayPause(container: HTMLElement, player: Player, state: PlayerState): void {
    if (state.playing) {
      this.pauseVideo(player, state).then(() => {
        this.updatePlayPauseUI(container, false);
        state.userPaused = true;
      });
    } else {
      state.userPaused = false;
      this.playVideo(player, state)
        .then(() => this.updatePlayPauseUI(container, true))
        .catch(() => this.updatePlayPauseUI(container, false));
    }
  }

  private setupPlayerEvents(container: HTMLElement, player: Player, state: PlayerState): void {
    const playPauseButton = container.querySelector(this.PLAY_PAUSE_BUTTON_SELECTOR) as HTMLElement;

    // Check if looping should be disabled
    const disableLoop = container.getAttribute(this.LOOP_ATTR) === 'false';
    player.setLoop(!disableLoop);

    // Set up hover functionality if enabled
    if (state.isHoverMode) {
      container.addEventListener('mouseenter', () => {
        if (!state.userPaused) {
          this.playVideo(player, state).then(() => this.updatePlayPauseUI(container, true));
        }
      });

      container.addEventListener('mouseleave', () => {
        if (state.playing) {
          this.pauseVideo(player, state).then(() => this.updatePlayPauseUI(container, false));
        }
      });
    }

    // Set up Vimeo event listeners for play/pause
    player.on('play', () => {
      if (this.prefersReducedMotion && !state.playing && !state.userPaused) {
        this.pauseVideo(player, state).then(() => this.updatePlayPauseUI(container, false));
      } else {
        state.playing = true;
        this.updatePlayPauseUI(container, true);
      }
    });

    player.on('pause', () => {
      if (state.isInView) {
        state.playing = false;
        this.updatePlayPauseUI(container, false);
      }
    });

    // Add click event to the play/pause button
    if (playPauseButton) {
      // Set initial aria-label based on current state
      playPauseButton.setAttribute('aria-label', state.playing ? 'Pause video' : 'Play video');

      container.addEventListener('click', () => {
        player
          .getPaused()
          .then((isPaused) => {
            state.playing = !isPaused;
            this.togglePlayPause(container, player, state);
          })
          .catch(() => {
            state.playing = !state.playing;
            state.userPaused = !state.playing;
            this.togglePlayPause(container, player, state);
          });
      });
    }
  }

  private initializePlayer(container: HTMLElement): void {
    const iframe = container.querySelector(this.PLAYER_SELECTOR) as HTMLIFrameElement;

    // Create player with autoplay disabled
    const player = new Player(iframe, {
      autoplay: false,
      loop: true,
    });

    this.players.set(container, player);

    // Check if hover mode is enabled
    const isHoverMode = container.getAttribute(this.HOVER_ATTR) === 'true';

    // Initialize player state
    const state: PlayerState = {
      playing: false,
      isInView: false,
      userPaused: false,
      isHoverMode,
      initialized: true,
    };
    this.playerStates.set(container, state);

    // Basic initialization
    player
      .ready()
      .then(() => player.setVolume(0))
      .then(() => player.pause())
      .then(() => {
        this.updatePlayPauseUI(container, false);
      })
      .catch((error) => {
        console.error('Error initializing Vimeo player:', error);
        player.pause().catch(() => {});
        state.playing = false;
        this.updatePlayPauseUI(container, false);
      });

    // Set up player events
    this.setupPlayerEvents(container, player, state);
  }

  public initializeAllPlayers(): void {
    const containers = document.querySelectorAll(this.CONTAINER_SELECTOR);

    // Set up the intersection observer for all containers
    containers.forEach((container) => {
      const element = container as HTMLElement;

      // Create a minimal player state to track initialization status
      const state: PlayerState = {
        playing: false,
        isInView: false,
        userPaused: false,
        isHoverMode: element.getAttribute(this.HOVER_ATTR) === 'true',
        initialized: false,
      };
      this.playerStates.set(element, state);

      // Observe the container for intersection
      if (this.intersectionObserver) {
        this.intersectionObserver.observe(element);
      }
    });
  }
}

// Export a function to initialize all players
export function initializeVimeoPlayers(): void {
  VimeoPlayerManager.getInstance().initializeAllPlayers();
}
