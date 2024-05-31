import React from 'react';
import { useState, useEffect} from 'react';
import OrderView from './OrderView';
import { useNavigate } from 'react-router-dom';


function CartContent() 
{
    const [showCart, setShowCart] = useState(false);
    const [showOrderView, setShowOrderView] = useState(false);
    const [showCartDetails, setShowCartDetails] = useState(false);
    const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);
    const navigate = useNavigate();

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

    }, [cartItems]); // beroendelista: koden i useEffect kommer köras varje gång cartItems ändras. 

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
        if (showOrderView) // om ordervyn är öppen så ska den stängas. 
        {
            setShowOrderView(false);
        }
        localStorage.clear(); // rensa localstorage 
        setCartItems([]); // rensa listan 
    }

    function handleShowCartDetails()
    {
       setShowCartDetails(true); // visa detaljerna om vad som är lagt i varukorgen 
    }

    function handleHideCartDetails()
    {
       setShowCartDetails(false); // visa detaljerna om vad som är lagt i varukorgen 
    }

    function navigateToPaymentPage()
   {
      navigate('/payment');
   }

    return ( <>

  {/* När varukorgen är tom ---------------------------------------*/}
    <div className={showEmptyCartMessage? 'show-empty-cart' : 'hide-empty-cart-message'}>
    <div className='d-flex w-100 justify-content-between' >
    <h3>Your cart is empty <br></br></h3>
    <div>
    <button onClick={openOrderView} className='btn btn-primary'> Start my order </button>
    </div>
    </div>
    </div>


 {/* När varukorgen inte är tom-------------------------------- */}
    <div className={showCart ? 'show-cart' : 'hide-cart'}>
    {/* Visa namnet på produkterna i varukorgen om man inte är inne på ordervyn*/}
         {!showOrderView && (
        <div className='d-flex flex-column'>
        {cartItems.map((cartItem) => (
        <h5 key={cartItem.id}> {cartItem.name} </h5>
        ))}
       </div>
         )}

          {/* Visa antalet produkter + detaljer i ordervyn*/}
           {showOrderView && (
        <div className='d-flex flex-column'>
           <button onClick={navigateToPaymentPage}>Checkout</button>
            <h5>{cartItems.length} product(s) added</h5>
            <button onClick={handleShowCartDetails} className='btn btn-primary mb-2'>Show all added products</button>
            {showCartDetails &&
             (
           <div className='d-flex flex-column'>
            {cartItems.map((cartItem) => (
            <h5 key={cartItem.id}> {cartItem.name} </h5>
             ))}
         <button onClick={handleHideCartDetails} className='btn btn-danger minimize-button'>Hide</button>
        
       </div>
       
         )}

       </div>
         )}
          <div className='align-self-end'>
         {/* Clear cart visas endast om det finns något i varukorgen*/}
         {!showEmptyCartMessage && (
            <button className='btn btn-danger m-1' onClick={clearCart} >Clear cart</button>
        )}
         {/* Keep shopping visas endast om man inte är inne på ordervyn och varukorgen innehåller något. */}
        {!showOrderView && !showEmptyCartMessage && (
          <button className='btn btn-success m-1' onClick={openOrderView} >Keep shopping</button>
        )}
          </div>
    </div>
{/*----------------------------------------------------------------------- */}

     {/* När man vill vidare till ordervyn */}
    <div className={showOrderView? 'show-order-view' : 'hide-order-view'}>
    <OrderView addToCart={addToCart}/>
    </div>
{/*----------------------------------------------------------------------- */}
   
    </> );
}

export default CartContent;