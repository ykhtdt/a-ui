"use client"

import { Palette } from "lucide-react"
import { useContext } from "react"

import { ThemeContext } from "@/features/theme"
import {
  Button,

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui"

export const ThemeColorSwitch = () => {
  const { setColorTheme } = useContext(ThemeContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="size-[1.2rem]"/>
          <span className="sr-only">Toggle theme color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setColorTheme("zinc")}>
          Zinc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("blue")}>
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("green")}>
          Green
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("purple")}>
          Purple
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("red")}>
          Red
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
