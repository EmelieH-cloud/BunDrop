import React from 'react'
import CartImg from '../../assets/cart.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,  } from 'react';
import CartContent from './CartContent';

function CartLogo()
 {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const titleColor= 
    {
     color: '#17382e'
    };

    const cartStyle =
   {
    position: 'fixed',
    bottom: '2%',
    right: '1%',
    width: '140px', 
    borderRadius: '50%',
    height: 'auto'
    
  };

   const smallCart =
   {

    width: '120px', 
    
  };
    
    return ( <>
 <Button variant="primary" onClick={handleShow}>
            <img src={CartImg} alt="cart-image" style={cartStyle}/>
      </Button>
      <Modal fullscreen={true} show={show} onHide={handleClose} restoreFocus={true} restoreFocusOptions={{ preventScroll: true }}>
        <Modal.Header closeButton>
          <Modal.Title> <img src={CartImg} alt="img" style={smallCart}/></Modal.Title>
        </Modal.Header>
        <Modal.Body style={titleColor}> <CartContent/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </> );
}

export default CartLogo;