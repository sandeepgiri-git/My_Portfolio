"use client";

import { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

// Extend Line_ to avoid conflict with SVG line element
class Line_ extends THREE.Line {}
extend({ Line_ });

export default function FloatingGrid() {
  const gridRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const result: THREE.Line[] = [];
    const gridSize = 20;
    const divisions = 20;
    const step = gridSize / divisions;

    for (let i = -gridSize / 2; i <= gridSize / 2; i += step) {
      // Horizontal lines
      const hGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i, 0, -gridSize / 2),
        new THREE.Vector3(i, 0, gridSize / 2),
      ]);
      const hMat = new THREE.LineBasicMaterial({ color: "#06b6d4", transparent: true, opacity: 0.08, depthWrite: false });
      result.push(new THREE.Line(hGeo, hMat));

      // Vertical lines
      const vGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-gridSize / 2, 0, i),
        new THREE.Vector3(gridSize / 2, 0, i),
      ]);
      const vMat = new THREE.LineBasicMaterial({ color: "#06b6d4", transparent: true, opacity: 0.08, depthWrite: false });
      result.push(new THREE.Line(vGeo, vMat));
    }
    return result;
  }, []);

  useFrame((state) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();
    gridRef.current.rotation.x = -Math.PI / 2.5;
    gridRef.current.position.y = -2;

    gridRef.current.children.forEach((child, i) => {
      if (child instanceof THREE.Line) {
        const mat = child.material as THREE.LineBasicMaterial;
        mat.opacity = 0.08 + Math.sin(time * 0.5 + i * 0.1) * 0.04;
      }
    });
  });

  return (
    <group ref={gridRef}>
      {lines.map((lineObj, i) => (
        <primitive key={i} object={lineObj} />
      ))}
    </group>
  );
}
