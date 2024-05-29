import React, { useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import BurgerCard from './BurgerCard';
import DrinkCard from './DrinkCard';
import DessertCard from './DessertCard';
import SideCard from './SideCard';
import DynamicSearch from './DynamicSearch';
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';
import { SideContext } from '../Context/SideContext';
import {DessertsContext} from '../Context/DessertsContext';

function Menu() 
{
  // state-variabler för att hålla koll på filtret och kontrollera synligheten för olika cards:
  const [chosenCategories, setCategories] = useState(['none']);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showBurgers, setShowBurgers] = useState(false);
  const [showDesserts, setShowDesserts] = useState(false);
  const [showSides, setShowSides] = useState(false);
   const [showAllisChecked, setAllIsChecked] = useState(false);
   const [anyCategoryIsChecked, setAnyCategoryIsChecked] = useState(false);

  // Hämta data från db.json med hjälp av kontextobjekten: 
  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, drinkLoading, drinkError } = useContext(DrinksContext);
  const { desserts, loadingDesserts, errorDesserts} = useContext(DessertsContext);
  const { sides, loadingSides, errorSides} = useContext(SideContext);

  function handleCheckboxChange(event) 
  {

    const { name, checked } = event.target; 
    // destrukturera egenskaperna 'name' och 'checked' från checkboxen (target) som triggat eventet 

    if (checked && !chosenCategories.includes(name)) 
    {
      setCategories(prevCategories => [...prevCategories, name]);
      if (name === 'Drinks') 
      {
        setShowDrinks(true);
        setAnyCategoryIsChecked(true);
      } 
      else if (name === 'Burgers') 
      {
        setShowBurgers(true);
         setAnyCategoryIsChecked(true);
      }
       else if (name === 'Desserts') 
      {
        setShowDesserts(true);
         setAnyCategoryIsChecked(true);
      }
       else if (name === 'Sides') 
      {
        setShowSides(true);
        setAnyCategoryIsChecked(true);
      }
       else if (name === 'Show all') 
      {
        setAllIsChecked(true);
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

      if (!chosenCategories.includes('Burgers') && ('Drinks') && ('Desserts') && ('Sides'))
      {
         setAnyCategoryIsChecked(false); // Gör 'Show All'-knappen tillgänglig 
      }
      if (name === 'Drinks') 
      {
        setShowDrinks(false);
      }
       if (name === 'Burgers') 
      {
        setShowBurgers(false);
      }
      if (name === 'Desserts') 
      {
        setShowDesserts(false);
      }
      if (name === 'Sides') 
      {
        setShowSides(false);
      }
      if (name === 'Show all')
       {
        setAllIsChecked(false);
        setShowBurgers(false);
        setShowDrinks(false);
        setShowDesserts(false);
        setShowSides(false);
      }

      if (chosenCategories.includes('Burgers' || 'Sides' || 'Desserts' || 'Drinks'))
      {
         setAllIsChecked(false);
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
          disabled={showAllisChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Drinks`}
          name="Drinks"
          label="Drinks"
          disabled={showAllisChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Sides`}
          name="Sides"
          label="Sides"
          disabled={showAllisChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Desserts`}
          name="Desserts"
          label="Desserts"
          disabled={showAllisChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4 border border-white'>
        <Form.Check
          type="checkbox"
          id={`default-ShowAll`}
          name="Show all"
          label="Show all"
          disabled={anyCategoryIsChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  </Form>
</div>

<DynamicSearch/>

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