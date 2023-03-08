import LapTop from "@/Components/LapTop";
import { ContactShadows, Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styles from "../styles/Home.module.scss"

export default function Home () {
    return (
        <div className={styles.canvasWrapper}>
            <Canvas camera={{ position: [5, 0, -15], fov: 55 }}>
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    <group rotation={[0, Math.PI + Math.PI / 18, 0]} position={[3, 1, -1]}>
                        <LapTop />
                    </group>
                    <Float
                        speed={0.5} // Animation speed, defaults to 1
                        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                        floatingRange={[1, 2]} 
                    >
                        <group rotation={[0, Math.PI - Math.PI / 6, -Math.PI / 18]} position={[-8.5,1,-3]}>
                            <Text fontSize={2}>Yamato</Text>
                        </group>
                    </Float>
                    <Float
                        speed={0.5} // Animation speed, defaults to 1
                        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                        floatingRange={[1,2]} 
                    >
                        <group rotation={[0, Math.PI - Math.PI / 6, -Math.PI / 18]} position={[-8.5,-1,-3]}>
                            <Text fontSize={2}>Portfolio</Text>
                        </group>
                    </Float>
                    <Environment preset="city" />
                </Suspense>
                <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
            </Canvas>
        </div>
    )
}