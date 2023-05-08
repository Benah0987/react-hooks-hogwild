import React from 'react'

//the sorting handler
//the handleChange ia passed down from Nav component
function Filter({handleChange}){
    return (
        <select onChange = {handleChange}>
            <option value = "all">Sort Pigs</option>
            <option value = "name">Name</option>
            <option value = "weight">Weight</option>
            

        </select>
     
    )

}
export default Filter