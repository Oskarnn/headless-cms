import * as React from "react"
import Face from "../images/IMG_7311.png"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
      <img src={Face} alt="Ugly face" />
      <h1>404: INGET FUNNET!!!<Link to="/">GÅ TILLBAKA GENAST</Link> </h1>
     
    </>
  )
}

export const Head = () => <title>404</title>

export default NotFoundPage
