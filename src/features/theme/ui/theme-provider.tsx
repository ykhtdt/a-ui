"use client"

import type { ReactNode } from "react"

import { useState, useEffect } from "react"

import {Theme, ColorTheme, ThemeContext } from "@/features/theme"

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

const ThemeScript = ({
  defaultTheme,
  defaultColorTheme,
}: {
  defaultTheme?: Theme
  defaultColorTheme?: ColorTheme
}) => {
  const scriptContent = `
    (function() {
      const savedTheme = localStorage.getItem("theme");
      const savedColorTheme = localStorage.getItem("colorTheme");
      let theme = "${defaultTheme}";
      let colorTheme = "${defaultColorTheme}";

      if (savedTheme) {
        theme = savedTheme;
      } else if (theme) {
      } else {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }

      if (savedColorTheme) {
        colorTheme = savedColorTheme;
      }

      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-color-theme", colorTheme);
      document.documentElement.className = \`color-theme-\${colorTheme} \${theme}\`;
    })();
  `

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: scriptContent,
      }}
    />
  )
}
