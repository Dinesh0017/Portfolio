import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import LaptopModel from "./components/LaptopModel";

export default function App() {
  return (
    <div className="w-screen h-screen  left-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Canvas camera={{ position: [5, 2, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
            <LaptopModel />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -1, 0]} scale={10} blur={1.5} far={10} />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5} />
      </Canvas>
    </div>
  );
}
