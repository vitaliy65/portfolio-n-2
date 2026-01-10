import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX } from 'react'
import { useRef } from "react"
import { MathUtils, Vector2 } from "three"
import { useEffect } from "react"
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
    nodes: {
        Frame_ComputerFrame_0: THREE.Mesh
        Plane: THREE.Mesh
        Screen_ComputerScreen_0: THREE.Mesh
    }
    materials: {
        ComputerFrame: THREE.MeshStandardMaterial
        photo: THREE.MeshStandardMaterial
        ComputerScreen: THREE.MeshStandardMaterial
    }
}

interface LaptopModelProps {
    modelPath: string
    props?: JSX.IntrinsicElements['group']
    // Настройки слежения
    trackingEnabled?: boolean
    maxRotationX?: number  // Максимальный угол по оси X (вверх-вниз) в градусах
    maxRotationY?: number  // Максимальный угол по оси Y (влево-вправо) в градусах
    smoothness?: number    // Плавность движения (0-1, где 1 = мгновенно)
}

export function LaptopModel({
    modelPath,
    props,
    trackingEnabled = true,
    maxRotationX = 15,  // ±15 градусов по вертикали
    maxRotationY = 20,  // ±20 градусов по горизонтали
    smoothness = 0.05   // Плавность
}: LaptopModelProps) {
    const groupRef = useRef<THREE.Group>(null)
    const { nodes, materials } = useGLTF(modelPath) as unknown as GLTFResult
    const mouse = useRef<Vector2>(new Vector2(0, 0))
    const targetRotation = useRef<Vector2>(new Vector2(0, 0))
    const currentRotation = useRef<Vector2>(new Vector2(0, 0))

    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            // Нормализуем координаты мыши от -1 до 1
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = -(e.clientY / window.innerHeight) * 2 + 1
            mouse.current.set(x, y)
        }

        window.addEventListener('mousemove', onMouseMove)
        return () => window.removeEventListener('mousemove', onMouseMove)
    }, [])

    useFrame(() => {
        if (!groupRef.current || !trackingEnabled) return

        // Конвертируем градусы в радианы
        const maxRotX = MathUtils.degToRad(maxRotationX)
        const maxRotY = MathUtils.degToRad(maxRotationY)

        // Вычисляем целевой поворот на основе позиции мыши
        targetRotation.current.x = mouse.current.y * maxRotX
        targetRotation.current.y = mouse.current.x * maxRotY

        // Плавная интерполяция к целевому повороту
        currentRotation.current.x = MathUtils.lerp(
            currentRotation.current.x,
            targetRotation.current.x,
            smoothness
        )
        currentRotation.current.y = MathUtils.lerp(
            currentRotation.current.y,
            targetRotation.current.y,
            smoothness
        )

        // Применяем поворот к модели
        groupRef.current.rotation.x = currentRotation.current.x
        groupRef.current.rotation.y = currentRotation.current.y
    })

    return (
        <group {...props} dispose={null} ref={groupRef}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={1.4} position={[0, -12, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0, 0.65, -10.3]}
                        rotation={[Math.PI, 0, Math.PI]}
                        scale={[100, 100, 88.235]}>
                        <mesh
                            geometry={nodes.Plane.geometry}
                            material={materials.photo}
                            position={[0, 0.106, 0.004]}
                            rotation={[Math.PI / 2, 0, -Math.PI]}
                            scale={[0.147, 0.103, 0.093]}
                        />
                        <mesh
                            geometry={nodes.Screen_ComputerScreen_0.geometry}
                            material={materials.ComputerScreen}
                            scale={[1, 1.069, 1]}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Frame_ComputerFrame_0.geometry}
                        material={materials.ComputerFrame}
                        position={[0, 0.976, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                </group>
            </group>
        </group>
    )
}
