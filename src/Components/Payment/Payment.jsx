import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function Payment() {
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    // Hämta arrayen från localStorage
    const storedArray = localStorage.getItem('cartItems');
    
    // Om arrayen finns, parsa den och uppdatera state
    if (storedArray) {
      setLocalStorageData(JSON.parse(storedArray));
    }
  }, []); // Körs endast en gång vid montering av komponenten
  
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='col-lg-4 mt-5'>
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
                        {localStorageData.map(item => (
                          <tr key={item.id}>
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
        

          <div className='col-lg-4'>
            <div className='d-flex flex-column'>
              <h1 className='text-center mt-5'>Payment Details</h1>
              <label htmlFor="fname">Firstname: </label>
              <input type="text" name="fname" id="fname"/>
              <label htmlFor="lname">Lastname: </label>
              <input type="text" name="lname" id="lname"/>
              <label htmlFor="account">Credit Card Number: </label>
              <input type="text" name="account" id="account" placeholder='xxxx xxxx xxxx xxxx'/>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" placeholder="name@example.com"/>
            </div>
          </div>
      </div>
    </>
  );
}

export default Payment;
