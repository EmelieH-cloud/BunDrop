import React from 'react'
import { FaHeart } from "react-icons/fa";

function DessertCard( {dessert}) 
{
     const handleAddToCart = () => 
   {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...cartItems, dessert];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    
     const handleAddToFavorites = () => 
   {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        const updatedFavoriteItems = [...favoriteItems, dessert];
        localStorage.setItem('favoriteItems', JSON.stringify(updatedFavoriteItems));
    };

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
        <button className='btn btn-light' onClick={handleAddToFavorites}>
                    <FaHeart />
                </button>
                <button onClick={handleAddToCart} className='btn btn-light'>
                    Add to cart
                </button>
    </div>
 
    </> );
}

export default DessertCard;