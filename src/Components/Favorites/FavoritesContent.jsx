import React, { useState, useEffect } from 'react';

function FavoritesContent() {
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFavoriteItems = localStorage.getItem('favoriteItems');
    return savedFavoriteItems ? JSON.parse(savedFavoriteItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const clearFavorites = () => 
  {
    localStorage.removeItem('favoriteItems');
    setFavoriteItems([]);
  };

    const addToFavorites = (burger) => {
    setFavoriteItems(prevItems => [...prevItems, burger]);
  };


  return (
    <>
      {favoriteItems.length > 0 && (
        <div className='d-flex flex-column'>
          {favoriteItems.map((favItem) => (
            <h5 key={favItem.id}>{favItem.name}</h5>
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
