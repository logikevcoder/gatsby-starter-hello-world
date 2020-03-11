import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  query {
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

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        )
      }}
    >
      Static Query
    </StaticQuery>
  )
}

export default HeaderStatic
