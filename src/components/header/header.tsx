"use client"

import { useContext } from "react"
import Link from "next/link"

import { HamburgerMenuIcon, MoonIcon, SunIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

import { ThemeContext } from "@/components/provider/theme/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
    <Sheet>
      <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-2xl transition-all">
          <div className="flex h-14 items-center">
            <div className="hidden sm:flex">
              <Link href="/" className="flex items-center space-x-2 lg:mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M12 20C7 20 4 16 4 12C4 8 7 4 12 4C17 4 20 8 20 12C20 14 19 17 16 17C14 17 12 14 12 12C12 9 14 7 17 7" />
                </svg>
                <span className="font-bold">
                  Design System
                </span>
              </Link>
            </div>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <HamburgerMenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <div className="flex flex-1 items-center justify-end space-x-2">
              <nav className="flex items-center gap-8 text-sm transition-all lg:gap-10">
                <div className="hidden items-center gap-4 transition-all sm:flex lg:gap-6">
                  <Link href="/" className="text-foreground/75 transition-colors hover:text-foreground">
                    Docs
                  </Link>
                  <Link href="/" className="text-foreground/75 transition-colors hover:text-foreground">
                    Themes
                  </Link>
                  <Link href="/" className="text-foreground/75 transition-colors hover:text-foreground">
                    Colors
                  </Link>
                  <Link href="/" className="text-foreground/75 transition-colors hover:text-foreground">
                    Examples
                  </Link>
                  <Link href="/" className="text-foreground/75 transition-colors hover:text-foreground">
                    Figma
                  </Link>
                </div>
                <div className="flex items-center space-x-4 transition-all lg:space-x-6">
                  <Button
                    asChild
                    className="size-5 border-none bg-inherit p-0 text-foreground shadow-none hover:bg-inherit focus:outline-none focus-visible:ring-0"
                  >
                    <Link
                      href="https://github.com/ykhtdt/a-ui"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubLogoIcon className="size-4" />
                      <span className="sr-only">
                        JGPARK Github
                      </span>
                    </Link>
                  </Button>
                  <Button
                    onClick={handleThemeChange}
                    className="size-5 border-none bg-inherit p-0 text-foreground shadow-none hover:bg-inherit focus:outline-none focus-visible:ring-0"
                  >
                    <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">
                      Toggle theme
                    </span>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">
            Mobile Navigation
          </SheetTitle>
          <SheetDescription className="sr-only">
            Use the links to browser the site.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M12 20C7 20 4 16 4 12C4 8 7 4 12 4C17 4 20 8 20 12C20 14 19 17 16 17C14 17 12 14 12 12C12 9 14 7 17 7" />
            </svg>
            <span className="text-sm font-bold">
              Design System
            </span>
          </Link>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm text-foreground">
              Docs
            </Link>
            <Link href="/" className="text-sm text-foreground">
              Themes
            </Link>
            <Link href="/" className="text-sm text-foreground">
              Colors
            </Link>
            <Link href="/" className="text-sm text-foreground">
              Examples
            </Link>
            <Link href="/" className="text-sm text-foreground">
              Figma
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
