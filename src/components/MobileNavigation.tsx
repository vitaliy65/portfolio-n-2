import React from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/navigation";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setTheme, Theme } from "@/store/slices/themeSlice";

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export default function MobileNavigation({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileNavigationProps) {
  const defaultTheme = useAppSelector((s) => s.theme.theme);
  const dispatch = useAppDispatch();

  return (
    isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden mt-4 bg-popover-foreground  rounded-lg p-4"
      >
        {/* Маппим элементы навигации для мобильного меню */}
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block py-2 text-popover/80 hover:text-popover transition-colors"
            onClick={() => setIsMobileMenuOpen(false)} // Закрываем меню при клике
          >
            {item.label}
          </a>
        ))}
        {/* Кнопка для скачивания резюме в мобильном меню */}
        <Button
          variant="outline"
          className="w-full mt-4 text-popover/80 hover:text-popover ring-2 bg-transparent p-0 "
        >
          <a
            href="/CV%20-%20Vitaliy%20Posvistak.pdf"
            download
            className="w-full h-full flex justify-center items-center"
          >
            Download CV
          </a>
        </Button>

        <Select
          onValueChange={(value) => {
            dispatch(setTheme(value as Theme));
          }}
          defaultValue={defaultTheme}
        >
          <SelectTrigger className="w-full mt-4 ">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(Theme).map((theme) => (
              <SelectItem
                key={theme}
                value={theme}
                className="!bg-transparent text-foreground/90 hover:bg-primary/10"
              >
                {theme}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
    )
  );
}
