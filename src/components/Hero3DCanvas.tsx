import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, RotateCw, Sparkles, Sliders } from 'lucide-react';

interface Hero3DCanvasProps {
  onInteract?: () => void;
}

export function Hero3DCanvas({ onInteract }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [coreColor, setCoreColor] = useState<'cobalt' | 'cyan' | 'sapphire'>('cobalt');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [dockOpen, setDockOpen] = useState<boolean>(false);

  // Mutable refs for render loop access without re-mounting canvas
  const stateRef = useRef({
    isWireframe,
    coreColor,
    speedMultiplier,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  useEffect(() => {
    stateRef.current.isWireframe = isWireframe;
    stateRef.current.coreColor = coreColor;
    stateRef.current.speedMultiplier = speedMultiplier;
  }, [isWireframe, coreColor, speedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Detect Software WebGL
    const isSoftwareGl = (() => {
      try {
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 2. Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07090e);
    scene.fog = new THREE.FogExp2(0x07090e, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0a192f, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(5, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x1d4ed8, 2.0);
    fillLight.position.set(-6, -3, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x60a5fa, 3.0, 15);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // 4. Procedural Neural Core Group (Composite 3-12 parts)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Part A: Inner Faceted Gemstone Core (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x1d4ed8,
      roughness: 0.25,
      metalness: 0.85,
      clearcoat: 0.8,
      wireframe: false,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Part B: Outer Geodesic Wireframe Lattice
    const outerGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(outerGeo, wireframeMat);
    coreGroup.add(wireframeMesh);

    // Part C: Orbital Gimbal Ring 1 (Equatorial)
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // Part D: Orbital Gimbal Ring 2 (Polar)
    const ring2Geo = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.95,
      roughness: 0.15,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // Part E: 407 Particle Nodes (honoring lucky #07)
    const particleCount = 407;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleBasePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleBasePositions[i * 3] = x;
      particleBasePositions[i * 3 + 1] = y;
      particleBasePositions[i * 3 + 2] = z;

      particleScales[i] = 0.5 + Math.random() * 1.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle sprite using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(147, 197, 253, 1)');
      gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.6)');
      gradient.addColorStop(1, 'rgba(7, 9, 14, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);
    particleTexture.colorSpace = THREE.SRGBColorSpace;

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Mouse Parallax & Interaction Listeners
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.targetMouseX = x;
      stateRef.current.targetMouseY = y;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // 6. Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 7. Render Loop with Exponential Damping & Software GL pacing
    let frameId = 0;
    const clock = new THREE.Clock();

    function tick() {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const state = stateRef.current;

      // Mouse smooth exponential damping
      state.mouseX = THREE.MathUtils.damp(state.mouseX, state.targetMouseX, 4, delta);
      state.mouseY = THREE.MathUtils.damp(state.mouseY, state.targetMouseY, 4, delta);

      // Core rotation with user speed multiplier
      const rotSpeed = 0.4 * state.speedMultiplier;
      coreGroup.rotation.y += rotSpeed * delta;
      coreGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.15 + state.mouseY * 0.3;
      coreGroup.rotation.z = Math.cos(elapsed * 0.25) * 0.1 + state.mouseX * 0.3;

      // Gimbal counter-rotation
      ring1.rotation.z += 0.6 * state.speedMultiplier * delta;
      ring2.rotation.x -= 0.5 * state.speedMultiplier * delta;

      // Update inner material based on state
      innerMat.wireframe = state.isWireframe;
      if (state.coreColor === 'cyan') {
        innerMat.color.setHex(0x06b6d4);
        keyLight.color.setHex(0x22d3ee);
      } else if (state.coreColor === 'sapphire') {
        innerMat.color.setHex(0x1e3a8a);
        keyLight.color.setHex(0x3b82f6);
      } else {
        innerMat.color.setHex(0x2563eb);
        keyLight.color.setHex(0x60a5fa);
      }

      // Gentle floating particle kinematics
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const positions = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const bx = particleBasePositions[i3];
        const by = particleBasePositions[i3 + 1];
        const bz = particleBasePositions[i3 + 2];

        // Harmonic breath
        const wave = Math.sin(elapsed * 1.2 + i * 0.1) * 0.15;
        positions[i3] = bx + wave * (bx / 4);
        positions[i3 + 1] = by + Math.cos(elapsed * 0.9 + i * 0.12) * 0.15;
        positions[i3 + 2] = bz + wave * (bz / 4);
      }
      posAttr.needsUpdate = true;
      particles.rotation.y = elapsed * 0.05 * state.speedMultiplier;

      // Render
      renderer.render(scene, camera);

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    // 8. Cleanup & Disposal
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      // Dispose Geometries and Materials
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      wireframeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[580px] lg:min-h-[680px] overflow-hidden select-none">
      {/* 3D WebGL Canvas Mounting Node */}
      <div
        ref={mountRef}
        onClick={onInteract}
        className="absolute inset-0 cursor-grab active:cursor-grabbing w-full h-full"
        aria-label="Interactive 3D Neural Core"
      />

      {/* Subtle Depth Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#07090e]/30 to-[#07090e]" />

      {/* Node #07 Telemetry Pill — Top Right */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#0a0f1d]/80 border border-blue-900/40 rounded-md text-xs font-mono text-blue-400">
        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        <span>Node #07</span>
        <span className="text-slate-500">·</span>
        <span>407 Active Nodes</span>
      </div>

      {/* Ergonomic Collapsible Bottom Control Dock — Strictly zero viewport occlusion */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-[500px]">
        {/* Toggle Bar */}
        <div className="flex justify-center mb-2">
          <button
            type="button"
            onClick={() => setDockOpen(!dockOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-[#0d1424]/90 border border-slate-700/60 rounded-full hover:text-white hover:border-blue-500/60 transition-colors shadow-lg shadow-black/40"
          >
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span>{dockOpen ? 'Hide 3D Controls' : 'Configure 3D Core'}</span>
          </button>
        </div>

        {/* Collapsible Dock Drawer */}
        {dockOpen && (
          <div className="p-3.5 bg-[#0a0f1d]/95 border border-blue-900/50 rounded-xl shadow-2xl backdrop-blur-md transition-all">
            <div className="grid grid-cols-3 gap-2.5 text-xs">
              {/* Wireframe Toggle */}
              <button
                type="button"
                onClick={() => setIsWireframe(!isWireframe)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-colors ${
                  isWireframe
                    ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {isWireframe ? <Eye className="w-4 h-4 mb-1 text-blue-400" /> : <EyeOff className="w-4 h-4 mb-1" />}
                <span className="font-mono text-[11px]">{isWireframe ? 'Wireframe' : 'Solid Core'}</span>
              </button>

              {/* Color Mode Switcher */}
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 font-mono">Palette</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setCoreColor('cobalt')}
                    title="Cobalt Blue"
                    className={`w-4 h-4 rounded-full bg-blue-600 transition-transform ${
                      coreColor === 'cobalt' ? 'scale-125 ring-2 ring-white ring-offset-1 ring-offset-slate-900' : 'opacity-60'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setCoreColor('cyan')}
                    title="Electric Cyan"
                    className={`w-4 h-4 rounded-full bg-cyan-400 transition-transform ${
                      coreColor === 'cyan' ? 'scale-125 ring-2 ring-white ring-offset-1 ring-offset-slate-900' : 'opacity-60'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setCoreColor('sapphire')}
                    title="Deep Sapphire"
                    className={`w-4 h-4 rounded-full bg-indigo-700 transition-transform ${
                      coreColor === 'sapphire' ? 'scale-125 ring-2 ring-white ring-offset-1 ring-offset-slate-900' : 'opacity-60'
                    }`}
                  />
                </div>
              </div>

              {/* Speed Multiplier */}
              <button
                type="button"
                onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1))}
                className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
              >
                <RotateCw className="w-4 h-4 mb-1 text-cyan-400" />
                <span className="font-mono text-[11px]">{speedMultiplier}x Velocity</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
