import { useState, useEffect } from 'react';
import CartImg from '../../assets/cart.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContent from './CartContent';
import cartlogo from '../../assets/cart.png';
import cashier from '../../assets/cashier.png';
import { useNavigate } from 'react-router-dom';


function CartLogo() {

   
 // State-variabel för cartItems i localstorage 
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    // Hämta cartItems så fort någon ändring sker 
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
     const navigate = useNavigate();

  function GoToCheckout()
  {
    if (cartItems.length>0)
    {
       navigate('/payment');
    }

    else 
    {
      alert('The cart is empty!');
    }
    
    
  }

  const titleColor = {
    color: '#17382e'
  };

  const smallCart = {
    width: '120px', 
    border: '1px solid black'
  };

  const cartStyle = {
    width: '82px',
    height: 'auto',
    color: 'black'
  };

  const checkoutStyle = 
  {

    width: '77px',
    height: 'auto',
  }

  return (
    <>
      <a onClick={handleShow} style={cartStyle} className='fs-5 top-menu'>
        <img src={cartlogo} alt="cart"/>
      </a>
      <a className='top-menu checkoutStyle'  style={checkoutStyle} onClick={GoToCheckout}>
      <img src={cashier} alt="cashier"/>
      </a>
      <Modal show={show} size='lg' onHide={handleClose} restoreFocus={true} restoreFocusOptions={{ preventScroll: true }}>
        <Modal.Header closeButton>
          <Modal.Title> <img src={CartImg} alt="img" style={smallCart} /></Modal.Title>
        </Modal.Header>
        <Modal.Body style={titleColor}> <CartContent/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartLogo;
