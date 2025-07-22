import Matter from 'matter-js';

interface RainEmojisConfig {
  objectSizeHeightBased: number;
  objectSizeWidthBased: number;
  colliderScale: number;
  rainDuration: number;
  rainIntervalMin: number;
  rainIntervalMax: number;
  wallMargin: number;
  mouseColliderSize: number;
}

/**
 * TODO: add logic to cleanup when going out of view; drop from the bottom of screen
 */

export class RainEmojis {
  private canvas: HTMLCanvasElement | null = null;
  private engine: Matter.Engine | null = null;
  private render: Matter.Render | null = null;
  private runner: Matter.Runner | null = null;
  private mouseCollider: Matter.Body | null = null;
  private ground: Matter.Body | null = null;
  public isInitialized = false;
  private observer: IntersectionObserver | null = null;
  private rainTimeout: number | null = null;

  private readonly config: RainEmojisConfig = {
    objectSizeHeightBased: window.innerHeight * 0.1,
    objectSizeWidthBased: window.innerWidth * 0.08,
    colliderScale: 0.8,
    rainDuration: 10000,
    rainIntervalMin: 50,
    rainIntervalMax: 300,
    wallMargin: 100,
    mouseColliderSize: 40,
  };

  private readonly textures = [
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc22ca6be309b888b1c855_cash.png',
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e70406bb29f57b2e82d_sales.png',
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e5b406bb29f57b2daea_moneybag.png',
  ];

  constructor(private autoStart: boolean = true) {
    this.canvas = document.querySelector<HTMLCanvasElement>('#matter-canvas-target');
    if (!this.canvas) {
      console.warn('Matter canvas not found for emoji rain');
      return;
    }

    this.updateWallMargin();
    this.setupIntersectionObserver();
  }

  private updateWallMargin(): void {
    const emojiWidth = this.config.objectSizeWidthBased * this.config.colliderScale;
    this.config.wallMargin = Math.max(emojiWidth, window.innerWidth * 0.05);
  }

  private setupIntersectionObserver(): void {
    if (!this.canvas) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isInitialized) {
            this.initialize();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.canvas);
  }

  private initialize(): void {
    if (!this.canvas) return;

    // Initialize Matter.js components
    this.engine = Matter.Engine.create();
    this.render = Matter.Render.create({
      canvas: this.canvas,
      engine: this.engine,
      options: {
        background: 'transparent',
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });

    this.initializeComponents();
    this.isInitialized = true;
    // Only start rain automatically if autoStart is true
    if (this.autoStart) {
      this.startRain();
    }
  }

  private initializeComponents(): void {
    this.updateConfiguration();
    this.createBoundaries();
    this.setupMouseInteraction();
    this.setupResizeHandler();

    if (!this.engine || !this.render) return;

    if (!this.runner) {
      this.runner = Matter.Runner.create();
    }
    Matter.Runner.run(this.runner, this.engine);
    Matter.Render.run(this.render);
  }

  private createBoundaries(): void {
    if (!this.engine) return;

    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      60,
      {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          visible: false,
        },
      }
    );

    const leftWall = Matter.Bodies.rectangle(
      this.config.wallMargin / 2,
      window.innerHeight / 2,
      60,
      window.innerHeight,
      {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          visible: false,
        },
      }
    );

    const rightWall = Matter.Bodies.rectangle(
      window.innerWidth - this.config.wallMargin / 2,
      window.innerHeight / 2,
      60,
      window.innerHeight,
      {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          visible: false,
        },
      }
    );

    Matter.Composite.add(this.engine.world, [ground, leftWall, rightWall]);

    this.ground = ground;
  }

  private setupMouseInteraction(): void {
    if (!this.canvas || !this.engine) return;

    this.mouseCollider = Matter.Bodies.circle(0, 0, this.config.mouseColliderSize, {
      isStatic: true,
      friction: 0.1,
      restitution: 0.6,
      render: {
        fillStyle: 'rgba(255, 0, 0, 0)',
        visible: true,
      },
    });

    Matter.Composite.add(this.engine.world, this.mouseCollider);

    const updateMousePosition = (e: MouseEvent) => {
      if (!this.canvas || !this.mouseCollider) return;

      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;

      const mouseX = (e.clientX - rect.left) * scaleX;
      const mouseY = (e.clientY - rect.top) * scaleY;

      Matter.Body.setPosition(this.mouseCollider, { x: mouseX, y: mouseY });
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', () => {
      if (this.mouseCollider) {
        Matter.Body.setPosition(this.mouseCollider, { x: -100, y: -100 });
      }
    });
  }

  private setupResizeHandler(): void {
    if (!this.render || !this.engine) return;

    const onResize = () => {
      if (!this.render || !this.engine) return;

      // Update canvas size
      this.render.canvas.width = window.innerWidth;
      this.render.canvas.height = window.innerHeight;

      // Recalculate configuration
      this.updateConfiguration();

      // Clear the world and reinitialize components if needed
      this.reinitializeComponents();

      // Restart the rain effect
      this.restartRainEffect();
    };

    window.addEventListener('resize', onResize);
  }

  private updateConfiguration(): void {
    this.config.objectSizeHeightBased = window.innerHeight * 0.1;
    this.config.objectSizeWidthBased = window.innerWidth * 0.08;
    this.updateWallMargin();
  }

  private reinitializeComponents(): void {
    if (!this.engine) return;
    Matter.World.clear(this.engine.world, false);
    this.createBoundaries();
    this.setupMouseInteraction();
  }

  private restartRainEffect(): void {
    if (this.rainTimeout) {
      window.clearTimeout(this.rainTimeout);
      this.rainTimeout = null;
    }
    this.startRain();
  }

  private calculateMaxEmojis(): number {
    const emojiWidth = this.config.objectSizeWidthBased * this.config.colliderScale;
    const maxRows = 2;
    const maxEmojisPerRow = Math.floor(window.innerWidth / emojiWidth);
    return maxRows * maxEmojisPerRow;
  }

  private createObject(): void {
    if (!this.engine) return;

    const currentEmojiCount = this.engine.world.bodies.length;
    const maxEmojis = this.calculateMaxEmojis();

    if (currentEmojiCount >= maxEmojis) return;

    const xPos =
      this.config.wallMargin + Math.random() * (window.innerWidth - 2 * this.config.wallMargin);

    const randomTexture = this.textures[Math.floor(Math.random() * this.textures.length)];

    const box = Matter.Bodies.circle(
      xPos,
      -100,
      (this.config.objectSizeWidthBased / 2) * this.config.colliderScale,
      {
        restitution: 0.6,
        friction: 0.1,
        render: {
          sprite: {
            texture: randomTexture,
            xScale: this.config.objectSizeWidthBased / 100,
            yScale: this.config.objectSizeWidthBased / 100,
          },
        },
      }
    );

    Matter.Composite.add(this.engine.world, box);
  }

  /** Recreates the floor body and adds it to the simulation */
  public recreateFloor(): void {
    if (this.engine && !this.ground) {
      // Only recreate if it doesn't exist
      this.ground = Matter.Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight,
        window.innerWidth,
        60,
        {
          isStatic: true,
          render: {
            fillStyle: 'transparent',
            visible: false,
          },
        }
      );
      Matter.Composite.add(this.engine.world, this.ground);
      console.debug('Matter.js floor recreated.');
    } else if (this.ground) {
      console.debug('Floor already exists, not recreating.');
    } else {
      console.warn('Could not recreate floor: Engine missing.');
    }
  }

  /** Starts the timed loop for creating new falling emojis */
  public startRain(): void {
    console.debug('Attempting to start rain...');
    // Clear any existing rain timeout before starting a new one
    if (this.rainTimeout) {
      console.debug('Clearing existing rain timeout:', this.rainTimeout);
      window.clearTimeout(this.rainTimeout);
      this.rainTimeout = null;
    }

    if (!this.isInitialized || !this.engine) {
      console.warn('Cannot start rain: Not initialized or engine missing.', {
        isInitialized: this.isInitialized,
        engineExists: !!this.engine,
      });
      return;
    }
    console.debug('Starting emoji rain loop.');

    const endTime = Date.now() + this.config.rainDuration;
    console.debug(`Rain end time calculated: ${new Date(endTime).toLocaleTimeString()}`);

    const rainLoop = () => {
      if (Date.now() > endTime) {
        console.debug('Rain loop check: Time has ended.');
        return;
      }
      // console.debug('Rain loop check: Time OK, creating object.');

      this.createObject();

      const nextInterval =
        Math.random() * (this.config.rainIntervalMax - this.config.rainIntervalMin) +
        this.config.rainIntervalMin;

      this.rainTimeout = window.setTimeout(rainLoop, nextInterval);
    };

    rainLoop();
  }

  /** Stops the creation of new emojis */
  public stopRain(): void {
    if (this.rainTimeout) {
      window.clearTimeout(this.rainTimeout);
      this.rainTimeout = null;
      console.debug('Emoji rain stopped.');
    }
  }

  /** Removes the floor body from the simulation */
  public removeFloor(): void {
    if (this.engine && this.ground) {
      console.debug('Attempting to remove floor. Runner enabled:', this.runner?.enabled);
      Matter.Composite.remove(this.engine.world, this.ground);
      this.ground = null; // Clear the reference
      console.debug('Matter.js floor removed.');

      // Wake up all non-static bodies after removing the floor
      const bodies = Matter.Composite.allBodies(this.engine.world);
      bodies.forEach((body) => {
        if (!body.isStatic) {
          Matter.Sleeping.set(body, false);
        }
      });
      console.debug('Woke up all non-static bodies.');
    } else {
      console.warn('Could not remove floor: Engine or ground body missing.');
    }
  }

  /** Removes all non-static bodies (emojis) from the world */
  public clearDynamicBodies(): void {
    if (this.engine) {
      const bodies = Matter.Composite.allBodies(this.engine.world);
      const dynamicBodies = bodies.filter((body) => !body.isStatic);
      if (dynamicBodies.length > 0) {
        Matter.Composite.remove(this.engine.world, dynamicBodies);
        console.debug(`Cleared ${dynamicBodies.length} dynamic bodies.`);
      }
    } else {
      console.warn('Could not clear dynamic bodies: Engine missing.');
    }
  }

  /** Handles logic when the effect should exit (section out of view) */
  public exitEffect(): void {
    this.stopRain();
    this.removeFloor();
  }

  /** Handles logic when the effect should re-enter (section in view again) */
  public reenterEffect(): void {
    this.recreateFloor();
    this.clearDynamicBodies();
    if (this.isInitialized) this.startRain();
  }

  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    if (this.rainTimeout) {
      window.clearTimeout(this.rainTimeout);
      this.rainTimeout = null;
    }

    if (this.engine) {
      Matter.Engine.clear(this.engine);
      this.engine = null;
    }

    if (this.render) {
      Matter.Render.stop(this.render);
      this.render = null;
    }

    if (this.runner) {
      Matter.Runner.stop(this.runner);
      this.runner = null;
    }

    this.isInitialized = false;
  }
}

// Initialize the rain emojis effect
export function initRainEmojis(): RainEmojis {
  return new RainEmojis();
}
