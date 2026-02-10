"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Text } from "@react-three/drei";
import * as THREE from "three";

export default function HeroExperience() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Subtle rotation based on mouse position
    const { x, y } = state.mouse;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.5, 0.1);
  });

  return (
    <>
      <Environment preset="city" />
      
      <group ref={meshRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          {/* Main Abstract Shape */}
          <mesh position={[0, 0, 0]}>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color="#1a1a1a"
              roughness={0.1}
              metalness={0.8}
              wireframe
            />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <icosahedronGeometry args={[1.48, 0]} />
            <meshStandardMaterial
              color="#000"
              roughness={0.2}
              metalness={1}
            />
          </mesh>

          {/* Floating Orbiting Elements */}
          <mesh position={[2.5, 1, -1]}>
            <torusGeometry args={[0.3, 0.1, 16, 32]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
          </mesh>
          
           <mesh position={[-2, -1.5, 0.5]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>
      </group>

      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
      
      {/* Cinematic Lighting */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
    </>
  );
}
