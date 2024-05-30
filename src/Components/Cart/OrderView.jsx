import React from 'react'
import { BurgerContext } from '../../Context/BurgerContext';
import { DrinksContext } from '../../Context/DrinksContext';
import { SideContext } from '../../Context/SideContext';
import {DessertsContext} from '../../Context/DessertsContext';
import { useContext} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function OrderView({ addToCart }) 
{
  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, drinkLoading, drinkError } = useContext(DrinksContext);
  const { desserts, loadingDesserts, errorDesserts} = useContext(DessertsContext);
  const { sides, loadingSides, errorSides} = useContext(SideContext);
     
  function renderTableRows(items, category) 
    {
    return items.map((item, index) => (
      <tr key={`${category}-${index}`}>    {/* Skapar en rad */}
        <td>{category}</td>  {/* Skapar en cell med data på raden */}
        <td>{item.name}</td>
        <td>{item.price} $</td>
        <td> <Button 
        variant='success' 
        id={`${category}-${item.id}`} 
        onClick={() => addToCart(item)}>+</Button> 
        </td> 
        {/* Varje knapp har ett unikt id som är döpt till {kategorinsNamn-produktensId} */}
      </tr>
    ));
  }
  
    return ( <>
      <Table striped bordered hover>
            <thead>
              <tr>
                <th>Category</th>
                <th>Product Name</th>
                <th>Price</th>
                 <th>Add</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows(burgers, 'Burger')}
              {renderTableRows(drinks, 'Drink')}
              {renderTableRows(desserts, 'Dessert')}
              {renderTableRows(sides, 'Side')}
            </tbody>
          </Table>
    </> );
}

export default OrderView;