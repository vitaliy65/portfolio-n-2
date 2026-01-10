"use client"

import { Canvas } from "@react-three/fiber"
import { useState, useEffect } from "react"
import { LaptopModel } from "./models/LaptopModel"
import { Environment } from "@react-three/drei"

export function ProjectThree({ modelPath }: { modelPath: string }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <Canvas camera={{ position: [0, 15, 50], fov: 50 }}>
        <Environment preset="studio" />
        <LaptopModel modelPath={modelPath} />
      </Canvas>
    </div>
  )
}
