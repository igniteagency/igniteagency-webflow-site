import GUI from 'lil-gui';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

import { SCRIPTS_LOADED_EVENT } from '$src/constants';

// GUI Control - set to true to enable GUI for development
const ENABLE_GUI = false;

// Function to create a bolt instance for a specific container
function createBoltInstance(containerId: string, options: { enableScrollTrigger?: boolean } = {}): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000); // Keep background black

  // Camera - adjust aspect ratio based on container size
  const containerRect = container.getBoundingClientRect();
  const camera = new THREE.PerspectiveCamera(75, containerRect.width / containerRect.height, 0.1, 1000);
  camera.position.z = 3.5;

  // Mouse position tracking
  const mouse = new THREE.Vector2();
  const targetRotation = new THREE.Vector2(0, 0);
  const currentRotation = new THREE.Vector2(0, 0);
  const rotationLimit = 0.7; // Maximum rotation in radians (about 17 degrees)
  const smoothingFactor = 0.05; // Lower = smoother transitions

  // Scroll-based rotation parameters
  const scrollParams = {
    active: options.enableScrollTrigger ?? true, // Whether scroll rotation is active
    rotationFactor: 1.0, // Number of full rotations (1.0 = one full rotation)
    mouseTrackingFactor: 0.3, // How much mouse tracking affects rotation during scroll (0-1)
  };

  // Store the current scroll-driven rotation
  let scrollRotationY = 0;

  // Track mouse movement - only when mouse is over the container
  function onMouseMove(event: MouseEvent): void {
    const rect = container.getBoundingClientRect();
    const isOverContainer = 
      event.clientX >= rect.left && 
      event.clientX <= rect.right && 
      event.clientY >= rect.top && 
      event.clientY <= rect.bottom;

    if (isOverContainer) {
      // Calculate normalized coordinates relative to the container
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      // Scale mouse coordinates to rotation values within limits
      targetRotation.x = -mouse.y * rotationLimit;
      targetRotation.y = mouse.x * rotationLimit;
    }
  }

  window.addEventListener('mousemove', onMouseMove, false);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(containerRect.width, containerRect.height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false; // Disable zoom on scroll
  controls.enablePan = false; // Disable panning for cleaner interaction

  // --- Lighting --- (Simplified to use environment only)
  const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.3);
  scene.add(hemisphereLight);

  // Setup GUI (only if enabled)
  let gui: GUI | undefined;
  if (ENABLE_GUI) {
    gui = new GUI();
  }

  // Color Overlay Shader
  const ColorOverlayShader = {
    uniforms: {
      tDiffuse: { value: null },
      overlayColor: { value: new THREE.Color(1.0, 0.0, 0.0) }, // Red color
      intensity: { value: 1 },
      blendMode: { value: 1 }, // 0 = multiply, 1 = overlay, 2 = screen
    },

    vertexShader: `
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,

    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec3 overlayColor;
        uniform float intensity;
        uniform int blendMode;
        
        varying vec2 vUv;
        
        vec3 multiply(vec3 base, vec3 overlay) {
            return base * overlay;
        }
        
        vec3 overlay(vec3 base, vec3 overlay) {
            return mix(
                2.0 * base * overlay,
                1.0 - 2.0 * (1.0 - base) * (1.0 - overlay),
                step(0.5, base)
            );
        }
        
        vec3 screen(vec3 base, vec3 overlay) {
            return 1.0 - (1.0 - base) * (1.0 - overlay);
        }
        
        void main() {
            vec4 texel = texture2D(tDiffuse, vUv);
            vec3 color = texel.rgb;
            
            vec3 blended;
            if (blendMode == 0) {
                blended = multiply(color, overlayColor);
            } else if (blendMode == 1) {
                blended = overlay(color, overlayColor);
            } else {
                blended = screen(color, overlayColor);
            }
            
            // Mix original and blended based on intensity
            vec3 result = mix(color, blended, intensity);
            
            gl_FragColor = vec4(result, texel.a);
        }
    `,
  };

  // Material parameters to control
  const materialParams = {
    roughness: 0.01,
    envMapIntensity: 1.3, // Increase environment intensity
  };

  // Environment rotation parameters (in degrees now)
  const envParams = {
    rotationY: 0, // Simplify to just Y rotation which is most visually apparent
  };

  // Environment folder (only if GUI enabled)
  if (ENABLE_GUI && gui) {
    const envFolder = gui.addFolder('Environment');
    // Using degrees (0-360) with step size of 15 degrees
    envFolder
      .add(envParams, 'rotationY', 0, 360, 15)
      .name('Rotate Y (degrees)')
      .onChange(updateEnvironmentRotation);

    // Add environment map intensity control
    envFolder
      .add(materialParams, 'envMapIntensity', 0, 5)
      .name('Env Intensity')
      .onChange((value: number) => {
        if (bolt && bolt.material) {
          bolt.material.envMapIntensity = value;
          bolt.material.needsUpdate = true;
        }
      });

    // Material folder
    const materialFolder = gui.addFolder('Material');
    materialFolder.add(materialParams, 'roughness', 0, 1).onChange((value: number) => {
      if (bolt && bolt.material) {
        bolt.material.roughness = value;
      }
    });
  }

  // Post-processing (Bloom Adjusted)
  const renderScene = new RenderPass(scene, camera);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );
  bloomPass.threshold = 0.85; // Adjust threshold for physical material
  bloomPass.strength = 0.56; // Adjust strength
  bloomPass.radius = 1; // Adjust radius

  // Color overlay pass
  const colorOverlayPass = new ShaderPass(ColorOverlayShader);

  const composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(colorOverlayPass);

  // Bloom controls - moved AFTER bloomPass is created (only if GUI enabled)
  if (ENABLE_GUI && gui) {
    const bloomFolder = gui.addFolder('Bloom');
    const bloomParams = {
      threshold: bloomPass.threshold,
      strength: bloomPass.strength,
      radius: bloomPass.radius,
    };
    bloomFolder.add(bloomParams, 'threshold', 0, 1).onChange((value: number) => {
      bloomPass.threshold = value;
    });
    bloomFolder.add(bloomParams, 'strength', 0, 3).onChange((value: number) => {
      bloomPass.strength = value;
    });
    bloomFolder.add(bloomParams, 'radius', 0, 1).onChange((value: number) => {
      bloomPass.radius = value;
    });

    // Color Overlay controls
    const colorOverlayFolder = gui.addFolder('Color Overlay');
    const colorOverlayParams = {
      intensity: 1,
      color: { r: 1.0, g: 0, b: 0.17 },
      blendMode: 1, // 0 = multiply, 1 = overlay, 2 = screen
    };

    colorOverlayFolder.add(colorOverlayParams, 'intensity', 0, 1).onChange((value: number) => {
      colorOverlayPass.uniforms.intensity.value = value;
    });

    colorOverlayFolder
      .addColor(colorOverlayParams, 'color')
      .onChange((value: { r: number; g: number; b: number }) => {
        colorOverlayPass.uniforms.overlayColor.value.setRGB(value.r, value.g, value.b);
      });

    colorOverlayFolder
      .add(colorOverlayParams, 'blendMode', { Multiply: 0, Overlay: 1, Screen: 2 })
      .onChange((value: string) => {
        colorOverlayPass.uniforms.blendMode.value = parseInt(value);
      });
  }

  let bolt: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshPhysicalMaterial> | undefined;

  function createDefaultMatcap(): THREE.CanvasTexture {
    // Create a small canvas for a simple matcap
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Create a simple gradient
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, '#ffffff'); // Center highlight
    gradient.addColorStop(0.4, '#ff3454'); // Red midtones matching our color
    gradient.addColorStop(1, '#330000'); // Dark red edges

    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    // Convert to texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
  }

  // --- Load Environment Map (for reflections), Matcap (as envMap), and SVG ---
  const rgbeLoader = new RGBELoader();
  const textureLoader = new THREE.TextureLoader();

  // Store the original environment map
  let originalEnvMap: THREE.Texture | null = null;
  let matcapTextureProxy: THREE.CanvasTexture | THREE.Texture;

  // Start with a default matcap in case loading fails
  matcapTextureProxy = createDefaultMatcap();

  // Load HDR environment map first (for general reflections)
  rgbeLoader.load(
    'https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr',
    (texture: THREE.DataTexture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      originalEnvMap = texture; // Store the original, unmodified map
      scene.environment = texture; // Use HDR for scene environment (affects lighting/reflections)
      buildScene(); // Just build the scene immediately without waiting
    },
    undefined,
    (error: unknown) => {
      console.error('HDR Load Error:', error);
      // If HDR fails, try to proceed anyway
      originalEnvMap = new THREE.Texture(); // Create dummy texture
      buildScene(); // Continue with scene building
    }
  );

  textureLoader.load(
    'https://cdn.prod.website-files.com/66260e4321c76d6302aa74e5/688c5dca05b526050a93354c_crystal_matcap-desat%20(1).png',
    (texture: THREE.Texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      // If the bolt material exists, update it with the loaded texture
      if (bolt && bolt.material) {
        bolt.material.envMap = texture;
        bolt.material.needsUpdate = true;
      } else {
        matcapTextureProxy = texture;
      }
    },
    undefined,
    (error: unknown) => {
      console.error('matcap load error:', error);
    }
  );

  // Store SVG data and shape globally for regeneration
  const svgData = `<svg width="45" height="161" viewBox="0 0 45 161" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.81272 0.418996C2.6871 0.163431 2.30027 0.283109 2.34092 0.564963L13.0797 75.0285C13.1015 75.1792 12.9846 75.3142 12.8323 75.3142H0.401385C0.216297 75.3142 0.0953853 75.5084 0.177007 75.6745L41.8922 160.574C42.0179 160.83 42.4051 160.71 42.364 160.428L31.5409 86.092C31.5189 85.9412 31.6359 85.806 31.7883 85.806H44.3824C44.5675 85.806 44.6884 85.6118 44.6067 85.4457L2.81272 0.418996Z" fill="black"/>
</svg>
`;
  let shape: THREE.Shape;

  // Extrude settings - made global for GUI control
  const extrudeSettings = {
    steps: 2,
    depth: 11,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 16, // Increased segments for smoother bevel shading
  };

  function buildScene(): void {
    try {
      const loader = new SVGLoader();
      const data = loader.parse(svgData);
      const path = data.paths[0];
      const shapes = SVGLoader.createShapes(path);
      shape = shapes[0];

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center();

      const scaleFactor = 0.02;
      geometry.scale(scaleFactor, -scaleFactor, scaleFactor);
      geometry.rotateX(Math.PI);

      // Add extrude settings to GUI after geometry is created (only if GUI enabled)
      if (ENABLE_GUI && gui) {
        const extrudeFolder = gui.addFolder('Extrude Settings');

        extrudeFolder
          .add(extrudeSettings, 'steps', 1, 10, 1)
          .name('Steps')
          .onChange(() => {
            regenerateGeometry();
          });

        extrudeFolder
          .add(extrudeSettings, 'depth', 1, 30)
          .name('Depth')
          .onChange(() => {
            regenerateGeometry();
          });

        extrudeFolder
          .add(extrudeSettings, 'bevelEnabled')
          .name('Bevel Enabled')
          .onChange(() => {
            regenerateGeometry();
          });

        extrudeFolder
          .add(extrudeSettings, 'bevelThickness', 0, 10)
          .name('Bevel Thickness')
          .onChange(() => {
            regenerateGeometry();
          });

        extrudeFolder
          .add(extrudeSettings, 'bevelSize', 0, 10)
          .name('Bevel Size')
          .onChange(() => {
            regenerateGeometry();
          });

        extrudeFolder
          .add(extrudeSettings, 'bevelOffset', -5, 5)
          .name('Bevel Offset')
          .onChange(() => {
            regenerateGeometry();
          });

        extrudeFolder
          .add(extrudeSettings, 'bevelSegments', 1, 32, 1)
          .name('Bevel Segments')
          .onChange(() => {
            regenerateGeometry();
          });
      }

      // --- Physical Material attempting to layer effects ---
      const material = new THREE.MeshPhysicalMaterial({
        roughness: materialParams.roughness,
        transparent: true,
        envMap: matcapTextureProxy,
        envMapIntensity: materialParams.envMapIntensity,
        side: THREE.DoubleSide,
      });
      // Mesh
      bolt = new THREE.Mesh(geometry, material);
      scene.add(bolt);

      // Setup GSAP ScrollTrigger for scroll-based rotation
      setupScrollTrigger();

      // Start animation loop
      animate();
    } catch (error) {
      console.error('Error building the scene:', error);
    }
  }

  // Function to regenerate geometry when extrude settings change
  function regenerateGeometry(): void {
    if (!bolt || !shape) return;

    // Dispose of the old geometry to prevent memory leaks
    bolt.geometry.dispose();

    // Create new geometry with updated settings
    const newGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    newGeometry.center();

    const scaleFactor = 0.02;
    newGeometry.scale(scaleFactor, -scaleFactor, scaleFactor);
    newGeometry.rotateX(Math.PI);

    // Update the bolt's geometry
    bolt.geometry = newGeometry;
  }

  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize(): void {
    const newRect = container.getBoundingClientRect();
    camera.aspect = newRect.width / newRect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(newRect.width, newRect.height);
    composer.setSize(newRect.width, newRect.height);
  }

  // Setup GSAP ScrollTrigger for rotation
  function setupScrollTrigger(): void {
    if (!scrollParams.active) return;

    // Create ScrollTrigger that animates rotation over the scroll-container
    window.gsap.to(
      { rotation: 0 },
      {
        rotation: Math.PI * 2 * scrollParams.rotationFactor, // Full rotation(s) in radians
        ease: 'none',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: 'top top', // Start when scroll-container top hits top of viewport (sticky starts)
          end: 'bottom bottom', // End when scroll-container bottom hits bottom of viewport
          scrub: true, // Smooth scrubbing
          onUpdate: (self: any) => {
            // Update our rotation value based on scroll progress
            scrollRotationY = Math.PI * 2 * scrollParams.rotationFactor * self.progress;
          },
        },
      }
    );
  }

  // Update animation loop to handle continuous rotation
  function animate(): void {
    requestAnimationFrame(animate);

    if (bolt) {
      // Smoothly interpolate current rotation toward target rotation from mouse
      currentRotation.x += (targetRotation.x - currentRotation.x) * smoothingFactor;
      currentRotation.y += (targetRotation.y - currentRotation.y) * smoothingFactor;

      // Combined rotation - apply both effects with their respective weights
      const finalX =
        currentRotation.x * (scrollParams.active ? scrollParams.mouseTrackingFactor : 1.0);
      const finalY =
        currentRotation.y * (scrollParams.active ? scrollParams.mouseTrackingFactor : 1.0) +
        scrollRotationY;

      // Apply combined rotation to the bolt
      bolt.rotation.set(finalX, finalY, 0);
    }

    controls.update();

    // Try-catch for error handling
    try {
      composer.render();
      // If we get here, rendering worked
      if (!window.hasRendered) {
        window.hasRendered = true;
      }
    } catch (error) {
      console.error('Error in render:', error);
    }
  }

  // More effective environment rotation function
  function updateEnvironmentRotation(): void {
    // Convert degrees to radians for three.js
    const radY = THREE.MathUtils.degToRad(envParams.rotationY);

    // Use scene.environment which holds the current environment map
    if (scene.environment && scene.environment.isTexture) {
      // For proper environment rotation, we would need to modify the texture transform
      // For now, we'll keep this as a placeholder for future implementation
      scene.environment.needsUpdate = true;

      // Apply updates to the material's envMap if it exists
      if (bolt && bolt.material && bolt.material.envMap) {
        bolt.material.envMap.needsUpdate = true;
        bolt.material.needsUpdate = true;
      }
    }
  }

  // Add scroll controls to the GUI (only if GUI enabled)
  if (ENABLE_GUI && gui) {
    const scrollFolder = gui.addFolder('Scroll Control');
    scrollFolder
      .add(scrollParams, 'active')
      .name('Scroll Rotation Active')
      .onChange(() => {
        // Refresh ScrollTrigger when toggling active state
        window.ScrollTrigger.refresh();
      });
    scrollFolder
      .add(scrollParams, 'rotationFactor', 0, 5)
      .name('Rotations per Scroll')
      .onChange(() => {
        // Refresh ScrollTrigger when changing rotation factor
        window.ScrollTrigger.refresh();
      });
    scrollFolder.add(scrollParams, 'mouseTrackingFactor', 0, 1).name('Mouse Effect During Scroll');
  }
}

// Initialize when scripts are loaded
window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  // Create bolt instance for homepage
  createBoltInstance('three-container');
  
  // Create bolt instance for menu (without scroll trigger)
  createBoltInstance('menu-bolt', { enableScrollTrigger: false });
});
