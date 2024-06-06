import React, { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";

function BurgerCard({ burger }) {
    const [countInCart, setCountInCart] = useState(0);

    useEffect(() => {
        updateCountInCart();
    }, []);

    const updateCountInCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const count = cartItems.filter(item => item.name === burger.name).length;
        setCountInCart(count);
    };

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...cartItems, burger];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        updateCountInCart();
    };

    const handleAddToFavorites = () => {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        const updatedFavoriteItems = [...favoriteItems, burger];
        localStorage.setItem('favoriteItems', JSON.stringify(updatedFavoriteItems));
    };

    const handleRemoveFromCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = cartItems.findIndex(item => item.name === burger.name);

        if (index !== -1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCountInCart();
        }
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
                <h3>{burger.name}</h3>
                <p>{burger.description}</p>
                <p>Price: {burger.price} $</p>
                <p>In Cart: {countInCart}</p>
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
        </>
    );
}

export default BurgerCard;
