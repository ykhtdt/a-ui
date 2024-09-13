"use client"

import type { ColorTheme } from "@/components/provider/theme/theme-provider"

import { useContext, useEffect, useState } from "react"

import { CircleIcon, CheckCircleIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { ThemeContext } from "@/components/provider/theme/theme-provider"

import "./color-theme-card.css"

interface ColorThemeCardProps {
  targetColorTheme: ColorTheme
}

export const ColorThemeCard = ({
  targetColorTheme,
}: ColorThemeCardProps) => {
  const { theme, colorTheme, setColorTheme } = useContext(ThemeContext)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleColorThemeSelect = () => {
    setColorTheme(targetColorTheme)
  }

  return (
    <Card className="w-full rounded-md border-zinc-light-border dark:border-zinc-dark-border">
      <CardHeader className="space-y-2">
        <div data-color-theme={targetColorTheme} className="w-full">
          <Skeleton className="h-4 w-1/4 animate-none bg-primary" />
        </div>
        <Skeleton className="h-4 w-3/4 animate-none bg-zinc-light-primary/10 dark:bg-zinc-dark-primary/10" />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border border-zinc-light-border p-4 dark:border-zinc-dark-border">
          <Skeleton className="size-5 animate-none bg-zinc-light-primary/10 dark:bg-zinc-dark-primary/10" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/2 animate-none bg-zinc-light-primary/10 dark:bg-zinc-dark-primary/10" />
            <Skeleton className="h-4 w-full animate-none bg-zinc-light-primary/10 dark:bg-zinc-dark-primary/10" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div data-color-theme={targetColorTheme} className="w-full">
          <Button
            size="sm"
            variant="outline"
            onClick={handleColorThemeSelect}
            className="w-full capitalize"
          >
            {isMounted && targetColorTheme === colorTheme ?
              <CheckCircleIcon className="mr-2 size-4" /> : <CircleIcon className="mr-2 size-4" />
            }
            <span className="truncate">
              {targetColorTheme} color theme
            </span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
