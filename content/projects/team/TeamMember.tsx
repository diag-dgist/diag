/** @jsx jsx */
import { jsx } from "theme-ui"

type Props = {
  name: string
  image: string
  homepage?: string
  position: string
}

const TeamMember = ({ name, image, homepage, position }: Props) => (
  <div sx={{ width: "23%", textAlign: "center", marginBottom: "2rem" }}>
    <div
      sx={{
        width: "200px",
        height: "280px",
        overflow: "hidden",
        borderRadius: "5%",
        margin: "0 auto",
      }}
    >
      <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    <p style={{ marginTop: "0.5rem", fontWeight: "bold", fontSize: "1.5rem" }}>
      {name}
      {homepage && (
        <a href={homepage} target="_blank">
          🏠
        </a>
      )}
    </p>
    <p style={{ marginTop: "-1.3rem", fontSize: "1.2rem" }}>{position}</p>
  </div>
)

export default TeamMember
