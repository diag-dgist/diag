/** @jsx jsx */
import { Flex, jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import Navigation from "./navigation"

import lightImage from "../../../../static/logo-light.png"
import darkImage from "../../../../static/logo-dark.png"

type HeaderProps = {
  meta: {
    [key: string]: string
  }
  nav: {
    title: string
    slug: string
  }[]
}

const Header = ({ meta, nav }: HeaderProps) => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  const navEmpty = nav.length === 0

  const imageSrc = colorMode === "dark" ? darkImage : lightImage

  return (
    <Flex as="header" variant="layout.header">
      {!navEmpty && <Navigation nav={nav} />}
      <Flex
        sx={{
          fontWeight: `bold`,
          fontSize: 4,
          flex: navEmpty ? 1 : [`1 0 50%`, 1],
          justifyContent: navEmpty ? `flex-start` : [`flex-end`, `center`],
        }}
      >
      <Link
      aria-label={`${meta.siteTitle}, Back to homepage`}
      sx={(t) => ({
        ...t.styles?.a,
        color: `text`,
        fontFamily: "Montserrat, sans-serif",
        fontWeight: `700`, // optional: bold
        fontSize: "48px",
        ":hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      })}
      to="/"
      >
      <img
        src={imageSrc}
        alt="Logo"
        sx={{
          width: "41px",
          height: "41px",
          mr: 2,
          position: "relative",
          top: "3px",
        }}
      />
      {meta.siteTitle}
      </Link>
      </Flex>
      <div
        sx={{
          a: {
            fontSize: 4,
            color: `text`,
            display: `flex`,
            alignItems: `center`,
            "&:hover": {
              color: `primary`,
            },
            "&:not(:first-of-type)": {
              ml: 2,
            },
          },
          justifyContent: `flex-end`,
          flex: 1,
          display: `flex`,
          order: 3,
        }}
      >
        <button
          sx={{ variant: `buttons.toggle`, fontWeight: `semibold` }}
          onClick={() => {
            const next = isDark ? `light` : `dark`
            setColorMode(next)
            document.documentElement.classList.value = `theme-ui-${next}`
          }}
          type="button"
          data-testid="color-mode-toggle"
          aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        >
          {isDark ? `Light` : `Dark`}
        </button>
      </div>
    </Flex>
  )
}

export default Header
