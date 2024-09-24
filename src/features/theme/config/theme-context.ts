"use client"

import type { Dispatch } from "react"

import { createContext } from "react"

export type ColorTheme = "zinc" | "blue" | "green" | "purple" | "red"
export type Theme = "light" | "dark" | "system"

interface ThemeContextValue {
  theme?: Theme
  colorTheme?: ColorTheme
  setTheme: Dispatch<React.SetStateAction<Theme>>
  setColorTheme: Dispatch<React.SetStateAction<ColorTheme>>
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: undefined,
  colorTheme: undefined,
  setTheme: () => {},
  setColorTheme: () => {}
})
