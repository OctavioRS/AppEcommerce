import React from 'react'
import "./item.css"


const Item = ({ prod })=> {


  return (

    <div className='card'>
       <h2> {prod.name}  </h2>
        <img src={prod.img} alt={prod.name} />
      
    </div>
  )
}

export default Item