import React from 'react';
import { useState, useEffect} from 'react';
import OrderView from './OrderView';


function CartContent() 
{
    const [showCart, setShowCart] = useState(false);
    const [showOrderView, setShowOrderView] = useState(false);
    const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

    // Spara cartItems lokalt på datorn med hjälp av localStorage 
     const [cartItems, setCartItems] = useState(function()
     {
        // Försök hämta data i localstorage som är sparad under nyckeln 'cartItems': 
        const savedCartItems = localStorage.getItem('cartItems'); 
        return savedCartItems ?  // Resultatet kan antingen vara en sträng eller null.
       
        JSON.parse(savedCartItems) : // om resultet är en json-sträng så ska det omvandlas til en lista av objekt
        [];  // om resultatet var null så initialiseras en tom lista.

        // cartItems är nu antingen en lista av objekt eller en tom lista.  
    });

      useEffect(() => {
        if (cartItems.length === 0) 
        {
            setShowEmptyCartMessage(true); // meddela att varukorgen är tom och rendera Ordervyn
        
        } else if (cartItems.length > 0)
        {
            setShowEmptyCartMessage(false);
            setShowCart(true); // visa varukorgen 
        }
        // Uppdatera localstorage vare sig varukorgen är tom eller ej. 
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems]); // beroendelista: ovan kod kommer köras varje gång cartItems ändras. 

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

    function clearCart()
    {
        localStorage.clear(); // rensa localstorage 
        setCartItems([]); // rensa listan 
    }

    return ( <>
 {/* Renderas när varukorgen innehåller varor */}
    <div className={showCart ? 'show-cart' : 'hide-cart'}>
          {cartItems.map((cartItem) => (
            <p key={cartItem.id}>Item ID: {cartItem.id} </p>
          ))}
          <button onClick={clearCart} disabled={showEmptyCartMessage}>Clear cart</button>
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