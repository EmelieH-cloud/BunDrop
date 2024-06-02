import React from 'react'

function Hero() {
    return ( 
    <>
    <section id="hero" className='d-flex align-items-start text-center'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='display-2  mt-5 text'>Welcome to Bun Drop</h1>
                    <h2 className='slogan'>Where every burger is a masterpiece.</h2>
                    <button className='how-it-works-btn'>Not sure where to begin? click here!</button>
                </div>
            </div>
        </div>
    </section>
    </> );
}

export default Hero;