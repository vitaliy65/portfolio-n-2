"use client";
import { useAppSelector } from "@/store/hook";
import React, { useEffect, useState } from "react";

/*
  Почему не успевает загружаться тема:
  При использовании redux-persist, тема может быть не сразу доступна при инициализации приложения,
  так как persistReducer сначала восстанавливает состояние из localStorage асинхронно.
  Поэтому при первом рендере useAppSelector может вернуть initialState, а не актуальное значение из хранилища.
  Это приводит к "миганию" темы или неправильному классу на <html>.

  Решение: показывать индикатор загрузки, пока тема не восстановлена.
*/

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
        <body>
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0ms]"></span>
                <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:200ms]"></span>
                <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:400ms]"></span>
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
