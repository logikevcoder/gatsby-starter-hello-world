import React from "react"
import HeaderHook from "../examples/Header-hooks"
import HeaderStatic from "../examples/Header-static"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person

  return (
    <Layout>
      Examples Page
      <HeaderHook />
      <HeaderStatic />
      <p>name: {name}</p>
      <p>age: {age}</p>
    </Layout>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        person: data {
          name
          age
        }
      }
    }
  }
`

export default examples
