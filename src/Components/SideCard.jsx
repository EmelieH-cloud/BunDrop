import React from 'react'
import { FaHeart } from "react-icons/fa";

function SideCard( {side, addToFavorites}) 
{
    return ( <>
    <div className='my-card-container'>
      {side.image ? // om bild finns... visa den
       (<img src={side.image} alt={side.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h2>{side.name}</h2>
        <p>{side.description}</p>
        <p>Price: {side.price} $</p>
        <a onClick={() => addToFavorites(side)} className='btn btn-light'><FaHeart/></a>
    </div>
 
    </> );
}

export default SideCard;