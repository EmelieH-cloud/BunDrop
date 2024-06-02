import React from 'react'

function BurgerCard( { burger, addToFavorites }) {
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
        <p>{burger.description}</p>
        <p>Price: {burger.price} $</p>
         <button onClick={() => addToFavorites(burger)}>Add to favorites</button>
    </div>
 
    </> );
}

export default BurgerCard;