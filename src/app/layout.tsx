import "./globals.css"
import type { Metadata } from "next"
import Breadcrumb from "@/components/Breadcrumb"
import { ChevronRight } from "@mui/icons-material"
import AppProvider from "@/provider/AppProvider"
import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: {
    template: "%s | Recipe App",
    default: "Recipe App",
  },
  description: "Discover and share amazing recipes",
  keywords: ["recipes", "cooking", "baking"],
}
const pages = ["recipes", "about", "blog"]

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>

          <AppProvider>
            <NavBar pages={pages} />
            <Breadcrumb
              homeElement={"Home"}
              separator={<ChevronRight />}
              capitalizeLinks
            />
            {children}
          </AppProvider>
      </body>
    </html>
  )
}

export default RootLayout
