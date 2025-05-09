/** @jsx jsx */
import { jsx } from "theme-ui"

type Props = {
  title: string
  description: string
  image: string
}

const LabProjects = ({ title, description, image }: Props) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <p style={{
      fontWeight: "bold",
      fontSize: "1.5rem"}}>
      <br/>
      📌 {title}
    </p>
    <div
      style={{
        flex: "1 1 300px",
        minWidth: "300px",
        fontSize: "1.2rem",
        marginRight: "1rem"
      }}
    >
      {description}
    </div><br/><br/>

    <img
      src={image}
      style={{
        flex: "1 1 300px",
        maxWidth: "480px",
        width: "100%",
        marginTop: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  </div>
)

export default LabProjects
