import React from 'react'
import { FaHeart } from "react-icons/fa";

function DrinkCard( {drink}) {

 const handleAddToCart = () => 
   {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...cartItems, drink];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    
     const handleAddToFavorites = () => 
   {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        const updatedFavoriteItems = [...favoriteItems, drink];
        localStorage.setItem('favoriteItems', JSON.stringify(updatedFavoriteItems));
    };


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
       <button className='btn btn-light' onClick={handleAddToFavorites}>
                    <FaHeart />
                </button>
                <button onClick={handleAddToCart} className='btn btn-light'>
                    Add to cart
                </button>
    </div>
 
    </> );
}

export default DrinkCard;