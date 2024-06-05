import React from 'react'
import { FaHeart } from "react-icons/fa";

function SideCard( {side}) 
{
   const handleAddToCart = () => 
   {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...cartItems, side];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    
     const handleAddToFavorites = () => 
   {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        const updatedFavoriteItems = [...favoriteItems, side];
        localStorage.setItem('favoriteItems', JSON.stringify(updatedFavoriteItems));
    };

    return ( <>
    <div className='my-card-container'>
      {side.image ? // om bild finns... visa den
       (<img src={side.image} alt={side.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h3>{side.name}</h3>
        <p>{side.description}</p>
        <p>Price: {side.price} $</p>
        <div className='d-flex justify-content-center'>
  <button className='btn btn-light m-1' onClick={handleAddToFavorites}>
                    <FaHeart />
                </button>
                <button onClick={handleAddToCart} className='btn btn-light m-1'>
                    Add to cart
                </button>
                </div>
    </div>
 
    </> );
}

export default SideCard;