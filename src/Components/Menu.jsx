import React, { useContext, useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import FullMenu from './FullMenu';
import BurgerCard from './BurgerCard';
import DrinkCard from './DrinkCard';
import DessertCard from './DessertCard';
import SideCard from './SideCard';
import { Link} from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';
import { SideContext } from '../Context/SideContext';
import {DessertsContext} from '../Context/DessertsContext';


function Menu() 
{
  // state-variabler för att hålla koll på synligheten för olika cards:
  const [showDrinks, setShowDrinks] = useState(true);
  const [showBurgers, setShowBurgers] = useState(true);
  const [showDesserts, setShowDesserts] = useState(true);
  const [showSides, setShowSides] = useState(true);

  // state-variabler för att styra checkboxarna 
  const [showDrinksChecked, setShowDrinksChecked] = useState(false);
  const [showBurgersChecked, setShowBurgersChecked] = useState(false);
  const [showDessertsChecked, setShowDessertsChecked] = useState(false);
  const [showSidesChecked, setShowSidesChecked] = useState(false);

  const [cartItems, setCartItems] = useState(() => 
  {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

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

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [favoriteItems]);

    const addToCart = (burger) => 
    {
    setCartItems(prevItems => [...prevItems, burger]);
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
    const { name, checked } = event.target;  
    // destrukturera egenskaperna 'name' och 'checked' från checkboxen (target) som triggat eventet 
    //--------------------------------------------------------------------------
    if (checked) 
    // om en checkbox blivit checkad...
    {  
      
    // vald kategori visas 
      if (name === 'Drinks') 
      {
        setShowSidesChecked(false);
        setShowBurgersChecked(false);
        setShowDessertsChecked(false);
        setShowDrinksChecked(true);
        setShowDrinks(true); 
        setShowBurgers(false); 
        setShowDesserts(false);
        setShowSides(false);
      } 
      else if (name === 'Burgers') 
      {

        setShowSidesChecked(false);
        setShowBurgersChecked(true);
        setShowDessertsChecked(false);
        setShowDrinksChecked(false);
         setShowBurgers(true);
         setShowDrinks(false); 
        setShowDesserts(false);
        setShowSides(false);
    
      }
       else if (name === 'Desserts') 
      {
        setShowDesserts(true);
        setShowDrinks(false); 
        setShowBurgers(false); 
        setShowSides(false);
        setShowSidesChecked(false);
        setShowBurgersChecked(false);
        setShowDessertsChecked(true);
        setShowDrinksChecked(false);
         
      }
       else if (name === 'Sides') 
      {
        setShowSides(true); 
        setShowBurgers(false); 
        setShowDrinks(false); 
        setShowDesserts(false);
        setShowSidesChecked(true);
        setShowBurgersChecked(false);
        setShowDessertsChecked(false);
        setShowDrinksChecked(false);

      }
    }
    if (!checked) 
    {
        setShowBurgers(true);
         setShowDrinks(true); 
        setShowDesserts(true);
        setShowSides(true);
         setShowSidesChecked(false);
        setShowBurgersChecked(false);
        setShowDessertsChecked(false);
        setShowDrinksChecked(false);
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
      <div className='container text-white mt-5'>
  <Form>
    <div className='my-menu-description-container rounded'>
      <h2 className='mt-4 display-3 mb-1'>Our Menu</h2>
    </div>
    <div className='my-checkbox-container rounded mt-4 mb-4'>

      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Burgers`}
          name="Burgers"
          checked={showBurgersChecked}
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
          checked={showDrinksChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Sides`}
          name="Sides"
          label="Sides"
          checked={showSidesChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='p-2 fs-4'>
        <Form.Check
          type="checkbox"
          id={`default-Desserts`}
          name="Desserts"
          label="Desserts"
          checked={showDessertsChecked}
          onChange={handleCheckboxChange}
        />
      </div>
     <FullMenu/>
     <div className=' d-flex align-items-center justify-content-center'>
     <Nav.Link as={Link} to="/dynamicSearch"><a></a>Use dynamic search</Nav.Link> 
     </div>
    </div>
  </Form>
</div>
      {showBurgers && (
        <div className='container'>
          <div className='row'>
            {burgers.map(burger => (
              <div className='col-lg-3' key={burger.id}>
                <BurgerCard burger={burger} addToFavorites={addToFavorites} addToCart={addToCart} />
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
                <DessertCard dessert={dessert} addToFavorites={addToFavorites} addToCart={addToCart}/>
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
                <SideCard side={side} addToFavorites={addToFavorites} addToCart={addToCart}/>
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
                <DrinkCard drink={drink} addToFavorites={addToFavorites} addToCart={addToCart}/>
              </div>
            ))}
          </div>
        </div>
       
      )}
    </>
  );
}

export default Menu;