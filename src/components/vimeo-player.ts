// Define Vimeo Player types
interface VimeoPlayer {
  ready(): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  getPaused(): Promise<boolean>;
  setVolume(volume: number): Promise<void>;
  setCurrentTime(time: number): Promise<void>;
  getCurrentTime(): Promise<number>;
  on(event: string, callback: (...args: any[]) => void): void;
}

declare global {
  interface Window {
    Vimeo: {
      Player: new (element: HTMLIFrameElement) => VimeoPlayer;
    };
  }
}

// Function to load Vimeo API script
function loadVimeoAPI(): Promise<void> {
  return new Promise((resolve, reject) => {
    // If API is already loaded, resolve immediately
    if (window.Vimeo) {
      resolve();
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;

    // Set up load and error handlers
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Vimeo Player API'));

    // Add script to document
    document.body.appendChild(script);
  });
}

export function initializeVimeoPlayer(container: HTMLElement): void {
  const iframe = container.querySelector('[data-vimeo-player]') as HTMLIFrameElement;
  const player = new window.Vimeo.Player(iframe);
  const playPauseButton = container.querySelector('[data-vimeo-play-pause-button]') as HTMLElement;
  const playIcon = container.querySelector('[data-vimeo-play-icon]') as HTMLElement;
  const pauseIcon = container.querySelector('[data-vimeo-pause-icon]') as HTMLElement;

  // Get custom time range from data attributes
  const startTime = parseFloat(container.getAttribute('data-vimeo-start') || '0') || 0;
  const endTime = parseFloat(container.getAttribute('data-vimeo-end') || '') || null;

  // Set initial states
  let playing = false;
  let isInView = false;
  let userPaused = false; // Track if user manually paused the video

  // Function to check if element is in viewport
  function isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  }

  // Function to handle visibility changes
  function handleVisibilityChange(): void {
    const wasInView = isInView;
    isInView = isElementInViewport(iframe);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Only auto-play/pause based on visibility if reduced motion is not preferred
    if (!prefersReducedMotion) {
      // Only take action if visibility has changed and not user-paused
      if (!wasInView && isInView && playing && !userPaused) {
        // Coming into view while playing
        player.setCurrentTime(startTime).then(() => player.play());
      } else if (wasInView && !isInView && playing) {
        // Going out of view while playing
        player.pause();
      }
    }
  }

  // Handle end time
  function checkEndTime(): void {
    if (endTime !== null) {
      player.getCurrentTime().then((currentTime) => {
        if (currentTime >= endTime) {
          player.setCurrentTime(startTime);
        }
      });
    }
  }

  // Set up timeupdate event for checking end time
  player.on('timeupdate', function () {
    checkEndTime();
  });

  // Only override automatic playing, not user-initiated playing
  player.on('play', function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If the play event wasn't triggered by a user action, we should pause
    if (prefersReducedMotion && !playing && !userPaused) {
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
      playing = true;
      playIcon.classList.add('hide');
      pauseIcon.classList.remove('hide');
    }
  });

  // Basic initialization
  player
    .ready()
    .then(() => {
      // Set initial volume to 0 (muted)
      return player.setVolume(0);
    })
    .then(() => {
      // Initial time setting
      return player.setCurrentTime(startTime);
    })
    .then(() => {
      // Explicitly pause the video first to ensure it doesn't autoplay
      return player.pause();
    })
    .then(() => {
      // Initial visibility check
      isInView = isElementInViewport(iframe);

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      console.log('User prefers reduced motion:', prefersReducedMotion);

      // Default state is paused
      playing = false;
      pauseIcon.classList.add('hide');
      playIcon.classList.remove('hide');

      // Only consider playing if reduced motion is not preferred
      if (isInView && !prefersReducedMotion) {
        // Start playing if in view and reduced motion is not preferred
        return player
          .play()
          .then(() => {
            playing = true;
            playIcon.classList.add('hide');
            pauseIcon.classList.remove('hide');
            console.log('Video autostarted because in view and reduced motion not preferred');
          })
          .catch((err) => {
            console.warn('Could not autoplay video:', err);
            playing = false; // Ensure we know the video is still paused
          });
      } else if (prefersReducedMotion) {
        console.log('Video kept paused due to reduced motion preference');
      }
    })
    .then(() => {
      console.log('Vimeo player initialized successfully, playing:', playing);
    })
    .catch((error) => {
      console.error('Error initializing Vimeo player:', error);
      // Ensure video is paused on error
      player.pause().catch((e) => console.error('Failed to pause on error:', e));
      playing = false;
      pauseIcon.classList.add('hide');
      playIcon.classList.remove('hide');
    });

  // Add click event to the play/pause button
  playPauseButton.addEventListener('click', function () {
    console.log('Play/pause button clicked, current state:', playing, 'on container:', container);

    // Force get the actual player state to ensure we're in sync
    player
      .getPaused()
      .then((isPaused) => {
        console.log('Actual player paused state:', isPaused);
        playing = !isPaused;

        if (playing) {
          // Currently playing, so pause
          player
            .pause()
            .then(() => {
              console.log('Video paused successfully by user');
              pauseIcon.classList.add('hide');
              playIcon.classList.remove('hide');
              playing = false;
              userPaused = true; // User manually paused
            })
            .catch((err) => console.error('Error pausing:', err));
        } else {
          // Currently paused, so play
          // Set userPaused to false BEFORE playing to indicate this is a user action
          userPaused = false; // User is manually playing

          player
            .play()
            .then(() => {
              console.log('Video played successfully by user');
              playIcon.classList.add('hide');
              pauseIcon.classList.remove('hide');
              playing = true;
            })
            .catch((err) => {
              console.error('Error playing:', err);
              // Reset flags if play fails
              playing = false;
              userPaused = true;
            });
        }
      })
      .catch((err) => {
        console.error('Error getting player state:', err);
        // Fallback behavior if we can't get the player state
        playing = !playing;
        userPaused = !playing;

        if (playing) {
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
  player.on('play', function () {
    playing = true;
    playIcon.classList.add('hide');
    pauseIcon.classList.remove('hide');
  });

  player.on('pause', function () {
    // Only update UI if in view
    if (isInView) {
      playing = false;
      pauseIcon.classList.add('hide');
      playIcon.classList.remove('hide');
    }
  });

  // Set up scroll and resize listeners for visibility detection
  window.addEventListener('scroll', handleVisibilityChange, { passive: true });
  window.addEventListener('resize', handleVisibilityChange, { passive: true });

  // Initial visibility check
  setTimeout(handleVisibilityChange, 1000); // Delay initial check
}

function checkForIframeAPIConflicts(): void {
  // Look for iframe attributes that might be causing autoplay
  const allIframes = document.querySelectorAll('iframe[src*="vimeo"]');
  allIframes.forEach((iframe) => {
    const src = iframe.getAttribute('src');
    if (src && src.includes('autoplay=1')) {
      console.warn('Found iframe with autoplay=1 which may override preferences:', iframe);
    }
  });
}

export function initializeVimeoPlayers(): void {
  checkForIframeAPIConflicts();

  const containers = document.querySelectorAll('[data-vimeo-container]');
  console.log('Found', containers.length, 'Vimeo containers');

  // Load Vimeo API first, then initialize players
  loadVimeoAPI()
    .then(() => {
      // Initialize each container separately
      containers.forEach((container, index) => {
        console.log('Initializing player', index + 1);
        try {
          initializeVimeoPlayer(container as HTMLElement);
        } catch (error) {
          console.error('Error initializing player', index + 1, error);
        }
      });

      console.log('All players initialization attempted');
    })
    .catch((error) => {
      console.error('Failed to load Vimeo API:', error);
    });
}
