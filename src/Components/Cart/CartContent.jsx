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

    // Funktion för att gruppera varor baserat på namn och räkna deras kvantitet
    const groupItemsByName = (items) => {
        const groupedItems = items.reduce((acc, item) => {
            const existingItem = acc.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += item.price;
            } else {
                acc.push({ ...item, quantity: 1, totalPrice: item.price });
            }
            return acc;
        }, []);
        return groupedItems;
    };

    // Funktion för att ta bort en instans av en specifik vara från kundvagnen
    const removeItem = (name) => {
        const itemIndex = cartItems.findIndex(item => item.name === name);
        if (itemIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems.splice(itemIndex, 1);
            setCartItems(newCartItems);
        }
    };

    const groupedItems = groupItemsByName(cartItems);

    return (
        <>
            {groupedItems.length > 0 && (
                <div className='d-flex flex-column'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupedItems.map((item, index) => (
                                <tr key={`${item.id}-${index}`}>
                                    <td>{item.name}</td>
                                    <td>{item.totalPrice.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button className='btn btn-danger m-1 border' onClick={() => removeItem(item.name)}>Remove</button>
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
