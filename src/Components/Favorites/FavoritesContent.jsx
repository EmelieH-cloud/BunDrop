import React, { useState, useEffect } from 'react';

function FavoritesContent() 
{
  // statevariabel för localstorage 
  const [favoriteItems, setFavoriteItems] = useState(() => 
  {
    const savedFavoriteItems = localStorage.getItem('favoriteItems');
    return savedFavoriteItems ? JSON.parse(savedFavoriteItems) : [];
  });

   // Hämta allt i localstorage så fort något ändras i favoriteItems
  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  // Ta bort allt i localstorage 
  const clearFavorites = () => 
  {
    localStorage.removeItem('favoriteItems');
    setFavoriteItems([]);
  };

  return (
    <>
      {favoriteItems.length > 0 && (
        <div className='d-flex flex-column'>
          {favoriteItems.map((favItem, index) => (
            <h5 key={`${favItem.id}-${index}`}>{favItem.name}</h5>
          ))}
          <button onClick={clearFavorites}>Clear favorites</button>
        </div>
      )}
      {favoriteItems.length === 0 && (
        <div className='d-flex flex-column'>
          <h5>No favorites added</h5>
        </div>
      )}
    </>
  );
}

export default FavoritesContent;
