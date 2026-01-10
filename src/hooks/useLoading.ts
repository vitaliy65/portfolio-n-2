"use client"
import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function useLoading() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    const [isLoading, setIsLoading] = useState(true)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        // Когда загрузка завершена
        if (!active && progress === 100) {
            setIsComplete(true)

            // Задержка перед скрытием экрана загрузки
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 500)

            return () => clearTimeout(timer)
        }
    }, [active, progress])

    return {
        isLoading,        // true пока показываем экран загрузки
        isComplete,       // true когда загрузка завершена
        active,           // true пока файлы грузятся
        progress,         // 0-100
        errors,           // массив ошибок
        item,             // текущий файл
        loaded,           // загружено файлов
        total,            // всего файлов
    }
}