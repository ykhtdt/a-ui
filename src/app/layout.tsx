import type { Metadata } from "next"

import { pretendard, hahmlet, source } from "@/fonts/font"

import { ThemeProvider } from "@/components/provider/theme/theme-provider"
import { Header } from "@/components/header/header"
import { Sidebar } from "@/components/aside/sidebar"
import { TableOfContent } from "@/components/aside/table-of-content"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} ${hahmlet.variable} ${source.variable}`}>
        <ThemeProvider defaultTheme="dark" defaultThemeColor="purple">
          <div className="relative flex flex-col min-h-screen bg-background">
            <Header />
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
              <Sidebar />
              <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                <div className="flex mx-auto w-full min-w-0">
                  {children}
                </div>
                <TableOfContent />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
