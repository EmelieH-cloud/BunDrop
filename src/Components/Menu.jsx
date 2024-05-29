import React, { useContext, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import BurgerCard from './BurgerCard';
import DrinkCard from './DrinkCard';
import DessertCard from './DessertCard';
import SideCard from './SideCard';
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';
import { SideContext } from '../Context/SideContext';
import {DessertsContext} from '../Context/DessertsContext';

function Menu() 
{
  // state-variabler för att hålla koll på filtret och synligheten för olika cards:
  const [chosenCategories, setCategories] = useState(['none']);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showBurgers, setShowBurgers] = useState(false);
  const [showDesserts, setShowDesserts] = useState(false);
   const [showSides, setShowSides] = useState(false);

    useEffect(() => {
    // Visa alla kategorier direkt från början.
        setShowBurgers(true);
        setShowDrinks(true);
        setShowDesserts(true);
        setShowSides(true);
  }, []); 

  // Hämta data från db.json med hjälp av kontextobjekten: 
  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, drinkLoading, drinkError } = useContext(DrinksContext);
  const { desserts, loadingDesserts, errorDesserts} = useContext(DessertsContext);
  const { sides, loadingSides, errorSides} = useContext(SideContext);

  function handleCheckboxChange(event) 
  {
    const { name, checked } = event.target; 
    // destrukturera egenskaperna 'name' och 'checked' från checkboxen som triggat eventet 

    if (checked && !chosenCategories.includes(name)) 
    {
      setCategories(prevCategories => [...prevCategories, name]);
      if (name === 'Drinks') 
      {
        setShowDrinks(true);
      } 
      else if (name === 'Burgers') 
      {
        setShowBurgers(true);
      }
       else if (name === 'Desserts') 
      {
        setShowDesserts(true);
      }
       else if (name === 'Sides') 
      {
        setShowSides(true);
      }
       else if (name === 'Show all') 
      {
        setShowBurgers(true);
        setShowDrinks(true);
        setShowDesserts(true);
        setShowSides(true);
      }
    } 
    else   // Om den valda kategorin är unchecked och namnet redan finns i chosenCategories 
     {
      // uppdatera listan 
      setCategories(chosenCategories.filter(category => category !== name));
   
      // uppdatera UI 
      if (name === 'Drinks') 
      {
        setShowDrinks(false);
      }
       else if (name === 'Burgers') 
      {
        setShowBurgers(false);
      }
       else if (name === 'Desserts') 
      {
        setShowDesserts(false);
      }
         else if (name === 'Sides') 
      {
        setShowSides(false);
      }
       else if (name === 'Show all')
       {
        setShowBurgers(false);
        setShowDrinks(false);
        setShowDesserts(false);
        setShowSides(false);
      }
    }
  }
  if (burgerLoading || drinkLoading || loadingDesserts) 
  {
    return <div>Loading...</div>;
  }

  if (burgerError || drinkError || errorDesserts) 
  {
    return <div>Error: {burgerError || drinkError || errorDesserts}</div>;
  }

  return (
    <>
      <div className='my-filter-container text-white'>
  <Form>
    <div className='my-menu-description-container'>
      <h2 className='mt-4'>Menu Selection:</h2>
    </div>
    <div className='my-checkbox-container'>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Burgers`}
          name="Burgers"
          label="Burgers"
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Drinks`}
          name="Drinks"
          label="Drinks"
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Sides`}
          name="Sides"
          label="Sides"
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Desserts`}
          name="Desserts"
          label="Desserts"
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-ShowAll`}
          name="Show all"
          label="Show all"
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  </Form>
</div>

      {showBurgers && (
        <div className='container'>
          <div className='row'>
            {burgers.map(burger => (
              <div className='col-lg-3' key={burger.id}>
                <BurgerCard burger={burger} />
              </div>
            ))}
          </div>
        </div>
      )}

       {showDesserts && (
        <div className='container'>
          <div className='row'>
            {desserts.map(dessert => (
              <div className='col-lg-3' key={dessert.id}>
                <DessertCard dessert={dessert} />
              </div>
            ))}
          </div>
        </div>
      )}

       {showSides && (
        <div className='container'>
          <div className='row'>
            {sides.map(side => (
              <div className='col-lg-3' key={side.id}>
                <SideCard side={side} />
              </div>
            ))}
          </div>
        </div>
      )}

      {showDrinks && (
        <div className='container'>
          <div className='row'>
            {drinks.map(drink => (
              <div className='col-lg-3' key={drink.id}>
                <DrinkCard drink={drink} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;