import React from 'react'

function BurgerCard( {burger}) {
    return ( <>
      <div className="burger-card">
      {burger.image ? // om bild finns... visa den
       (<img src={burger.image} alt={burger.name} className="burger-image" /> )
        : // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
      <div className="burger-details">
        <h2>{burger.name}</h2>
        <p>Description: {burger.description}</p>
        <p>Price: {burger.price}</p>
      </div>
    </div>
    </> );
}

export default BurgerCard;