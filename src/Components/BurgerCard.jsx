import React from 'react';
import { FaHeart } from "react-icons/fa";

function BurgerCard({ burger}) 
{
  
   const handleAddToCart = () => 
   {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...cartItems, burger];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    
     const handleAddToFavorites = () => 
   {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        const updatedFavoriteItems = [...favoriteItems, burger];
        localStorage.setItem('favoriteItems', JSON.stringify(updatedFavoriteItems));
    };


    return (
        <>
            <div className='my-card-container'>
                {burger.image ? 
                    (<img src={burger.image} alt={burger.name} className="card-image" />) :
                    (<div className="no-image">Image not available</div>)
                }
            </div>
            <div className="burger-details text-center">
                <h2>{burger.name}</h2>
                <p>{burger.description}</p>
                <p>Price: {burger.price} $</p>
                <button className='btn btn-light' onClick={handleAddToFavorites}>
                    <FaHeart />
                </button>
                <button onClick={handleAddToCart} className='btn btn-light'>
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default BurgerCard;
