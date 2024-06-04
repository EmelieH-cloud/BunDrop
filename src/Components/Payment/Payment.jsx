import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import BankAccount from './BankAccount';


function Payment()
 {
  const navigate = useNavigate();
  const [localStorageData, setLocalStorageData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [formData, setFormData] = useState({
    // Initierar en tom customer:
    fname: '',
    lname: '',
    email: '',
    city: '',
    pcode: '',
    account: '',
    cvc: '',
    phone: ''
  });

  // Beräkna det totala priset för varukorgen
  const totalAmount = localStorageData.reduce((total, item) => total + item.price, 0);
  const roundedTotalAmount = totalAmount.toFixed(2);

  useEffect(() => 
  {
    // Hämta varukorgen från localStorage
    const storedArray = localStorage.getItem('cartItems');
    
    // Om arrayen finns, parsa den till objekt och uppdatera state
    if (storedArray) {
      setLocalStorageData(JSON.parse(storedArray));
    }
  }, []); // Koden ovan körs endast en gång i samband med montering.

  function setCardAsPaymentMethod() { setPaymentMethod('card');}
  function setSwishAsPaymentMethod() {setPaymentMethod('swish');}

  function handleInputChange(event)
  {
    const { name, value } = event.target; 
    // destrukturera name och value från elementet som utlöst eventet. 
 
    setFormData({ ...formData, [name]: value });
     // Skapar en kopia av det befintliga formData-objektet (...formData) 
     // och ersätter value [name] med det nya som användaren matat in. 
  }

   function getRandomHourWithinThreeHours()
    {
    const now = new Date();
    const randomHour = Math.floor(Math.random() * 3);
    const orderTime = new Date(now.getTime());
    orderTime.setHours(now.getHours() + randomHour);
    return orderTime;
  }

   async function handleSubmit(event) 
   {
      event.preventDefault();
    const now = new Date();
    const orderTime = getRandomHourWithinThreeHours();
    const deliveryTime = new Date(orderTime.getTime());
    deliveryTime.setHours(orderTime.getHours() + 3);

    const orderData = {
        ...formData,
        items: localStorageData,
        orderDate: now.toLocaleDateString(),
        orderTime: orderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        deliveryDate: deliveryTime.toLocaleDateString(),
        deliveryTime: deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

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
       const newOrder = await response.json();
      const orderId = newOrder.id;
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
      /* Skicka med orderns id som url-parameter*/
      navigate(`/confirmation/${orderId}`);
      }
       else 
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
          <p className='fs-3'>Total: {roundedTotalAmount} $</p>
          <div className='col-lg-3'>
            <div className='d-flex flex-column'>
              <h1 className='text-center mt-5'>Payment Details</h1>
          
              <label htmlFor="fname">Firstname: </label>
              <input onChange={handleInputChange} type="text" name="fname" id="fname"/>

              <label htmlFor="lname">Lastname: </label>
              <input onChange={handleInputChange} type="text" name="lname" id="lname"/>

               <label htmlFor="email">Email:</label>
                <input onChange={handleInputChange} type="email" name="email" id="email" />

                <label htmlFor="city">City:</label>
               <input onChange={handleInputChange} type="text" name="city" id="city"/>
               
               <label htmlFor="pcode">Postal Code:</label>
               <input onChange={handleInputChange} type="text" name="pcode" id="pcode"/>
              
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
                <p>We accept Visa, Mastercard and American Express. 
                <ul>
                  <li> Visa - starts with 4, is 13 or 16 digits long, example: 4012000033330026. </li>
                  <li> Mastercard - starts with 5, second number is a number between 1 and 5, length is 16 digits, example: 5425233430109903.</li>
                  <li>American Express - Starts with 34 or 37 and is 15 digits long, example: 345678901234564.</li>
                </ul>
              </p>
              <p>Credit card number:</p>
             <BankAccount/>
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
