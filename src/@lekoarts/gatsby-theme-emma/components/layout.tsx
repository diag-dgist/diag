import * as React from "react"
import { Global } from "@emotion/react"
import { Box, get } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import useNavigation from "../hooks/use-navigation"
import Footer from "./footer"
import Header from "./header"
import NewsContent from "./NewsContent"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const meta = useSiteMetadata()
  const nav = useNavigation()

  // Check for browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined"
  const isHomepage = isBrowser && window.location.pathname === "/"

  return (
    <React.Fragment>
      <Global
        styles={(t) => ({
          "*": {
            boxSizing: `inherit`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: get(t, `colors.text`),
            color: get(t, `colors.background`),
          },
        })}
      />
      <Header meta={meta} nav={nav} />
      <Box as="main" variant="layout.main" className={className}>
        {children}
      </Box>

      {/* Only show on homepage and avoid SSR error */}
      {isHomepage && <NewsContent />}

      <Footer />
    </React.Fragment>
  )
}

export default Layout
