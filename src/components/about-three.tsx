"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import { Sphere } from "@react-three/drei"
import type * as THREE from "three"

function FloatingSphere() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Sphere ref={ref} args={[1, 16, 16]}>
      <meshBasicMaterial color="#e10600" wireframe transparent opacity={0.2} />
    </Sphere>
  )
}

export function AboutThree() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="w-full h-64 lg:h-96">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
        <FloatingSphere />
      </Canvas>
    </div>
  )
}
