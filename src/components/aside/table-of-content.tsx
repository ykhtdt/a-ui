import Link from "next/link"

export const TableOfContent = () => {
  return (
    <div className="hidden text-sm xl:block">
      <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
        <div className="relative overflow-hidden h-full pb-10">
          <div className="h-full w-full">
            <div className="mb-4 font-semibold tracking-tight">
              On This Page
            </div>
            <ul className="m-0 list-none">
              <li className="mt-0 pt-2">
                <Link href="#" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
                    Installation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
