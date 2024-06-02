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
        return savedCartItems ?  // Resultatet kan antingen vara en enda lång json-sträng eller null.
        JSON.parse(savedCartItems) : // om resultet är en json-sträng så ska det omvandlas til en lista av objekt
        [];  // om resultatet var null så initialiseras en tom lista.

        // cartItems är nu antingen en objektlista eller en tom lista.  
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
        // Omvandla objekten till en json-sträng och uppdatera localstorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems]); // localStorage.setItem kommer köras varje gång något i cartItems ändras. 

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

     function removeFromCart(item)
     {
    setCartItems(prevCartItems => {
        // Hitta index för produkten som ska tas bort, kommer returnera första indexet som matchar
        const index = prevCartItems.findIndex(cartItem => cartItem.id === item.id);
        // Kontrollera om något hittades
        if (index > -1) 
        {
            return [
                ...prevCartItems.slice(0, index), // Skapar en kopia av ursprungsarrayen framtill produkten som ska tas bort. 
                ...prevCartItems.slice(index + 1) // Skapar en kopia av ursrungsarrayen efter produkten som ska tas bort
                                                  // båda arrayerna sätts ihop till en enda med hjälp av spridningsoperatorn
            ];
        }
        // Om ingen instans hittades, returnera den ursprungliga arrayen 
        return prevCartItems;
    });
}

    function clearCart()
    {
        if (showOrderView) // om ordervyn är öppen så ska den stängas. 
        {
            setShowOrderView(false);
        }
        localStorage.removeItem('cartItems'); // rensa localstorage för cartItems 
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
    <OrderView addToCart={addToCart} removeFromCart={removeFromCart}/>
    </div>
    </> );
}

export default CartContent;