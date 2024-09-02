import { Button } from "@/components/ui/button"

import { ThemeSwitch } from "@/components/button/theme-switch"

const Home = () => {
  return (
    <div>
      <ThemeSwitch />
      <Button variant="default">
        Shadcn/ui Button
      </Button>
      <Button variant="outline">
        Shadcn/ui Button
      </Button>
      <Button variant="secondary">
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
