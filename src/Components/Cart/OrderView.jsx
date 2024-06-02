import React from 'react'
import { BurgerContext } from '../../Context/BurgerContext';
import { DrinksContext } from '../../Context/DrinksContext';
import { SideContext } from '../../Context/SideContext';
import {DessertsContext} from '../../Context/DessertsContext';
import { useContext} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function OrderView({ addToCart, removeFromCart }) 
{
  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, drinkLoading, drinkError } = useContext(DrinksContext);
  const { desserts, loadingDesserts, errorDesserts} = useContext(DessertsContext);
  const { sides, loadingSides, errorSides} = useContext(SideContext);
     
  function renderTableRows(items, category) 
    {
  // varje lista (burgers, drinks, etc kommer renderas med hjälp av denna metod.)
    return items.map((item, index) => (
      <tr key={`${category}-${index}`}>    {/* Skapar en rad */}
        <td>{category}</td>  {/* Skapar en cell med data på raden */}
        <td>{item.name}</td>
        <td>{item.price} $</td>
        <td className='text-center'> <Button 
        variant='success' 
        id={`add-${category}-${item.id}`}      
        onClick={() => addToCart(item)}>+</Button> 
        </td> 
         <td className='text-center'> <Button 
        variant='danger' 
        id={`${index}-${category}-${item.id}`}      
        onClick={() => removeFromCart(item)}>-</Button> 
        </td>
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
                <th className='text-center'>Add</th>
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