import React from 'react'

function BurgerCard( {burger}) {
    return ( <>
    <div className='my-card-container'>
      {burger.image ? // om bild finns... visa den
       (<img src={burger.image} alt={burger.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h2>{burger.name}</h2>
        <p>Description: {burger.description}</p>
        <p>Price: {burger.price}</p>
    </div>
 
    </> );
}

export default BurgerCard;