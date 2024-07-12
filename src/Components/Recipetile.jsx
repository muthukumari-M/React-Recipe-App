import React from 'react'
import './Recipetile.css'

function Recipetile({recipe}) {
  return (

    <div className='recipeTile'>
        
     
        <img className="recipeTile_Image"src={recipe["recipe"]["image"]} alt="tileImage" onClick={()=>window.open(recipe["recipe"]["url"])}/>

        <p className="recipeTile_Name">{recipe["recipe"]["label"]}</p>
    </div>
  )
}

export default Recipetile