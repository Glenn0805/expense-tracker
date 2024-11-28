"use client"
import React, { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

interface IThemeProvider extends ThemeProviderProps {
    children: ReactNode,
}
const ThemeProvider = ({ children, ...props }: IThemeProvider) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider