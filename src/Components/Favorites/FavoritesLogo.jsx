import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,  } from 'react';
import HeartLogo from '../../assets/heart-logo.png'


function FavoritesLogo() 
{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hover, setHover] = useState(false);

   const titleColor= 
    {
     color: '#17382e'
    };

    const heartStyle =
   {
    position: 'fixed',
    bottom: '21%',
    right: '1%',
    width: '120px', 
    borderRadius: '50%',
    height: 'auto',
    opacity: hover ? 1 : 0.5,
    transition: 'opacity 0.3s'
  };

   const smallHeart =
   {
    width: '120px', 
    border: '1px solid black'
  };
    
    return ( <>
 <Button variant="primary" onClick={handleShow}>
            <img src={HeartLogo} 
            alt="heart-image" 
            style={heartStyle} 
            onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)}
            className='heart-img'/>
      </Button>
      <Modal show={show} size='lg'  onHide={handleClose} restoreFocus={true} restoreFocusOptions={{ preventScroll: true }}>
        <Modal.Header closeButton>
          <Modal.Title> <img src={HeartLogo} alt="img" style={smallHeart}/></Modal.Title>
        </Modal.Header>
        <Modal.Body style={titleColor}> favs </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </> );
}

export default FavoritesLogo;