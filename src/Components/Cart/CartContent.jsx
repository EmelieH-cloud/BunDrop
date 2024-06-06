import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CartContent() {
    const navigate = useNavigate(); 

    // State-variabel för cartItems i localstorage 
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    // Hämta cartItems så fort någon ändring sker 
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Ta bort allt i localstorage 
    const clearCart = () => {
        setCartItems([]);
        window.location.reload();
    };

    function GoToCheckout() {
        navigate('/payment');
    }

    // Funktion för att beräkna totalpriset
    const calculateTotalPrice = () => {
        const total = cartItems.reduce((total, item) => total + item.price, 0);
        return total.toFixed(2);
    };

    // Funktion för att ta bort ett specifikt objekt från kundvagnen
    const removeItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    return (
        <>
            {cartItems.length > 0 && (
                <div className='d-flex flex-column'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cartItem, index) => (
                                <tr key={`${cartItem.id}-${index}`}>
                                    <td>{cartItem.name}</td>
                                    <td>{cartItem.price}</td>
                                    <td>
                                        <button className='btn btn-danger m-1 border' onClick={() => removeItem(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h5>Total Price: {calculateTotalPrice()}</h5>
                    <div>
                        <button className='btn btn-primary m-1 border' onClick={clearCart}>Clear cart</button>
                        <button className='btn btn-success m-1 border' onClick={GoToCheckout}>Checkout</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CartContent;
