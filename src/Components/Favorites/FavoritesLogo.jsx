import React, { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import HeartLogo from '../../assets/heart-logo.png';
import FavoritesContent from './FavoritesContent';

function FavoritesLogo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const titleColor = { color: '#17382e' };
  const heartStyle = {
    position: 'fixed',
    top: '2%',
    width: "80px",
    right: '2%',
    height: 'auto',
    color: 'black'
  };

  const smallHeart = {
    width: '100px', 
    border: '1px solid black'
  };

  return (
    <>
      <a onClick={handleShow} style={heartStyle} className='fs-5 top-menu'>
        <img src={HeartLogo} alt="heart" />
        </a>
      <Modal show={show} size='lg' onHide={handleClose} restoreFocus={true} restoreFocusOptions={{ preventScroll: true }}>
        <Modal.Header closeButton>
          <Modal.Title><img src={HeartLogo} alt="img" style={smallHeart} /></Modal.Title>
        </Modal.Header>
        <Modal.Body style={titleColor}>  <FavoritesContent/> </Modal.Body>
         <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FavoritesLogo;
