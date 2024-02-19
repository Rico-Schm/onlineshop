import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#Blog">Blog</a></li>
                </ul>
            </nav>
            <h1 id='logo'>Logo</h1>
            <section id='filter'>
                <section id='search'>
                    
                </section>
            </section>
        </header>
    );
}

export default Header;