import { Button } from "@/components/ui/button"

import { ThemeColorSwitch } from "@/components/dropdown-menu/theme/theme-color-switch"
import { ThemeSwitch } from "@/components/dropdown-menu/theme/theme-switch"

const Home = () => {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-center gap-4 mb-8">
          <ThemeColorSwitch />
          <ThemeSwitch />
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Button variant="default">
            Button
          </Button>
          <Button variant="secondary">
            Button
          </Button>
          <Button variant="outline">
            Button
          </Button>
          <Button variant="link">
            Button
          </Button>
          <Button variant="destructive">
            Button
          </Button>
          <Button variant="ghost">
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
