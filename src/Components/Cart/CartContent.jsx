import React from 'react';
import { useState, useEffect} from 'react';
import OrderView from './OrderView';


function CartContent() 
{
    const [showCart, setShowCart] = useState(false);
    const [showOrderView, setShowOrderView] = useState(false);
    const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);
    const [cartItems, setCartItems] = useState([]);


      useEffect(() => {
        if (cartItems.length === 0) 
        {
            setShowEmptyCartMessage(true); // visa meddelandet om att varukorgen är tom och rendera order-vyn 
        
        } else if (cartItems.length>0)
        {
            setShowEmptyCartMessage(false);
            setShowCart(true); // visa varukorgen 
        }
    }, [cartItems]); // Uppdatera bara när komponenten renderas eller innehållet i cartItems ändras

    function openOrderView()
    { 
        setShowCart(false);
        setShowEmptyCartMessage(false);
        setShowOrderView(true); 
    }

     function addToCart(item) 
     {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    }

    return ( <>
 {/* Renderas när varukorgen innehåller varor */}
    <div className={showCart ? 'show-cart' : 'hide-cart'}>
          {cartItems.map((cartItem) => (
            <p key={cartItem.id}>Item ID: {cartItem.id} </p>
          ))}
    </div>

     {/* Renderas när varukorgen är tom */}
    <div className={showEmptyCartMessage? 'show-empty-cart' : 'hide-empty-cart-message'}>
    <h3>Your cart is empty.</h3>
    <button onClick={openOrderView}>Start my order</button>
    </div>

     {/* Renderas när man klickat på "start my order" */}
    <div className={showOrderView? 'show-order-view' : 'hide-order-view'}>
    <OrderView addToCart={addToCart}/>
    </div>

   
    </> );
}

export default CartContent;