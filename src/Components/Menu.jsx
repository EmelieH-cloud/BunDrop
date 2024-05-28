
import BurgerCard from './BurgerCard';
import DrinkCard from './DrinkCard';
import BurgerContext from '../Context/BurgerContext';
import DrinksContext from '../Context/DrinksContext';
import { useContext } from 'react';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Menu() 
{
    // Hämta meny från db.json med context 
     const { burgers, loading, error } = useContext(BurgerContext);
     const { drinks, loadingDrinks, errorDrinks } = useContext(DrinksContext);
     // state-variabel för att hålla koll på valda filter. 
     const [chosenCategories, setCategories] = useState(['none']);
     
     function handleCheckboxChange(event)
     {
        /* destrukturera egenskaperna 'name' och 'checked' från event.target, dvs vald checkbox*/
       const { name, checked } = event.target;

        if (checked && name!='Remove all' && !chosenCategories.includes(name)) // Om checkboxen är markerad och kategorin inte redan finns
        {
          // uppdatera chosenCategories genom att kopiera den befintliga arrayen och lägg till en ny kategori. 
          setCategories(prevCategories => [...prevCategories, name]);
    
  } else 
  {
    //Om checkboxen inte är markerad (checked == false), skapa en ny array som innehåller alla kategorier utan den nyss valda. 
    setCategories(chosenCategories.filter(category => category !== name));
  }
}

    if (loading || loadingDrinks ) 
     {
     return <div>Loading...</div>;
     }
     if (error || errorDrinks) 
    {
    return <div>Error: {error}</div>;
    }
   
    return ( 
    <>

  <div className='my-filter-container text-white'>
        <Form>
            <div className='my-checkbox-container'>
          {['Burgers', 'Fries', 'Drinks', 'Sides', 'Desserts'].map((category) => (
            <div key={category} className='p-2'>
              <Form.Check
                type="checkbox"
                id={`default-${category}`}
                name={category}
                label={category}
                onChange={handleCheckboxChange}
              />
            </div>
          ))}
          </div>
        </Form>
      </div>

    <div className='my-menu-container mt-4'>
        <div className='row'>
          {burgers.map(burger => (
            <div className='col-lg-3' key={burger.id}>
              <BurgerCard burger={burger} />
            </div>
          ))}
        </div>
      </div>

      
    <div className='container mt-4'>
        <div className='row'>
          {drinks.map(drink=> (
            <div className='col-lg-3' key={drink.id}>
              <DrinkCard drink={drink} />
            </div>
          ))}
        </div>
      </div>

    </> );
}

export default Menu;