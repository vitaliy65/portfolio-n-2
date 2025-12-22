"use client"
import React, { useEffect } from 'react'
import Snowfall from 'react-snowfall'

export default function SnowfallClient() {
    // Определяем количество снежинок в зависимости от ширины экрана
    const getSnowflakeCount = () => {
        if (typeof window === "undefined") return 200;
        // Ширина до 1024px - мобильные или планшеты (tailwind md breakpoint)
        if (window.innerWidth < 1024) {
            return 50;
        }
        return 200;
    }

    const [snowflakeCount, setSnowflakeCount] = React.useState(getSnowflakeCount());

    useEffect(() => {
        const handleResize = () => {
            setSnowflakeCount(getSnowflakeCount());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='fixed inset-0 w-screen h-screen'>
            <Snowfall color='white' snowflakeCount={snowflakeCount} />
        </div>
    )
}
