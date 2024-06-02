import React from 'react'

function DrinkCard( {drink, addToFavorites}) {
    return ( <>
    <div className='my-card-container'>
      {drink.image ? // om bild finns... visa den
       (<img src={drink.image} alt={drink.name} className="card-image" /> )
        : 
        // ...annars "image not available"
         (<div className="no-image">Image not available</div> )}
          </div>
      <div className="burger-details text-center">
        <h2>{drink.name}</h2>
        <p>{drink.description}</p>
        <p>Price: {drink.price} $</p>
         <button onClick={() => addToFavorites(drink)} className='btn btn-light'>Add to favorites</button>
    </div>
 
    </> );
}

export default DrinkCard;