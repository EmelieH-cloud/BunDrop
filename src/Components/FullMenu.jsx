
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';
import { SideContext } from '../Context/SideContext';
import {DessertsContext} from '../Context/DessertsContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useState} from 'react';
import Table from 'react-bootstrap/Table';
import FullMenuLogo from '../assets/fullmenu-logo.png';

function FullMenu()
 {
  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, drinkLoading, drinkError } = useContext(DrinksContext);
  const { desserts, loadingDesserts, errorDesserts} = useContext(DessertsContext);
  const { sides, loadingSides, errorSides} = useContext(SideContext);
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const tableHeaderColor= 
    {
     color: '#17382e'
    };

    function renderTableRows(items, category) 
    {
    return items.map((item, index) => (
      <tr key={`${category}-${index}`}>
        <td>{category}</td>
        <td>{item.name}</td>
        <td>{item.price} $</td>
      </tr>
    ));
  }
  
  return ( <>
   <a  onClick={handleShow}>
        <img src={FullMenuLogo} alt='fullmenu-logo' className='menu-img'/>
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={tableHeaderColor}>Full Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
               <Table striped bordered hover>
            <thead>
              <tr>
                <th>Category</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows(burgers, 'Burger')}
              {renderTableRows(drinks, 'Drink')}
              {renderTableRows(desserts, 'Dessert')}
              {renderTableRows(sides, 'Side')}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </> );
}

export default FullMenu;