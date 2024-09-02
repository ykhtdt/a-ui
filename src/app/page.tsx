import { Button } from "@/components/ui/button"

import { ThemeColorSwitch } from "@/components/dropdown-menu/theme/theme-color-switch"
import { ThemeSwitch } from "@/components/dropdown-menu/theme/theme-switch"

const Home = () => {
  return (
    <div>
      <ThemeColorSwitch />
      <ThemeSwitch />
      <Button variant="default">
        Shadcn/ui Button
      </Button>
      <Button variant="secondary">
        Shadcn/ui Button
      </Button>
      <Button variant="outline">
        Shadcn/ui Button
      </Button>
      <Button variant="link">
        Shadcn/ui Button
      </Button>
      <Button variant="destructive">
        Shadcn/ui Button
      </Button>
      <Button variant="ghost">
        Shadcn/ui Button
      </Button>
    </div>
  )
}

export default Home
