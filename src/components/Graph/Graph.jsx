import React from "react"

import graph from "../../images/graph.png"

const Graph = () => {
  return (
    <div className="relative graph rounded-md overflow-hidden backdrop-filter backdrop-blur">
      <img src={graph} alt="Graph" className="w-30vw md:w-30vw xl:w-15vw" />
    </div>
  )
}

export default Graph
