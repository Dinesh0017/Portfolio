import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import HomePage from "../pages/HomePage";

export default function LaptopModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.x = 0.015 * Math.sin(t / 15)/50;
    group.current.rotation.y = Math.sin(t / 2) / 15;
    group.current.position.y = -1.5 + Math.sin(t / 2) / 50;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={[0.8, 0.8, 0.8]} position={[0, -0.02, 0.41]}>
      <group rotation-x={-0.425} position={[0, -0.02, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes["Cube008"].geometry} />
          <mesh material={materials["matte.001"]} geometry={nodes["Cube008_1"].geometry} />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            <Html rotation-x={-Math.PI / 2} position={[0, 0.05, -0.6]} transform occlude>
              <HomePage />
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes["Cube002"].geometry} />
        <mesh material={materials.trackpad} geometry={nodes["Cube002_1"].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}
