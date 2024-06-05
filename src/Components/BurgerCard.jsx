import React from 'react'
import { FaHeart } from "react-icons/fa";

function BurgerCard( { burger, addToFavorites }) {
    return ( <>
    <div className='my-card-container'>
      {burger.image ? // om bild finns... visa den
       (<img src={burger.image} alt={burger.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h2>{burger.name}</h2>
        <p>{burger.description}</p>
        <p>Price: {burger.price} $</p>
         <a onClick={() => addToFavorites(burger)} className='btn btn-light'>
          <FaHeart />
         </a>
    </div>
 
    </> );
}

export default BurgerCard;