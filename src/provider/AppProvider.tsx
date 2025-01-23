"use client";

import { ThemeProvider, CssBaseline } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { useEffect, useState } from "react"
import { darkTheme, lightTheme } from "../theme/theme"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

const clientSideEmotionCache = createCache({ key: "css", prepend: true })

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </CacheProvider>
  )
}

export default AppProvider
