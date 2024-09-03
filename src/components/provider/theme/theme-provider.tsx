"use client"

import type { ReactNode, Dispatch } from "react"

import { useState, useEffect, createContext } from "react"

import ThemeScript from "./theme-script"

export type Theme = "light" | "dark" | "system"
export type ThemeColor = "zinc" | "blue" | "green" | "purple" | "red"

interface ThemeContextValue {
  theme: Theme
  themeColor: ThemeColor
  setTheme: Dispatch<React.SetStateAction<Theme>>
  setThemeColor: Dispatch<React.SetStateAction<ThemeColor>>
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  themeColor: "zinc",
  setTheme: () => {},
  setThemeColor: () => {}
})

export const ThemeProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") as Theme || "system"
    }
    return "system"
  })

  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("themeColor") as ThemeColor || "blue"
    }
    return "blue"
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
    localStorage.setItem("themeColor", themeColor)

    root.setAttribute("data-theme", theme)
    root.setAttribute("data-color-theme", themeColor)
    root.className = `color-theme-${themeColor} ${theme}`

    return () => {
      if (theme === "system") {
        window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", systemThemeListener)
      }
    }
  }, [theme, themeColor])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeColor, setThemeColor }}>
      <ThemeScript />
      {children}
    </ThemeContext.Provider>
  )
}
