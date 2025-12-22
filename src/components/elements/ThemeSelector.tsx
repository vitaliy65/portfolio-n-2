import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { setTheme, Theme } from "@/store/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";


export default function ThemeSelector() {
    const defaultTheme = useAppSelector((s) => s.theme.theme);
    const dispatch = useAppDispatch();

    return (
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
    )
}
