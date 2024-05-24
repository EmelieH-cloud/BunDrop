import React from 'react'
import BurgerCard from './BurgerCard';
import BurgerContext from '../Context/BurgerContext';
import { useContext } from 'react';

function Menu() 
{
    // Hämta burgarna med BurgerContext 
     const { burgers, loading, error } = useContext(BurgerContext);

      // om det inte returnerades någon burgers-lista, utvärdera nedan if-satser. 
    if (loading) 
     {
     return <div>Loading...</div>;
     }

     if (error) 
    {
    return <div>Error: {error}</div>;
    }
   
     // Renderingsvy: displaya alla burgare med hjälp av BurgerCard-komponenten. 
    return ( 
    <>
     <div id="menu" className='d-flex text-center'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='display-2  mt-5'>Our burgers:</h1>
                      {burgers.map(burger => (
                     <BurgerCard key={burger.id} burger={burger} />
                      ))}
                </div>
            </div>
        </div>
    </div>
    </> );
}

export default Menu;