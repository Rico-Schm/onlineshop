import React from 'react';
import { useState } from 'react';
import Banner from '../assets/herobanner.jpg';

function Header() {
    const [slogan, setSlogan] = useState('ogoL');

    const handleClick = () => {
        if (slogan === 'ogoL') {
            setSlogan('Logo');
        } else {
            setSlogan('ogoL');
        }
    };

    return (
        <>
        <header>
            <section id='header-top'>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#empfehlungen">Products</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>
                <h1 id='slogan' className='logo' onClick={handleClick}>{slogan}</h1>
            <section id='filter'>
                <section id='search'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 16 16"><path fill="currentColor" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/></svg>
                </section>
            </section>
            </section>
            {/* <hr /> */}
        </header>
        <section id='banner'>
            <section id='banner-wrap'>
                {/* <section className='banner-box'>
                    <img src={Banner} alt="Banner 1" />
                </section>
                <section className='banner-box'>
                    <img src={Banner} alt="Banner 2" />
                </section>
                <section className='banner-box'>
                    <img src={Banner} alt="Banner 3" />
                </section> */}
            </section>
            <section id='banner-text'>
                <h2 className='h2-small'>Möbel kaufen einfach</h2>
                <p>Jetzt Angebote entdecken & sparen</p>
                <button type='button'>Jetzt entdecken</button>
            </section>
        </section>
    </>
    );
}

export default Header;