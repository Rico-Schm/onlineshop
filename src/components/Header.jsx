import React from 'react';
import Banner from '../assets/herobanner.jpg';

function Header() {
    return (
        <>
        <header>
            <section id='header-top'>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#empfehlungen">Products</a></li>
                    <li><a href="#Blog">Blog</a></li>
                </ul>
            </nav>
            <h1 id='logo'>Logo</h1>
            <section id='filter'>
                <section id='search'>
                    <span class="icon-[carbon--search]"></span>
                </section>
            </section>
            </section>
            <hr />
        </header>
        <section id='banner'>
            <section id='banner-img'>
                <img src={Banner} alt="" />
            </section>
            <section id='banner-text'>
                <h2>Möbel kaufen einfach</h2>
                <p>Jetzt Angebote entdecken & sparen</p>
                <button type='button'>Jetzt entdecken</button>
            </section>
        </section>
    </>
    );
}

export default Header;