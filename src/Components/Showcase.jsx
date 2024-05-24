import React from 'react';
import { useState } from "react";
import originalBurger from '../assets/1.png';
import baconBurger from '../assets/2.png';
import veganBurger from '../assets/3.png';
import dessert1 from '../assets/ds-1.png';
import dessert2 from '../assets/ds-2.png';
import dessert3 from '../assets/ds-3.png';
import drink1 from '../assets/dr-1.png';
import drink2 from '../assets/dr-2.png';
import drink3 from '../assets/dr-3.png';
import { GoDotFill } from "react-icons/go";

function Showcase() {

  // sätt originalBurger som default-bild 
    const [image, setImage] = useState(originalBurger);

    // sätt dessert1 som default-bild 
    const [dessertimage, setdessertImage] = useState(dessert1);

     // sätt drink1 som default-bild 
    const [drinkimage, setdrinkImage] = useState(drink1);

    return (
 <>
 <div className='container-fluid'> {/* container-fluid: behållaren sträcker sig över hela skärmens bredd*/}
 <div className='row'> 
  <div className=' d-flex flex-column mt-4 align-items-center text-center col-lg-4'> {/* col-lg-4: varje bild upptar 4 kolumner och kommer visas bredvid varandra på stora skärmar (totalt 12 kol)*/}
   <h3>Burgers</h3>
    <img src={image} alt="img" className='showcase-img'/>
    <div className='col-lg-7'>
    <p> Indulge in our trio of burger classics, each crafted to perfection for every order. The Original Burger, a timeless icon, boasts a symphony of flavors with its juicy meat, crisp veggies, and secret sauce. Our Bacon Burger delivers a punch of freshness with perfectly grilled bacon. And for a greener yet equally flavorful option, our Vegan Burger shines with a succulent veggie patty bursting with taste and texture.</p>
 </div>
   <div className="btn-toolbar mt-2" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group" aria-label="First group">
    <button onClick={() => setImage(originalBurger)} type="button" className="btn btn-secondary"><GoDotFill /></button>
    <button onClick={() => setImage(baconBurger)} type="button" className="btn btn-secondary"><GoDotFill /></button>
    <button onClick={() => setImage(veganBurger)} type="button" className="btn btn-secondary"><GoDotFill /></button>
  </div>
  </div>
</div>
 <div className='d-flex flex-column mt-4 text-center align-items-center col-lg-4'> {/* col-lg-4: varje bild upptar 4 kolumner och kommer visas bredvid varandra på stora skärmar (totalt 12 kol)*/}
   <h3>Desserts</h3>
    <img src={dessertimage} alt="img" className='showcase-img'/>
     <div className='col-lg-7'>
    <p>
Treat yourself to our dessert trio. Our Classic Chocolate Cake offers layers of rich cocoa goodness. The Berry Tart bursts with fresh, ripe berries atop a buttery crust. And our Gourmet Ice Cream Sandwiches blend creamy ice cream between homemade cookies. Explore sweet indulgence with us.</p>
  </div>
   <div className="btn-toolbar mt-2" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group" aria-label="First group">
    <button onClick={() => setdessertImage(dessert1)} type="button" className="btn btn-secondary"><GoDotFill /></button>
    <button onClick={() => setdessertImage(dessert2)} type="button" className="btn btn-secondary"><GoDotFill /></button>
    <button onClick={() => setdessertImage(dessert3)} type="button" className="btn btn-secondary"><GoDotFill /></button>
  </div>
  </div>
</div>
 <div className=' d-flex flex-column mt-4 text-center align-items-center col-lg-4'> {/* col-lg-4: varje bild upptar 4 kolumner och kommer visas bredvid varandra på stora skärmar (totalt 12 kol)*/}
   <h3>Drinks</h3>
    <img src={drinkimage} alt="img" className='showcase-img'/>
      <div className='col-lg-7'>
    <p>Elevate your spirits with our exquisite selection of alcoholic drinks. Our Classic Margarita offers a perfect blend of tangy lime and smooth tequila, a refreshing favorite. For a sophisticated twist, our Red Wine Sangria infuses rich wine with fresh fruits for a vibrant, fruity delight</p>
   </div>
   <div className="btn-toolbar mt-2" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group" aria-label="First group">
    <button onClick={() => setdrinkImage(drink1)} type="button" className="btn btn-secondary"><GoDotFill /></button>
    <button onClick={() => setdrinkImage(drink2)} type="button" className="btn btn-secondary"><GoDotFill /></button>
    <button onClick={() => setdrinkImage(drink3)} type="button" className="btn btn-secondary"><GoDotFill /></button>
  </div>
  </div>
</div>
 </div>
</div>
 </>
        
    );
}

export default Showcase;
