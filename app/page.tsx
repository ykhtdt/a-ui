import { CheckIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { ThemeColorSwitch } from "@/components/dropdown-menu/theme/theme-color-switch"
import { ThemeSwitch } from "@/components/dropdown-menu/theme/theme-switch"
import { ColorThemeCard } from "@/pages/home/ui/color-theme-card"

const Home = () => {
  return (
    <main className="flex-1 mt-4">
      <div className="container max-w-screen-2xl flex flex-col gap-8">

        <div className="flex flex-row justify-center gap-4">
          <ThemeColorSwitch />
          <ThemeSwitch />
        </div>

        <div className="flex flex-row justify-center gap-4 flex-wrap">
          <Button variant="default">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="link">Button</Button>
          <Button variant="destructive">Button</Button>
          <Button variant="ghost">Button</Button>
        </div>

        <ColorThemeCard />

        <div className="h-[1500px]" />
      </div>
    </main>
  )
}

export default Home
