"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import MobileNavigation from "./MobileNavigation";

// Основная функция компонента навигации
export function Navigation() {
  // Состояние для отслеживания прокрутки страницы
  const [isScrolled, setIsScrolled] = useState(false);
  // Состояние для открытия/закрытия мобильного меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Эффект для отслеживания прокрутки и изменения состояния isScrolled
  useEffect(() => {
    // Функция-обработчик события прокрутки
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Если прокручено больше 50px, меняем состояние
    };
    window.addEventListener("scroll", handleScroll); // Добавляем слушатель события
    // Очищаем слушатель при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Навигационная панель с анимацией появления сверху
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "" // Добавляем эффект "стекла" при прокрутке
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип или название сайта с анимацией при наведении */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            PV
          </motion.div>

          {/* Десктопная навигация (отображается только на md и выше) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Маппим элементы навигации */}
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }} // Анимация при наведении
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            {/* Кнопка для скачивания резюме */}
            <Button
              variant="outline"
              className="animate-glow bg-transparent cursor-pointer"
            >
              Download CV
            </Button>
          </div>

          {/* Кнопка открытия мобильного меню (отображается только на мобильных) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Иконка меню или крестик в зависимости от состояния */}
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Мобильная навигация (отображается только при открытом меню) */}
        <MobileNavigation
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={(openState) => setIsMobileMenuOpen(openState)}
        />
      </div>
    </motion.nav>
  );
}
