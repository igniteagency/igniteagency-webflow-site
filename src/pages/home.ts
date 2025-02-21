import JSConfetti from 'js-confetti';
import Matter from 'matter-js';
import { SCRIPTS_LOADED_EVENT } from 'src/constants';
import Swiper from 'swiper';

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  featuredWorkSlider();
  showerConfetti();
  rainEmojis();
  initDraggableElements();
});

function featuredWorkSlider() {
  new Swiper('.featured-work_slider', {
    slideClass: 'featured-work_card',
    wrapperClass: 'featured-work_list',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 800,
    //resistanceRatio: 0.5,
    //freeMode: true,
    //freeModeMomentum: true,
    //freeModeMomentumRatio: 0.5,
    //freeModeSticky: true,
    loop: true,
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      modifier: 4,
      slideShadows: true,
    },
  });
}

function showerConfetti() {
  const canvas = document.querySelector<HTMLCanvasElement>('#canvas-target');
  const jsConfetti = new JSConfetti({ canvas });

  const showConfetti = (event: MouseEvent) => {
    jsConfetti.addConfetti({
      emojis: ['😎', '⚡️', '🎉', '🌈', '👀', '🦄'],
      emojiSize: 100,
      confettiNumber: 50,
    });
  };

  // Attach the event listener to the canvas
  canvas?.addEventListener('click', showConfetti);
}

function rainEmojis() {
  const matterCanvas = document.querySelector('#matter-canvas-target');

  if (!matterCanvas) {
    console.warn('Matter canvas not found for emoji rain');
    return;
  }

  // Configuration
  const config = {
    // Base size as percentage of viewport height or width
    objectSizeHeightBased: window.innerHeight * 0.1, // 12% of viewport height
    // objectSizeWidthBased: window.innerWidth * 0.06, // 6% of viewport width
    // Use either objectSizeHeightBased or objectSizeWidthBased below
    get objectSize() {
      return this.objectSizeHeightBased; // Change to objectSizeWidthBased to test width-based scaling
    },
    colliderScale: 0.8,
    rainDuration: 10000,
    rainIntervalMin: 50,
    rainIntervalMax: 300,
    wallMargin: 100,
    mouseColliderSize: 40,
  };

  // Array of image URLs for textures
  const textures = [
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc22ca6be309b888b1c855_cash.png',
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e70406bb29f57b2e82d_sales.png',
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e5b406bb29f57b2daea_moneybag.png',
  ];

  // module aliases
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Body = Matter.Body;

  // create an engine
  let engine = Engine.create();

  // create a renderer
  let render = Render.create({
    canvas: matterCanvas,
    engine: engine,
    options: {
      background: 'transparent',
      wireframes: false,
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });

  const createObject = () => {
    const xPos = config.wallMargin + Math.random() * (window.innerWidth - 2 * config.wallMargin);
    const randomTexture = textures[Math.floor(Math.random() * textures.length)];

    const box = Bodies.circle(xPos, -100, (config.objectSize / 2) * config.colliderScale, {
      restitution: 0.6,
      friction: 0.1,
      render: {
        sprite: {
          texture: randomTexture,
          xScale: config.objectSize / 100,
          yScale: config.objectSize / 100,
        },
      },
    });

    Composite.add(engine.world, box);
  };

  // create ground and walls with invisibility
  let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
      visible: false,
    },
  });

  let leftWall = Bodies.rectangle(
    config.wallMargin / 2,
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

  let rightWall = Bodies.rectangle(
    window.innerWidth - config.wallMargin / 2,
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

  // Create mouse collider body
  let mouseCollider = Bodies.circle(0, 0, config.mouseColliderSize, {
    isStatic: true,
    friction: 0.1,
    restitution: 0.6,
    render: {
      fillStyle: 'rgba(255, 0, 0, 0)',
      visible: true,
    },
  });

  function updateMousePosition(e) {
    const rect = matterCanvas.getBoundingClientRect();
    const scaleX = matterCanvas.width / rect.width;
    const scaleY = matterCanvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    Body.setPosition(mouseCollider, {
      x: mouseX,
      y: mouseY,
    });
  }

  document.addEventListener('mousemove', updateMousePosition);

  document.addEventListener('mouseleave', () => {
    Body.setPosition(mouseCollider, {
      x: -100,
      y: -100,
    });
  });

  // Add window resize handler for responsive sizing
  window.addEventListener('resize', () => {
    // Update canvas size
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;

    // Update object sizes
    config.objectSizeHeightBased = window.innerHeight * 0.12;
    config.objectSizeWidthBased = window.innerWidth * 0.06;

    // Update ground and walls
    Body.setPosition(ground, {
      x: window.innerWidth / 2,
      y: window.innerHeight,
    });
    Body.setPosition(rightWall, {
      x: window.innerWidth - config.wallMargin / 2,
      y: window.innerHeight / 2,
    });
  });

  // Add all bodies to the world
  Composite.add(engine.world, [ground, leftWall, rightWall, mouseCollider]);

  // run the renderer
  Render.run(render);

  // create runner
  let runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  // Function to start the rain effect
  const startRain = () => {
    const endTime = Date.now() + config.rainDuration;

    const rainLoop = () => {
      if (Date.now() > endTime) return;

      createObject();

      // Schedule the next object creation at a random interval
      const nextInterval =
        Math.random() * (config.rainIntervalMax - config.rainIntervalMin) + config.rainIntervalMin;
      setTimeout(rainLoop, nextInterval);
    };

    rainLoop(); // Start the loop
  };

  // Use Intersection Observer to trigger the rain effect
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startRain();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(matterCanvas);
}

function initDraggableElements() {
  const container = document.querySelector('#drag-container');
  const draggableElements = document.querySelectorAll('[data-cursor="drag me"]');
  const cursor = document.querySelectorAll('.cursor');
  const xTo = window.gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3' });
  const yTo = window.gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3' });

  if (!container || !draggableElements.length) {
    console.warn('Draggable elements or container not found');
    return;
  }

  draggableElements.forEach((element) => {
    window.Draggable.create(element, {
      type: 'x,y',
      bounds: container,
      inertia: true,
      dragResistance: 0.2,
      edgeResistance: 0.65,
      zIndexBoost: false,
      onDragStart: function (e) {
        window.gsap.to(this.target, { scale: 1.05, duration: 0.2 });
        xTo(e.clientX);
        yTo(e.clientY);
      },
      onDrag: function (e) {
        xTo(e.clientX);
        yTo(e.clientY);
      },
      onDragEnd: function (e) {
        window.gsap.to(this.target, { scale: 1, duration: 0.3 });
        // Set final position after a small delay to ensure smooth transition
        setTimeout(() => {
          xTo(e.clientX);
          yTo(e.clientY);
        }, 50);
      },
    });
  });
}
