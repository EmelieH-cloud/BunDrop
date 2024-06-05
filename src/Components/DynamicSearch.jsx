import React, { useState, useEffect, useContext } from 'react';
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';
import { SideContext } from '../Context/SideContext';
import { DessertsContext } from '../Context/DessertsContext';
import BurgerCard from './BurgerCard';
import DrinkCard from './DrinkCard';
import DessertCard from './DessertCard';
import SideCard from './SideCard';
import Nav from 'react-bootstrap/Nav';

function DynamicSearch() 
{
  const [searchInput, setSearchInput] = useState("");
  const [burgerFilter, setFilteredBurgers] = useState([]);
  const [drinksFilter, setFilteredDrinks] = useState([]);
  const [dessertFilter, setFilteredDesserts] = useState([]);
  const [sidesFilter, setFilteredSides] = useState([]);
  const { burgers } = useContext(BurgerContext);
  const { drinks } = useContext(DrinksContext);
  const { desserts } = useContext(DessertsContext);
  const { sides } = useContext(SideContext);

  useEffect(() => 
  {
   const searchTerm = searchInput.toLowerCase();
    if (searchTerm) 
    {
      const filteredBurgers = burgers.filter(burger => 
        burger.name.toLowerCase().includes(searchTerm)
      );
      const filteredDrinks = drinks.filter(drink => 
        drink.name.toLowerCase().includes(searchTerm)
      );
      const filteredDesserts = desserts.filter(dessert => 
        dessert.name.toLowerCase().includes(searchTerm)
      );
      const filteredSides = sides.filter(side => 
        side.name.toLowerCase().includes(searchTerm)
      );

      // Använd Set för att säkerställa att ingen lista innehåller duplicerade objekt. 
      const burgerResults = Array.from(new Set(filteredBurgers.map(burger => burger.id)))
     .map(id => filteredBurgers.find(burger => burger.id === id));

       const drinkResults = Array.from(new Set(filteredDrinks.map(drink => drink.id)))
     .map(id => filteredDrinks.find(drink => drink.id === id));

     const dessertResults = Array.from(new Set(filteredDesserts.map(dessert => dessert.id)))
     .map(id => filteredDesserts.find(dessert => dessert.id === id));

      const sideResults = Array.from(new Set(filteredSides.map(side => side.id)))
     .map(id => filteredSides.find(side=> side.id === id));

      setFilteredBurgers(burgerResults);
      setFilteredDrinks(drinkResults);
      setFilteredDesserts(dessertResults);
      setFilteredSides(sideResults);
    }
     else 
    {
      setFilteredBurgers([]);
      setFilteredDrinks([]);
      setFilteredDesserts([]);
      setFilteredSides([]);
    }
  }, [searchInput, burgers, drinks, desserts, sides]);

  function handleChange(e) 
  {
    // Uppdatera söktermen varje gång någon ändring görs i sökfältet 
    setSearchInput(e.target.value);
  }

 return (
  <>
    <div className='container text-center'>
        <div className='dynamic-search-container'>
      <input
        type="text"
        placeholder="Dynamic search"
        value={searchInput}
        onChange={handleChange}
        className='mb-4'
      />
      </div>
      {sidesFilter.length > 0 && (
        <div className='container'>
          <div className='row'>
            {sidesFilter.map(side => (
              <div className='col-lg-3' key={side.id}>
                <SideCard side={side} />
              </div>
            ))}
          </div>
        </div>
      )}
{burgerFilter.length > 0 && (
        <div className='container'>
          <div className='row'>
            {burgerFilter.map(burger => (
              <div className='col-lg-3' key={burger.id}>
                <BurgerCard burger={burger} />
              </div>
            ))}
          </div>
        </div>
      )}

      {drinksFilter.length > 0 && (
        <div className='container'>
          <div className='row'>
            {drinksFilter.map(drink => (
              <div className='col-lg-3' key={drink.id}>
                <DrinkCard drink={drink} />
              </div>
            ))}
          </div>
        </div>
      )}

       {dessertFilter.length > 0 && (
        <div className='container'>
          <div className='row'>
            {dessertFilter.map(dessert => (
              <div className='col-lg-3' key={dessert.id}>
                <DessertCard dessert={dessert} />
              </div>
            ))}
          </div>
        </div>
      )}


    </div>
  </>
);

            }
export default DynamicSearch;