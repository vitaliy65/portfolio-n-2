import React from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/navigation";
import { Button } from "./ui/button";

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export default function MobileNavigation({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileNavigationProps) {
  return (
    isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden mt-4 glass-effect rounded-lg p-4"
      >
        {/* Маппим элементы навигации для мобильного меню */}
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)} // Закрываем меню при клике
          >
            {item.label}
          </a>
        ))}
        {/* Кнопка для скачивания резюме в мобильном меню */}
        <Button variant="outline" className="w-full mt-4 bg-transparent">
          Download CV
        </Button>
      </motion.div>
    )
  );
}
