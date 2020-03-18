import React from "react"
import SingleTour from "./SingleTour"

const Tours = ({ tours }) => {
  console.log("tours :", tours)
  return (
    <div>
      Tours page
      <SingleTour />
    </div>
  )
}

export default Tours
