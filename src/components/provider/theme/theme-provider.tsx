"use client"

import type { ReactNode, Dispatch } from "react"

import { useState, useEffect, createContext } from "react"

import ThemeScript from "./theme-script"

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

export const ThemeProvider = ({
  children,
  defaultTheme,
  defaultColorTheme,
}: {
  children: ReactNode
  defaultTheme: Theme
  defaultColorTheme: ColorTheme
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") as Theme || defaultTheme
    }
    return defaultTheme
  })

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("colorTheme") as ColorTheme || defaultColorTheme
    }
    return defaultColorTheme
  })

  useEffect(() => {
    const root = document.documentElement

    const systemThemeListener = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        setTheme(e.matches ? "dark" : "light")
      }
    }

    if (theme === "system") {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
      setTheme(prefersDarkScheme.matches ? "dark" : "light")

      prefersDarkScheme.addEventListener("change", systemThemeListener)
    }

    localStorage.setItem("theme", theme)
    localStorage.setItem("colorTheme", colorTheme)

    root.setAttribute("data-theme", theme)
    root.setAttribute("data-color-theme", colorTheme)
    root.className = `color-theme-${colorTheme} ${theme}`

    return () => {
      if (theme === "system") {
        window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", systemThemeListener)
      }
    }
  }, [theme, colorTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorTheme, setColorTheme }}>
      <ThemeScript defaultTheme={defaultTheme} defaultColorTheme={defaultColorTheme} />
      {children}
    </ThemeContext.Provider>
  )
}
