import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  pathPrefix: "/diag",
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emma-core/gatsby-config.mjs
    siteTitle: `DIAG`,
    siteTitleAlt: `DIAG - Designing Intelligence Augmentation Group`,
    siteHeadline: `DIAG - Designing Intelligence Augmentation Group`,
    //siteUrl: `https://diag.kr`,
    siteDescription: `In Designing Intelligence Augmentation Group (DIAG), we do research on the intersection of Human-Computer Interaction and Artificial Intelligence`,
    siteLanguage: `en`,
    author: `@engineerlilac`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat:400,700"],
        display: "swap",
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
