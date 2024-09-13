"use client"

import { useContext } from "react"

import { Palette } from "lucide-react"

import { ThemeContext } from "@/components/provider/theme/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
