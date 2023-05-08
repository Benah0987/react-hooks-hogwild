import React from 'react'

function HogFact({hog}) {
  return (
    <div>
        <span>{hog.speciality}</span>
        <span>{hog.weight}</span>
        <span>{hog.greased}</span>
        <span>{hog['highest']}</span>
        
    </div>
  )
}

export default HogFact