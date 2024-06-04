import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import BankAccount from './BankAccount';

function Payment() {
  const navigate = useNavigate();
  const [localStorageData, setLocalStorageData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cvcMessage, setCvcMessage] = useState('');
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    city: '',
    pcode: '',
    account: '',
    cvc: '',
    phone: ''
  });

  const totalAmount = localStorageData.reduce((total, item) => total + item.price, 0);
  const roundedTotalAmount = totalAmount.toFixed(2);

  useEffect(() => {
    const storedArray = localStorage.getItem('cartItems');
    if (storedArray) {
      setLocalStorageData(JSON.parse(storedArray));
    }
  }, []);

  const [isCardValid, setCardValid] = useState(false);

  function handleValidationChange(isValid) 
  {
    setCardValid(isValid); 
  }

  const handleInputChange = (event) => 
  {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name==='cvc' && value.length<3)
    {
       setCvcMessage('CVC-code must be a 3-digit number.');
    }

    else if (name==='cvc' && value.length===3)
    {
      setCvcMessage('Valid CVC-code');
    }


  };

  const getRandomHourWithinThreeHours = () => {
    const now = new Date();
    const randomHour = Math.floor(Math.random() * 3);
    const orderTime = new Date(now.getTime());
    orderTime.setHours(now.getHours() + randomHour);
    return orderTime;
  };

 const handleSubmit = async (event) => {
  event.preventDefault(); // Förhindrar standardbeteendet för formuläret att skicka data till en ny sida

  if (!isCardValid)
  {
    alert('Credit card number is not valid.');
    return;
  }

  if (formData.cvc.length !== 3 || isNaN(parseInt(formData.cvc))) 
  {
    alert('CVC must be a three-digit number.');
    return;
  }


  const now = new Date(); // Skapar ett nytt Date-objekt för aktuell tidpunkt
  const orderTime = getRandomHourWithinThreeHours(); // Hämtar en slumpmässig tidpunkt inom de närmaste tre timmarna
  const deliveryTime = new Date(orderTime.getTime()); // Skapar ett nytt Date-objekt för leveranstidpunkten baserat på orderTime
  deliveryTime.setHours(orderTime.getHours() + 3); // Lägger till tre timmar till leveranstiden

  // Skapar orderdata-objektet med uppgifter från formuläret och lokala lagringsdata
  const orderData = {
    ...formData, // Använder spridningsoperatorn (...) för att kopiera värdena från formData-objektet
    items: localStorageData, // Lägger till de lagrade objekten i localStorageData-arrayen
    orderDate: now.toLocaleDateString(), // Konverterar aktuell datumtid till en sträng med datum
    orderTime: orderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Konverterar orderTime till en sträng med timmar och minuter
    deliveryDate: deliveryTime.toLocaleDateString(), // Konverterar leveranstiden till en sträng med datum
    deliveryTime: deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Konverterar leveranstiden till en sträng med timmar och minuter
  };

  try {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST', // Använder HTTP POST-metoden för att skicka data till servern
      headers: {
        'Content-Type': 'application/json' // Specificerar innehållet i det skickade datat som JSON
      },
      body: JSON.stringify(orderData) // Konverterar orderData till JSON-format och skickar det som kroppen på förfrågan
    });

    if (response.ok) {
      const newOrder = await response.json(); // Extraherar JSON-data från svarsförfrågan
      const orderId = newOrder.id; // Hämtar ID för den nya ordern från svarsförfrågan
      console.log('Order submitted successfully!'); // Skriver ut meddelande om att beställningen skickades framgångsrikt
      setFormData({ // Återställer formulärfälten till sina ursprungliga värden efter att beställningen har skickats
        fname: '',
        lname: '',
        email: '',
        city: '',
        pcode: '',
        account: '',
        cvc: '',
        phone: ''
      });
      navigate(`/confirmation/${orderId}`); // Navigerar till bekräftelsesidan för den nya ordern med hjälp av orderId
    } else {
      console.error('Failed to submit order'); // Skriv ut felmeddelande om det misslyckades att skicka beställningen
    }
  } catch (error) {
    console.error('Error submitting order:', error); // Skriv ut felmeddelande om det uppstår ett fel vid skickande av beställningen
  }
};


  return (
    <>
     <div className='container'>
      <div className='row'>
          <form onSubmit={handleSubmit}>
                 <div className='col-lg-4 mt-4 center-margin'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>View Cart</Accordion.Header>
            <Accordion.Body>
              <div>
                <h4>In your cart:</h4>
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
      <p>Total: {roundedTotalAmount} $</p>
      </div>
              <div className='d-flex justify-content-center '>
                 <div className='col-lg-3 mt-4 m-3'>
                 <h3>1. Payment Details</h3>
              <div>
                <label htmlFor="fname">Firstname: </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="fname"
                  id="fname"
                  value={formData.fname}
                  className='form-control '
                />
              </div>
              <div>
                <label htmlFor="lname">Lastname: </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="lname"
                  id="lname"
                  value={formData.lname}
                  className='form-control'
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  className='form-control'
                />
              </div>
              <div>
                <label htmlFor="pcode">Postal Code:</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="pcode"
                  id="pcode"
                  value={formData.pcode}
                  className='form-control'
                />
              </div>
               <div>
                <label htmlFor="city">City:</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  className='form-control'
                />
                </div>
              </div>
               <div className='col-lg-3 m-4 '>
              <h3>2. Select payment method:</h3>
              <div>
                <input
                  className='m-2'
                  type="radio"
                  name="paymentMethod"
                  id="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <label htmlFor="card">Debit Card</label>
                <input
                  className='m-2'
                  type="radio"
                  name="paymentMethod"
                  id="swish"
                  checked={paymentMethod === 'swish'}
                  onChange={() => setPaymentMethod('swish')}
                />
                <label htmlFor="swish">Swish</label>
              </div>
           
            {paymentMethod === 'card' && (
              <div className='text-center'>
                <p>We accept Visa, Mastercard and American Express. 
                  Visa - starts with 4, is 13 or 16 digits long, example: 4012000033330026.
                  Mastercard - starts with 5, second number is a number between 1 and 5, length is 16 digits, example: 5425233430109903
                  American Express - Starts with 34 or 37 and is 15 digits long, example: 345678901234564.
                </p>
                 <div>
                <h4>Credit card number:</h4>
                <BankAccount onValidationChange={handleValidationChange}/>
                <label htmlFor="cvc">CVC:</label>
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder="xxx"
                  className='form-control text-center'
                  onChange={handleInputChange}
                  value={formData.cvc}
                />
                <p>{cvcMessage}</p>
            </div>
                <button type="submit" className="btn btn-primary">Send order</button>
              </div>
              
            )}
          
            {paymentMethod === 'swish' && (
              <div className='mt-3'>
                <label htmlFor="phone">Phone Number: </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="xxxx xxxx xxxx xxxx"
                  className='form-control text-center mb-3'
                  onChange={handleInputChange}
                  value={formData.phone}
                />
             
                <button type="submit" className="btn btn-primary">Send order</button>
            
              </div>
              
              
            )}
              </div>
              </div>

             
          </form>
     </div>
</div>
 
    </>
  );
}

export default Payment;
