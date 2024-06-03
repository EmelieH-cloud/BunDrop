import React from 'react'
import { BurgerContext } from '../../Context/BurgerContext';
import { DrinksContext } from '../../Context/DrinksContext';
import { SideContext } from '../../Context/SideContext';
import {DessertsContext} from '../../Context/DessertsContext';
import { useContext} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { IoAddOutline } from "react-icons/io5";
import { GrSubtract } from "react-icons/gr";

function OrderView({ addToCart, removeFromCart }) 
{
  const { burgers} = useContext(BurgerContext);
  const { drinks} = useContext(DrinksContext);
  const { desserts} = useContext(DessertsContext);
  const { sides} = useContext(SideContext);
     
  function renderTableRows(items, category) 
    {
  // burgers, drinks, etc kommer renderas med hjälp av denna metod.
    return items.map((item, index) => (
      <tr key={`${category}-${index}`}>    
        <td>{category}</td>  
        <td>{item.name}</td>
        <td>{item.price} $</td>
        <td className='text-center'> <Button 
        variant='success' 
        id={`add-${category}-${item.id}`}      
        onClick={() => addToCart(item)}><IoAddOutline /></Button> 
        </td> 
         <td className='text-center'> <Button 
        variant='danger' 
        id={`${index}-${category}-${item.id}`}      
        onClick={() => removeFromCart(item)}><GrSubtract /></Button> 
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
                 <th className='text-center'>Remove</th>
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