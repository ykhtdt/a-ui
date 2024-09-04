"use client"

import type { ColorTheme } from "@/components/provider/theme/theme-provider"

import { useContext } from "react"

import { BadgeIcon, BadgeCheckIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { ThemeContext } from "@/components/provider/theme/theme-provider"

interface ColorThemeCardProps {
  targetColorTheme: ColorTheme
}

export const ColorThemeCard = ({
  targetColorTheme,
}: ColorThemeCardProps) => {
  const { theme, colorTheme, setColorTheme } = useContext(ThemeContext)

  const handleColorThemeSelect = () => {
    setColorTheme(targetColorTheme)
  }

  return (
    <div data-color-theme={targetColorTheme} data-theme={theme} className="theme-wrapper">
      <Card className="w-64 rounded-lg">
        <CardHeader className="space-y-2">
          <Skeleton className="w-1/4 h-4 animate-none" />
          <Skeleton className="w-3/4 h-4 animate-none" />
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <Skeleton className="w-5 h-5 animate-none" />
            <div className="flex-1 space-y-2">
              <Skeleton className="w-1/2 h-4 animate-none" />
              <Skeleton className="w-full h-4 animate-none" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            size="sm"
            onClick={handleColorThemeSelect}
            className="w-full capitalize"
          >
            {targetColorTheme === colorTheme ?
              <BadgeCheckIcon className="mr-2 h-4 w-4" /> : <BadgeIcon className="mr-2 h-4 w-4" />
            }
            <span>
              {targetColorTheme} color theme
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}