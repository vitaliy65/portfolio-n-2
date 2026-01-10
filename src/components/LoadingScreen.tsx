"use client"
import "@/lib/preload-models"
import { useLoading } from "@/hooks/useLoading"

export function LoadingScreen() {
    const { isLoading, progress } = useLoading()

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
            <div className="flex flex-col items-center gap-8 w-[90vw] max-w-sm px-6 py-12 rounded-2xl animate-in fade-in">
                <div className="flex flex-col items-center gap-4 w-full">
                    <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                        <div
                            className="absolute left-0 top-0 h-full bg-accent transition-all duration-300 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="text-xl font-medium text-accent drop-shadow tracking-wide transition-all">{progress.toFixed(0)}%</div>
                </div>
            </div>
        </div>
    )
}