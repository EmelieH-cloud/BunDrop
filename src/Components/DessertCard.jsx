import React from 'react'
import { FaHeart } from "react-icons/fa";

function DessertCard( {dessert, addToFavorites, addToCart}) 
{
    return ( <>
    <div className='my-card-container'>
      {dessert.image ? // om bild finns... visa den
       (<img src={dessert.image} alt={dessert.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h2>{dessert.name}</h2>
        <p>{dessert.description}</p>
        <p>Price: {dessert.price} $</p>
          <a onClick={() => addToFavorites(dessert)} className='btn btn-light'><FaHeart/></a>
          <a onClick={() => addToCart(dessert)} >add to cart</a>
    </div>
 
    </> );
}

export default DessertCard;