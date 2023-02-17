import React from 'react'


const Item = ({ prod })=> {


  return (

    <div>
       <h2>
        {prod.name} 
        <img src={prod.img} alt={prod.name} />
       
       </h2>
       
       
    </div>
  )
}

export default Item