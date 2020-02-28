import React from "react"
import Navbar from "../components/Navbar"
import { Button } from "../components/button"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Button>Styled Button</Button>
      <main>{children}</main>
    </>
  )
}

export default layout
