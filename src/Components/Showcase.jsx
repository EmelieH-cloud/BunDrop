import React, { useRef } from 'react';
import OriginalBurger from '../assets/1.png';
import BaconBurger from '../assets/2.png';

function Showcase() {
    // Arrayer med bilder och rubriker för varje kategori
    const burgerItems = [
        { image: OriginalBurger, title: 'Classic Burger', text: 'Description of the classic burger...' },
        { image: BaconBurger, title: 'Bacon Burger', text: 'Description of the bacon burger...' },
        // Lägg till fler burgare om du har
    ];

    // Skapa en referens för att kunna använda karusellens metod för att navigera
    const burgerCarousel = useRef(null);

    // Funktion för att navigera till föregående slide
    const prevSlide = () => {
        burgerCarousel.current.prev();
    };

    // Funktion för att navigera till nästa slide
    const nextSlide = () => {
        burgerCarousel.current.next();
    };

    return (
        <section id="showcase">
            <div className='container'>
                <div className='row'>
                    {/* Burgare Karusell */}
                    <div className='carousel-div'>
                        <h2>Burgers</h2>
                        <div className="carousel slide" data-bs-ride="carousel" ref={burgerCarousel}>
                            <div className="carousel-inner">
                                {burgerItems.map((item, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img className="card-img-top fixed-size-img" src={item.image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" onClick={nextSlide}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;
