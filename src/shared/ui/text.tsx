import { cn } from "@/shared/lib"

export interface TextProps<T extends React.ElementType = "span"> extends React.HTMLAttributes<T> {
  as?: T;
}

export const Text = <T extends React.ElementType = "span">({
  as,
  className,
  children,
  ...rest
}: TextProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "span"

  return (
    <Component className={cn("text-foreground text-sm leading-6", className)} {...rest}>
      {children}
    </Component>
  )
}
