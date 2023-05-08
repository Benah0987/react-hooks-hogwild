import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import HogFact from './HogFact'


export default function HogTile({hog}) {
    
    const [showFacts, setshowFacts] = useState(false)

    const handleClick = () =>{
        setshowFacts(!showFacts)
    }
  return (
    <div>
        <h2>{hog.name}</h2>
        <button onClick ={handleClick}> view </button>
        {
        showFacts ? <HogFact hog = {hog} /> : <img src = {hog.image} alt = {hog.name}/> 
        }

    </div>
  )
}
