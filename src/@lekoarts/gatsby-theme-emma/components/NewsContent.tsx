import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXContent } from "@mdx-js/react"

const NewsContent = () => {

  // This will NOT render MDX directly, but at least avoids crashes
  /************** Please add news here **************/
  return (
  <section
    style={{
      maxWidth: "700px",
      margin: "4rem auto",
      padding: "0 1rem",
      fontSize: "1.2rem",
      lineHeight: "1.6",
      textAlign: "left",
    }}
  >
    <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1.5rem" }}>📰 Lab News</h2>
    <ul style={{ paddingLeft: "1.2rem", listStyleType: "disc" }}>
      <li><strong>May 2025:</strong> 🎉 We launched our new homepage!</li>
      <li><strong>April 2025:</strong> ✅ Paper accepted to CHI 2026.</li>
      <li><strong>March 2025:</strong> 🤝 Started new collaboration on a UX project.</li>
    </ul>
  </section>
)

}

export default NewsContent
