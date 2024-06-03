import React, { useContext, useState, useEffect} from 'react';
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

    const [favoriteItems, setFavoriteItems] = useState(() => 
  {
    const savedFavoriteItems = localStorage.getItem('favoriteItems');
    return savedFavoriteItems ? JSON.parse(savedFavoriteItems) : [];
  });

   useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

    const addToFavorites = (burger) => {
    setFavoriteItems(prevItems => [...prevItems, burger]);
  };

    const clearFavorites = () => {
    localStorage.removeItem('favoriteItems');
    setFavoriteItems([]);
  };


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
      <div className='container text-white'>
  <Form>
    <div className='my-menu-description-container'>
      <h2 className='mt-4 display-3 mb-3'>The Perfect Menu</h2>
      <p className='fs-5 mb-4'>
        We take our burgers very seriously, which is why we prioritize your online experience in finding your favorites.
         Our interface allows users of every search preference to easily navigate through the world of Bun Drop. 
         <ul className='filter-instruction-container'>
          <li> Use the Lexicon for the most detailed search. </li>
          <li> Select -Show All for a full menu overview. </li>
          <li> Use the checkboxes below to filter out specific menus. </li>
         </ul>
 
      </p>
        <div className='my-other-menus-container rounded'>
        <Nav.Link as={Link} to="/Lexicon" >
          <img src={LexiconLogo} alt="lexicon" className='menu-img'/>
             </Nav.Link> 
          <FullMenu/>
        </div>
    </div>
    <div className='my-checkbox-container rounded mt-4 mb-4'>
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
    
    </div>
  </Form>
</div>
      {showBurgers && (
        <div className='container'>
          <div className='row'>
            {burgers.map(burger => (
              <div className='col-lg-3' key={burger.id}>
                <BurgerCard burger={burger} addToFavorites={addToFavorites} />
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
                <DessertCard dessert={dessert} addToFavorites={addToFavorites} />
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
                <SideCard side={side} addToFavorites={addToFavorites}/>
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
                <DrinkCard drink={drink} addToFavorites={addToFavorites}/>
              </div>
            ))}
          </div>
        </div>
       
      )}
    </>
  );
}

export default Menu;