import React, { useContext, useState } from 'react';
import CartImg from '../../assets/cart.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContent from './CartContent';

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
    right: '1%',
    opacity: hover ? 1 : 0.6,
    borderRadius: '50%',
    height: 'auto',
    transition: 'opacity 0.3s',
    color: 'black'
  };

  return (
    <>
      <a onClick={handleShow} style={cartStyle} className='fs-3'>
        My Cart
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
