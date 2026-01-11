import { minerals } from "@/data/minerals";
import Image from "next/image";
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface MineBlockProps {
    cell: number
}

export default function MineBlock({ cell }: MineBlockProps) {
    const [clicks, setClicks] = useState(0);
    const clicksToBrake = 4;
    const [mineralIdx] = useState(() => Math.floor(Math.random() * minerals.length));
    const mineral = minerals[mineralIdx];
    const mineralRef = useRef<HTMLDivElement>(null);

    function handleClick() {
        if (clicks < clicksToBrake) setClicks(prev => prev + 1);
    }

    const baseClasses = [
        "mine-block",
        "rounded-[6px] bg-[#0ae448]",
        "shadow-[0_4px_0_0_#0ae44833]",
        "opacity-0",
        "scale-0",
        "translate-y-16",
    ];

    if (clicks === 1) {
        baseClasses.push("!scale-90", "!opacity-90", "!transition-all");
    }
    if (clicks === 2) {
        baseClasses.push("!scale-70", "!opacity-80", "!transition-all");
    }
    if (clicks === 3) {
        baseClasses.push("!scale-50", "!opacity-60", "!transition-all");
    }
    if (clicks >= 4) {
        baseClasses.push("!scale-0", "!opacity-0", "!pointer-events-none", "!transition-all");
    }

    useEffect(() => {
        if (clicks >= 4 && mineralRef.current) {
            gsap.fromTo(
                mineralRef.current,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, ease: "back.out(1.2)", duration: 0.6 }
            );
        }
    }, [clicks]);

    return (
        <div className="relative">
            <div
                style={{
                    width: `${cell}px`,
                    height: `${cell}px`,
                }}
                className={baseClasses.join(" ")}
                onClick={handleClick}
            />
            {clicks >= 4 &&
                <div
                    ref={mineralRef}
                    className="absolute mineral top-0 left-0"
                    style={{
                        width: `${cell}px`,
                        height: `${cell}px`,
                        // Optionally use will-change for performance
                        willChange: "transform, opacity",
                    }}
                >
                    <Image width={512} height={512} src={mineral.src} alt={mineral.alt} draggable={false} />
                </div>
            }
        </div>
    )
}
