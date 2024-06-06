import React from 'react'
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { FaCircleMinus } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

function SideCard( {side}) 
{
     const [countInCart, setCountInCart] = useState(0);

    useEffect(() => {
        updateCountInCart();
    }, []);

    const updateCountInCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const count = cartItems.filter(item => item.name === side.name).length;
        setCountInCart(count);
    };
    
   const handleAddToCart = () => 
   {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...cartItems, side];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
         updateCountInCart();
    };
    
     const handleAddToFavorites = () => 
   {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        const updatedFavoriteItems = [...favoriteItems, side];
        localStorage.setItem('favoriteItems', JSON.stringify(updatedFavoriteItems));
    };

    function handleRemoveFromCart()
    {
         const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = cartItems.findIndex(item => item.name === side.name);

        if (index !== -1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
             updateCountInCart();
        }
    }

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
        <p >Price: {side.price} $</p>
          <p className='text-white fw-bold'>In Cart: {countInCart}</p>
        <div className='d-flex justify-content-center'>
  <button className='btn btn-light m-1' onClick={handleAddToFavorites}>
                    <FaHeart size="25px"/>
                </button>
                <button onClick={handleAddToCart} className='btn btn-light m-1'>
                   <IoIosAddCircle size="30px"/>
                </button>
                   <button onClick={handleRemoveFromCart} className='btn btn-light m-1'>
                    <FaCircleMinus size="26px"/>
                </button>
                </div>
    </div>
 
    </> );
}

export default SideCard;