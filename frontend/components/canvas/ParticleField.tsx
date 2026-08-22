"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  size?: number;
  spread?: number;
  color?: string;
  speed?: number;
}

export default function ParticleField({ 
  count = 800, 
  size = 0.015, 
  spread = 20,
  color = "#06b6d4",
  speed = 0.3
}: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  
  const { positions, speeds, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      speeds[i] = Math.random() * 0.5 + 0.5;
      offsets[i] = Math.random() * Math.PI * 2;
    }
    
    return { positions, speeds, offsets };
  }, [count, spread]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speed;
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] += Math.sin(time * speeds[i] + offsets[i]) * 0.002;
      posArray[i3] += Math.cos(time * speeds[i] * 0.5 + offsets[i]) * 0.001;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
