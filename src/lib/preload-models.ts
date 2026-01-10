// lib/preload-models.ts
import { useGLTF } from '@react-three/drei'
import { projects } from '@/data/projects'

// Функция для предзагрузки всех моделей из проектов
export function preloadProjectModels() {
    projects.forEach((project) => {
        if (project.modelPath) {
            useGLTF.preload(project.modelPath)
        }
    })
}

// Вызываем предзагрузку сразу при импорте модуля
preloadProjectModels()