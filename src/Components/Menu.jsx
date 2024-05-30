import React, { useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import FullMenu from './FullMenu';
import BurgerCard from './BurgerCard';
import DrinkCard from './DrinkCard';
import DessertCard from './DessertCard';
import SideCard from './SideCard';
import LexiconLogo from '../assets/lexicon-logo.png';
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';
import { SideContext } from '../Context/SideContext';
import {DessertsContext} from '../Context/DessertsContext';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; 

function Menu() 
{
  // state-variabler för att hålla koll på filtret och kontrollera synligheten för olika cards:
  const [chosenCategories, setCategories] = useState(['none']);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showBurgers, setShowBurgers] = useState(false);
  const [showDesserts, setShowDesserts] = useState(false);
  const [showSides, setShowSides] = useState(false);

  // Hämta data från db.json med hjälp av kontextobjekten: 
  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, drinkLoading, drinkError } = useContext(DrinksContext);
  const { desserts, loadingDesserts, errorDesserts} = useContext(DessertsContext);
  const { sides, loadingSides, errorSides} = useContext(SideContext);

  function handleCheckboxChange(event) 
  {
    const { name, checked } = event.target;  // destrukturera egenskaperna 'name' och 'checked' från checkboxen (target) som triggat eventet 
   
    //--------------------------------------------------------------------------
    if (checked && !chosenCategories.includes(name)) 
    // om en checkbox blivit checkad och name inte redan finns i chosenCategories
    {  
      // uppdatera chosenCategories: 
       setCategories(prevCategories => [...prevCategories, name]);
      
    // vald kategori visas 
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
    } 

     //---------------------------------------------------------
    if (!checked && chosenCategories.includes(name))  
     // Om den valda kategorin är unchecked och namnet finns i chosenCategories 
      {
      // uppdatera listan och ta bort den uncheckade kategorin 
      setCategories(chosenCategories.filter(category => category !== name));
      if (name === 'Drinks')   { setShowDrinks(false); }
      if (name === 'Burgers')  { setShowBurgers(false); }
      if (name === 'Desserts') { setShowDesserts(false); }
      if (name === 'Sides')    { setShowSides(false); }
    }

  }
  if (burgerLoading || drinkLoading || loadingDesserts || loadingSides) 
  {
    return <div>Loading...</div>;
  }

  if (burgerError || drinkError || errorDesserts) 
  {
    return <div>Error: {burgerError || drinkError || errorDesserts || errorSides}</div>;
  }

  return (
    <>
     <FullMenu/>
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
      <div className='my-lexicon-container'>
        <Nav.Link as={Link} to="/Lexicon" >
          <img src={LexiconLogo} alt="lexicon"/>
          </Nav.Link> 
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