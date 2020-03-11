import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata: info }, // destructured siteMetadata from site and assigned a new var of info to use instead of typing siteMetadata
  } = useStaticQuery(getData)

  // const { author, title } = data.site.siteMetadata
  return (
    <div>
      <h1>{info.author}</h1>
      <h2>{info.title}</h2>
    </div>
  )
}

export default Header
