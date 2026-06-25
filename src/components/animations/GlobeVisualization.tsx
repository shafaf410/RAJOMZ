"use client";

import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Program, Mesh, Box } from "ogl";

export default function GlobeVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Basic OGL Setup for placeholder
    const renderer = new Renderer({ alpha: true, antialias: true, dpr: 2 });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 0, 5);

    const scene = new Transform();

    function resize() {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Box(gl);

    const program = new Program(gl, {
      vertex: `
        attribute vec3 position;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        void main() {
          gl_FragColor = vec4(0.894, 0.169, 0.047, 0.3); // Accent color transparent
        }
      `,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let requestAnimationFrameId: number;
    function update(t: number) {
      requestAnimationFrameId = requestAnimationFrame(update);
      mesh.rotation.y -= 0.01;
      mesh.rotation.x += 0.005;
      renderer.render({ scene, camera });
    }
    requestAnimationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(requestAnimationFrameId);
      window.removeEventListener("resize", resize);
      if (containerRef.current && gl.canvas.parentNode === containerRef.current) {
        containerRef.current.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div ref={containerRef} className="absolute inset-0 w-full h-full z-0" />
      
      {/* Overlay Content */}
      <div className="z-10 text-center pointer-events-none p-6">
        <h3 className="font-display font-semibold text-gray-800 text-lg mb-2">
          Global Operations Dashboard
        </h3>
        <p className="text-gray-500 text-sm max-w-xs mx-auto">
          Interactive WebGL logistics network visualization. Real-time fleet tracking and dynamic routes will render here.
        </p>
      </div>
    </div>
  );
}
