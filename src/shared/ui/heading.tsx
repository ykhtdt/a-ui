import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib"

export const headingVariants = cva(
  "text-foreground",
  {
    variants: {
      as: {
        "1": "text-xl font-bold",
        "2": "text-lg font-semibold",
        "3": "text-base font-semibold",
      },
    },
    defaultVariants: {
      as: "3",
    },
  }
)

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "1" | "2" | "3"
}

export const Heading = ({
  as,
  className,
  children,
  ...rest
}: HeadingProps) => {
  const Component = `h${as}` as "h1" | "h2" | "h3"

  return (
    <Component className={cn(headingVariants({ as, className }))} {...rest}>
      {children}
    </Component>
  )
}
