import { ThemeProvider } from "@/features/theme"

export const Providers = ({ children }: { children: React.ReactNode } ) => {
  return (
    <ThemeProvider defaultTheme="dark" defaultColorTheme="zinc">
      {children}
    </ThemeProvider>
  )
}
