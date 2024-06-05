import React, { useState } from 'react';
import CartImg from '../../assets/cart.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContent from './CartContent';
import cartlogo from '../../assets/cart.png';

function CartLogo() {

  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleColor = {
    color: '#17382e'
  };

  const smallCart = {
    width: '120px', 
    border: '1px solid black'
  };

  const cartStyle = {
    position: 'fixed',
    top: '2%',
    width: '82px',
    right: '8%',
    height: 'auto',
    color: 'black'
  };

  return (
    <>
      <a onClick={handleShow} style={cartStyle} className='fs-5 top-menu'>
        <img src={cartlogo} alt="cart"/>
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
