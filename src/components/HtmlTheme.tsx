"use client";
import { useAppSelector } from "@/store/hook";
import React, { useEffect, useState } from "react";

export default function HtmlTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { theme } = useAppSelector((s) => s.theme);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Ждём, пока компонент смонтируется на клиенте
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    // Красивый лоадер с тремя прыгающими точками, используя tailwind
    return (
      <html lang="en">
        <body className="bg-foreground ">
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-background rounded-full animate-bounce [animation-delay:0ms]"></span>
                <span className="w-3 h-3 bg-background rounded-full animate-bounce [animation-delay:200ms]"></span>
                <span className="w-3 h-3 bg-background rounded-full animate-bounce [animation-delay:400ms]"></span>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={theme}>
      {children}
    </html>
  );
}
