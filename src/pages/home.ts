import JSConfetti from 'js-confetti';
import Matter from 'matter-js';
import Swiper from 'swiper';

window.Webflow?.push(() => {
  animateBook();
  featuredWorkSlider();
  showerConfetti();
  rainEmojis();
});

function animateBook() {
  const bookMoveTarget = document.querySelector<HTMLElement>('.section_home-tabs');

  const handleMouseMove = (event: MouseEvent): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const mouseX = event.clientX / width;
    const mouseY = event.clientY / height;

    const rotationY = -30 + mouseX * 60; // Range mapped from -30deg to +30deg
    const rotationX = 10 - mouseY * 20; // Range mapped from +10deg to -10deg

    // Select only the .book-container inside .w--tab-active
    const activeBookContainers = document.querySelectorAll<HTMLElement>(
      '.w--tab-active .book-container'
    );

    // Iterate over active book containers and apply the styles
    activeBookContainers.forEach((bookContainer) => {
      bookContainer.style.setProperty('--book-rotationY', `${rotationY}deg`);
      bookContainer.style.setProperty('--book-rotationX', `${rotationX}deg`);
    });
  };

  // Intersection Observer callback function
  const observerCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ): void => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener('mousemove', handleMouseMove);
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
  });

  if (bookMoveTarget) {
    observer.observe(bookMoveTarget);
  }
}

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

  const showConfetti = () => {
    jsConfetti.addConfetti({
      emojis: ['😎', '⚡️', '🎉', '🌈', '👀', '🦄'],
      emojiSize: 100,
      confettiNumber: 50,
    });
  };
  //
  // Attach the event listener to the canvas
  canvas?.addEventListener('click', showConfetti);
}

function rainEmojis() {
  const matterCanvas = document.querySelector('#matter-canvas-target');

  if (!matterCanvas) {
    console.warn('Matter canvas not found for emoji rain');
    return;
  }

  // Size and duration variables
  const objectSize = 700; // Size of the objects
  const rainDuration = 10000; // Duration of the rain in milliseconds
  const rainIntervalMin = 50; // Minimum interval between drops in milliseconds
  const rainIntervalMax = 300; // Maximum interval between drops in milliseconds

  // Scaling variables
  const imageScale = 1.7; // Adjust the image scale relative to the object size
  const colliderScale = 0.2; // Adjust the collider scale relative to the object size

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
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

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
    // Randomize the x position across the full width of the canvas
    let xPos = Math.random() * window.innerWidth;

    // Randomly select a texture from the array
    let randomTexture = textures[Math.floor(Math.random() * textures.length)];

    // Create the body
    let box = Bodies.circle(xPos, 0, (objectSize / 2) * colliderScale, {
      render: {
        sprite: {
          texture: randomTexture,
          xScale: imageScale, // Scale the texture
          yScale: imageScale, // Scale the texture
        },
      },
    });

    Composite.add(engine.world, box);
  };

  // create ground and walls
  let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, {
    isStatic: true,
  });

  let leftWall = Bodies.rectangle(0, window.innerHeight / 2, 60, window.innerHeight, {
    isStatic: true,
  });

  let rightWall = Bodies.rectangle(
    window.innerWidth,
    window.innerHeight / 2,
    60,
    window.innerHeight,
    { isStatic: true }
  );

  // add all of the bodies to the world
  Composite.add(engine.world, [ground, leftWall, rightWall]);

  // run the renderer
  Render.run(render);

  // create runner
  let runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  // Function to start the rain effect
  const startRain = () => {
    const endTime = Date.now() + rainDuration;

    const rainLoop = () => {
      if (Date.now() > endTime) return;

      createObject();

      // Schedule the next object creation at a random interval
      const nextInterval = Math.random() * (rainIntervalMax - rainIntervalMin) + rainIntervalMin;
      setTimeout(rainLoop, nextInterval);
    };

    rainLoop(); // Start the loop
  };

  // Use Intersection Observer to trigger the rain effect when the canvas enters the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startRain();
          observer.disconnect(); // Stop observing once the rain has started
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the canvas is visible
    }
  );

  // Start observing the canvas
  observer.observe(matterCanvas);

  // Check for mouse control
  let mouse = Mouse.create(render.canvas);
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });
  Composite.add(engine.world, mouseConstraint);
}
