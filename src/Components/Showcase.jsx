import React, { useState } from 'react';
import originalBurger from '../assets/1.png';
import baconBurger from '../assets/2.png';
import veganBurger from '../assets/3.png';

/* 
SHOWCASE: Komponent som visar ett bildspel som användaren kan navigera igenom.
 */

function Showcase() {
    
    // state-variabler som håller reda på nuvarande slide och uppdaterar den. 
    const [currentSlide, setCurrentSlide] = useState(1);

    // Körs så fort en radiobutton väljs: 
    const handleSlideChange = (event) => 
    {
        setCurrentSlide(parseInt(event.target.id.split('-')[1]));
        // event.target.id är id:et på den valda radioknappen (tex 'slide-1') och
        // split('-') delar upp strängen vid bindesstrecket, [1] anger att det är andra
        // elementet som ska sparas och konverteras till en int. 
    };

    return (
        <div id="showcase">
            <input
                type="radio"
                name="slider"
                id="slide-1"
                checked={currentSlide === 1}
                onChange={handleSlideChange}
            />
            <input
                type="radio"
                name="slider"
                id="slide-2"
                checked={currentSlide === 2}
                onChange={handleSlideChange}
            />
            <input
                type="radio"
                name="slider"
                id="slide-3"
                checked={currentSlide === 3}
                onChange={handleSlideChange}
            />
            <input
                type="radio"
                name="slider"
                id="slide-4"
                checked={currentSlide === 4}
                onChange={handleSlideChange}
            />
            <div id="slides">
                <h1 className='mt-3'>Top choices</h1>
                <div id="overflow">
                    <div className="inner">
                        <div className="slide slide_1">
                            <div className="slide-content">
                                   <p>Original Burger</p>
                                <img src={originalBurger} alt="ogburger"/>
                            </div>
                        </div>
                        <div className="slide slide_2">
                            <div className="slide-content">
                                  <p>Bacon burger</p>
                                    <img src={baconBurger} alt="bcburger"/>
                            </div>
                        </div>
                        <div className="slide slide_3">
                            <div className="slide-content">
                                <p>Vegan burger</p>
                                   <img src={veganBurger} alt="bcburger"/>
                            </div>
                        </div>
                        <div className="slide slide_4">
                            <div className="slide-content">
                                <h2>Slide 4</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="controls">
                <label htmlFor="slide-1"></label>
                <label htmlFor="slide-2"></label>
                <label htmlFor="slide-3"></label>
                <label htmlFor="slide-4"></label>
            </div>
            <div id="bullets">
                <label htmlFor="slide-1"></label>
                <label htmlFor="slide-2"></label>
                <label htmlFor="slide-3"></label>
                <label htmlFor="slide-4"></label>
            </div>
        </div>
    );
}

export default Showcase;
