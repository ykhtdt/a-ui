"use client"

import { useContext } from "react"

import { ThemeContext } from "@/components/provider/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const ThemeColorSwitch = () => {
  const { setThemeColor } = useContext(ThemeContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeColor("zinc")}>
          Zinc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("blue")}>
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("green")}>
          Green
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
