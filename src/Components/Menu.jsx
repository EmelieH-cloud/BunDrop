import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import BurgerCard from './BurgerCard';
import DrinkCard from './DrinkCard';
import { BurgerContext } from '../Context/BurgerContext';
import { DrinksContext } from '../Context/DrinksContext';

function Menu() {
  // state-variabler för att hålla koll på valda filter och synligheten för olika cards.
  const [chosenCategories, setCategories] = useState(['none']);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showBurgers, setShowBurgers] = useState(false);

  const { burgers, loading: burgerLoading, error: burgerError } = useContext(BurgerContext);
  const { drinks, loading: drinkLoading, error: drinkError } = useContext(DrinksContext);

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;

    if (checked && !chosenCategories.includes(name)) {
      setCategories(prevCategories => [...prevCategories, name]);
      if (name === 'Drinks') {
        setShowDrinks(true);
      } else if (name === 'Burgers') {
        setShowBurgers(true);
      } else if (name === 'Show all') {
        setShowBurgers(true);
        setShowDrinks(true);
      }
    } else {
      setCategories(chosenCategories.filter(category => category !== name));
      if (name === 'Drinks') {
        setShowDrinks(false);
      } else if (name === 'Burgers') {
        setShowBurgers(false);
      } else if (name === 'Show all') {
        setShowBurgers(false);
        setShowDrinks(false);
      }
    }
  }

  if (burgerLoading || drinkLoading) {
    return <div>Loading...</div>;
  }

  if (burgerError || drinkError) {
    return <div>Error: {burgerError || drinkError}</div>;
  }

  return (
    <>
      <div className='my-filter-container text-white'>
        <Form>
          <div className='my-checkbox-container'>
            {['Burgers', 'Fries', 'Drinks', 'Sides', 'Desserts', 'Show all'].map((category) => (
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

      {showBurgers && (
        <div className='container mt-4 border border-primary'>
          <div className='row'>
            {burgers.map(burger => (
              <div className='col-lg-3 border border-primary' key={burger.id}>
                <BurgerCard burger={burger} />
              </div>
            ))}
          </div>
        </div>
      )}

      {showDrinks && (
        <div className='container mt-4 border border-primary'>
          <div className='row'>
            {drinks.map(drink => (
              <div className='col-lg-3 border border-primary' key={drink.id}>
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
