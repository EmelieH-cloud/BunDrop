import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';

function Payment()
 {
  const navigate = useNavigate();
  const [localStorageData, setLocalStorageData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [formData, setFormData] = useState({
    // Initiera en tom customer 
    fname: '',
    lname: '',
    email: '',
    city: '',
    pcode: '',
    account: '',
    cvc: '',
    phone: ''
  });

  useEffect(() => {
    // Hämta arrayen från localStorage
    const storedArray = localStorage.getItem('cartItems');
    
    // Om arrayen finns, parsa den och uppdatera state
    if (storedArray) {
      setLocalStorageData(JSON.parse(storedArray));
    }
  }, []); // Koden ovan körs endast en gång i samband med montering av komponenten. 

  function setCardAsPaymentMethod() { setPaymentMethod('card');}

  function setSwishAsPaymentMethod() {setPaymentMethod('swish');}

  function handleInputChange(event)
  {
    const { name, value } = event.target; 
    // destrukturera name och value från elementet som utlöst eventet. 
 
    setFormData({ ...formData, [name]: value });
     // Skapar en kopia av det befintliga formData-objektet (...formData) 
     // och ersätter value för fältet [name] med det nya som användaren matat in. 
  }

   async function handleSubmit(event) 
   {
    event.preventDefault();
    const orderData = { ...formData, items: localStorageData };
    // Skapar en kopia av formulärets data (formData) och lägger till attributet 'items' som är en lista med de beställda varorna. 
    try {
      const response = await fetch('http://localhost:3000/orders', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData) // skicka som en sträng till db.json 
      });
      
      if (response.ok) 
      {
        console.log('Order submitted successfully!');
        // Nollställ formulärdata:
          setFormData({
        fname: '',
        lname: '',
        email: '',
        city: '',
        pcode: '',
        account: '',
        cvc: '',
        phone: ''
      });

      navigate('/confirmation');

      } else 
      {
        console.error('Failed to submit order');
      }
    } catch (error) 
    {
      console.error('Error submitting order:', error);
    }
  }

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='col-lg-3 mt-5'>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>View Cart</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <h1>In your cart:</h1>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {localStorageData.map((item, index) => (
                      <tr key={`item_${index}`}>
                      <td>{item.name}</td>
                       <td>{item.price}</td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className='col-lg-3'>
            <div className='d-flex flex-column'>
              <h1 className='text-center mt-5'>Payment Details</h1>
              <label htmlFor="fname">Firstname: </label>
              <input onChange={handleInputChange} type="text" name="fname" id="fname"/>
              <label htmlFor="lname">Lastname: </label>
              <input onChange={handleInputChange} type="text" name="lname" id="lname"/>
               <label htmlFor="email">Email:</label>
               <input onChange={handleInputChange} type="text" name="city" id="city"/>
               <label htmlFor="city">City:</label>
               <input onChange={handleInputChange} type="text" name="pcode" id="pcode"/>
               <label htmlFor="pcode">Postal Code:</label>
               <input onChange={handleInputChange} type="email" name="email" id="email" />
              <div className='d-flex flex-column align-items-left mt-4'>
              <h4>Select payment method:</h4>
              <div>
              <input className='m-2' type="radio" name="card" checked={paymentMethod==='card'} onChange={setCardAsPaymentMethod} />
              <label htmlFor="card">Debit Card</label>
              <input className='m-2' type="radio" name="swish" checked={paymentMethod==='swish'} onChange={setSwishAsPaymentMethod}/>
              <label htmlFor="swish">Swish</label>
              </div>
              </div>
             {paymentMethod === 'card' && (
               <div className='d-flex flex-column mt-3'>
                <label htmlFor="account">Credit Card Number:</label>
             <input 
               type="text" 
               name="account" 
               id="account" 
               placeholder="xxxx xxxx xxxx xxxx"
               className='text-center payment-input mb-2'
               onChange={handleInputChange}
             />
             <label htmlFor="cvc" >CVC:</label>
             <input 
               type="text" 
               name="cvc" 
               id="cvc" 
               placeholder="xxx"
               className='payment-input text-center'
               onChange={handleInputChange}
             />
             <button>Send order</button>
            </div>
              )}
              {paymentMethod === 'swish' && (
               <div className='d-flex flex-column mt-3'>
                <label htmlFor="phone">Phone Number: </label>
             <input 
               type="text" 
               name="phone" 
               id="phone" 
               placeholder="xxxx xxxx xxxx xxxx"
               className='text-center payment-input mb-2'
               onChange={handleInputChange}
             />
               <button type='submit' onClick={handleSubmit}>Send order</button>
            </div>
              )}
            </div>
          </div>
      </div>
    </>
  );
}

export default Payment;
