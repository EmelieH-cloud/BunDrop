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

    function handleRemoveFromCart()
    {
         const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = cartItems.findIndex(item => item.name === drink.name);

        if (index !== -1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }

    return ( <>
    <div className='my-card-container'>
      {drink.image ? // om bild finns... visa den
       (<img src={drink.image} alt={drink.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h3>{drink.name}</h3>
        <p>{drink.description}</p>
        <p>Price: {drink.price} $</p>
        <div className='d-flex justify-content-center'>
       <button className='btn btn-light m-1' onClick={handleAddToFavorites}>
                    <FaHeart />
                </button>
                <button onClick={handleAddToCart} className='btn btn-light m-1'>
                    Add to cart
                </button>
                   <button onClick={handleRemoveFromCart} className='btn btn-light m-1'>
                    Remove from cart
                </button>
                </div>
    </div>
 
    </> );
}

export default DrinkCard;