import { CheckIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { ThemeColorSwitch } from "@/components/dropdown-menu/theme/theme-color-switch"
import { ThemeSwitch } from "@/components/dropdown-menu/theme/theme-switch"
import { ColorThemeCard } from "@/pages/home/ui/color-theme-card"

const Home = () => {
  return (
    <div className="flex-1 mt-4">
      <div className="flex flex-col gap-8">

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

        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <ColorThemeCard targetColorTheme="zinc" />
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <ColorThemeCard targetColorTheme="purple" />
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <ColorThemeCard targetColorTheme="red" />
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <ColorThemeCard targetColorTheme="green" />
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <ColorThemeCard targetColorTheme="blue" />
            </CarouselItem>
          </CarouselContent>
          <div className="relative flex justify-end gap-4 mt-4">
            <CarouselPrevious className="static inset-auto translate-x-0 translate-y-0" />
            <CarouselNext className="static inset-auto translate-x-0 translate-y-0" />
          </div>
        </Carousel>

        <div className="h-[1500px]" />
      </div>
    </div>
  )
}

export default Home
