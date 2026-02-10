"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";

interface SceneProps {
  children: React.ReactNode;
  className?: string;
}

export default function Scene({ children, className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]} // Optimization for varying pixel ratios
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
