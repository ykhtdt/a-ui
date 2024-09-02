"use client"

import type { Theme, ColorTheme } from "@/components/provider/theme-provider"

import { useContext } from "react"

import { ThemeContext } from "@/components/provider/theme-provider"

export const ThemeSwitch = () => {
  const { theme, setTheme, colorTheme, setColorTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((prevTheme: Theme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const changeColorTheme = (newColorTheme: ColorTheme) => {
    setColorTheme(newColorTheme)
  }

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div>
        <button onClick={() => changeColorTheme("blue")}>Blue Theme</button>
        <button onClick={() => changeColorTheme("green")}>Green Theme</button>
        <button onClick={() => changeColorTheme("zinc")}>Zinc Theme</button>
      </div>
    </div>
  )
}
