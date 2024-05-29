import React, { useState, useEffect, useContext } from 'react';
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';
import { SideContext } from '../Context/SideContext';
import {DessertsContext} from '../Context/DessertsContext';

function DynamicSearch() 
{
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, drinkLoading, drinkError } = useContext(DrinksContext);
  const { desserts, loadingDesserts, errorDesserts} = useContext(DessertsContext);
  const { sides, loadingSides, errorSides} = useContext(SideContext);

useEffect(() => {
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

      const allfilteredResults = [
      ...filteredBurgers,
      ...filteredDrinks,
      ...filteredDesserts,
      ...filteredSides
    ];
   
    setFilteredResults(allfilteredResults);
      } 
}, [searchInput, burgers, drinks, desserts, sides]);
      
 function handleChange(e) {
  setSearchInput(e.target.value);
}
      
    return (
        <>
         <div>
            <input
                type="text"
                placeholder="Search all menus"
                value={searchInput}
                onChange={handleChange}
            />
            {burgerLoading || loadingDesserts || loadingSides || drinkLoading && <p>Loading...</p>}
            {burgerError || errorDesserts || errorSides || drinkError && <p>{error}</p>}
            <ul>
                {filteredResults && filteredResults.length > 0 ? (
                    filteredResults.map(result => (
                        <li key={result.id}>{result.name}</li>
                    ))
                ) : (
                    <li>No results found.</li>
                )}
            </ul>
        </div>
        </>
    );
};





    
      

export default DynamicSearch;