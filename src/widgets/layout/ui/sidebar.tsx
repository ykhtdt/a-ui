import Link from "next/link"

import { ScrollArea } from "@/shared/ui"

export const Sidebar = () => {
  return (
    <aside className="top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full py-6 md:sticky md:block lg:py-8">
      <ScrollArea className="relative h-full overflow-hidden pr-6">
        <div className="size-full">
          <div className="w-full">
            <div className="pb-4">
              <h4 className="mb-1 px-2 py-1 text-sm font-semibold">
                Getting Started
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link href="/" className="flex w-full items-center px-2 py-1 text-muted-foreground hover:underline">
                  Introduction
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
