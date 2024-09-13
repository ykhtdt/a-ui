import { Button } from "@/components/ui/button"
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
import { Heading } from "@/shared/ui/heading"

const Home = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-8">

        <div className="flex flex-row justify-center gap-4">
          <ThemeColorSwitch />
          <ThemeSwitch />
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4">
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
          <div className="relative mt-4 flex justify-end gap-4">
            <CarouselPrevious className="static inset-auto translate-x-0 translate-y-0" />
            <CarouselNext className="static inset-auto translate-x-0 translate-y-0" />
          </div>
        </Carousel>

        <div className="rounded-md border border-zinc-light-border dark:border-zinc-dark-border">
          <div className="p-6">
            <Heading as="1">
              Lorem Ipsum
            </Heading>
            <Heading as="2" className="mt-6 border-b border-zinc-light-border pb-2 dark:border-zinc-dark-border">
              What is Lorem Ipsum?
            </Heading>
            <Heading as="3" className="mt-4">
              The standard Lorem Ipsum passage, used since the 1500s
            </Heading>
          </div>
        </div>

        <div className="h-[1500px]" />
      </div>
    </div>
  )
}

export default Home
