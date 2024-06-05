import React from 'react'
import { FaHeart } from "react-icons/fa";

function DrinkCard( {drink, addToFavorites, addToCart}) {
    return ( <>
    <div className='my-card-container'>
      {drink.image ? // om bild finns... visa den
       (<img src={drink.image} alt={drink.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h2>{drink.name}</h2>
        <p>{drink.description}</p>
        <p>Price: {drink.price} $</p>
         <a onClick={() => addToFavorites(drink)} className='btn btn-light'><FaHeart/></a>
          <a onClick={() => addToCart(drink)} >add to cart</a>
    </div>
 
    </> );
}

export default DrinkCard;