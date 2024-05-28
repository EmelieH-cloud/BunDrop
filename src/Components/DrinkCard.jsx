import React from 'react'

function DrinkCard( {drink}) {
    return ( <>
    <div className='my-burgercard-container'>
      {drink.image ? // om bild finns... visa den
       (<img src={drink.image} alt={drink.name} className="burger-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h2>{drink.name}</h2>
        <p>Description: {drink.description}</p>
        <p>Price: {drink.price}</p>
    </div>
 
    </> );
}

export default DrinkCard;