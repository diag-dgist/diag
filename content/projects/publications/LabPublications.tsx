/** @jsx jsx */
import { jsx } from "theme-ui"

type Props = {
  title: string
  url: string
  authors: string // HTML-formatted string
  publisher?: string
  year?: string
}

const LabPublications = ({ title, url, authors, publisher, year }: Props) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: "1.5rem",
    }}
  >
    <ul style={{ margin: 0, padding: 0, width: "100%" }}>
      <li style={{ listStyle: "none" }}>
        <p style={{ marginBottom: "0.5rem" }}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#F687B3", fontWeight: "bold" }}
          >
            {title}
          </a>
        </p>

        <div
          style={{ fontSize: "1rem", marginTop: "-0.3rem" }}
          dangerouslySetInnerHTML={{ __html: authors }}
        />

        {publisher && (
          <div
            style={{
              marginTop: "0.3rem",
              marginBottom: "-0.5rem",
              fontStyle: "italic",
              color: "#888",
              fontSize: "0.95rem",
            }}
            dangerouslySetInnerHTML={{ __html: publisher }}
          />
        )}
      </li>
    </ul>
  </div>
)

export default LabPublications
