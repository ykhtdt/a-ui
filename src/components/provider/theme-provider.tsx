"use client"

import type { ReactNode, Dispatch } from "react"

import { useState, useEffect, createContext } from "react"

export type Theme = "light" | "dark"
export type ColorTheme = "zinc" | "blue" | "green"

interface ThemeContextValue {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: Dispatch<React.SetStateAction<Theme>>
  setColorTheme: Dispatch<React.SetStateAction<ColorTheme>>
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  colorTheme: "zinc",
  setTheme: () => {},
  setColorTheme: () => {}
})

export const ThemeProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [theme, setTheme] = useState<Theme>("light")
  const [colorTheme, setColorTheme] = useState<ColorTheme>("blue")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    document.documentElement.setAttribute("data-color-theme", colorTheme)
  }, [theme, colorTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
