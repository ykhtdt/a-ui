"use client"

import { useContext } from "react"
import Link from "next/link"

import { MoonIcon, SunIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ThemeContext } from "@/components/provider/theme/theme-provider"

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    if (theme === "system") {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
      setTheme(prefersDarkScheme.matches ? "dark" : "light")

      return
    }

    setTheme((prev) => prev === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 a-ui-icon"
            >
              <path d="M12 20C7 20 4 16 4 12C4 8 7 4 12 4C17 4 20 8 20 12C20 14 19 17 16 17C14 17 12 14 12 12C12 9 14 7 17 7" />
            </svg>
            <span className="hidden font-bold lg:inline-block">
              Design System
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              <Link href="/" className="transition-colors text-foreground/75 hover:text-foreground">
                Home
              </Link>
              <Link href="/docs" className="transition-colors text-foreground/75 hover:text-foreground">
                Docs
              </Link>
              <Link href="/themes" className="transition-colors text-foreground/75 hover:text-foreground">
                Themes
              </Link>
              <Link href="/colors" className="transition-colors text-foreground/75 hover:text-foreground">
                Colors
              </Link>
              <Link href="/examples" className="transition-colors text-foreground/75 hover:text-foreground">
                Examples
              </Link>
              <Link href="/figma" className="transition-colors text-foreground/75 hover:text-foreground">
                Figma
              </Link>
              <Button
                asChild
                className="p-0 w-5 h-5 border-none bg-inherit text-foreground shadow-none focus:outline-none focus-visible:ring-0 hover:bg-inherit"
              >
                <Link
                  href="https://github.com/ykhtdt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="w-4 h-4" />
                  <span className="sr-only">
                    JGPARK Github
                  </span>
                </Link>
              </Button>
              <Button
                onClick={handleThemeChange}
                className="p-0 w-5 h-5 border-none bg-inherit text-foreground shadow-none focus:outline-none focus-visible:ring-0 hover:bg-inherit"
              >
                <SunIcon className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">
                  Toggle theme
                </span>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
