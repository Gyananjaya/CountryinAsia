import React from 'react'
import"./Referesh.css"

function Referesh() {

   return(
    <button className="btn" onClick={() => window.location.reload(false)}>Click to reload!</button>
   )
}

export default Referesh
