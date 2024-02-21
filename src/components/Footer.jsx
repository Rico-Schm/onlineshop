import React from 'react'

const Footer = () => {
  return (
    <footer>
        <section id='footer-top'>
            <section id='footer-left' className='footer-links'>
                <h5>Rund um Ihre Bestellung</h5>
                <ul>
                    <li><a href="">Versandkostenfrei ab 49 Euro</a></li>
                    <li><a href="">Versandinformationen</a></li>
                    <li><a href="">Kauf auf Rechnung</a></li>
                    <li><a href="">Weitere Zahlungsarten</a></li>
                    <li><a href="">30 Tage Rückgaberecht</a></li>
                    <li><a href="">Rücksendeunterlagen</a></li>
                    <li><a href="">Entsorgung</a></li>
                </ul>
            </section>
            {/* footer middle */}
            <section id='footer-mid' className='footer-links'>
                <h5>Über uns</h5>
                <ul>
                    <li><a href="">Wohnlexikon</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Presse</a></li>
                    <li><a href="">Newsletter</a></li>
                    <li><a href="">Geschenkgutscheine</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Sitemap</a></li>
                </ul>
            </section>
            {/* footer right */}
            <section id='footer-right' className='footer-links'>
                <h5>International</h5>
                <ul>
                    <li><a href="">Shop.com</a></li>
                    <li><a href="">Shop.fr, Francais</a></li>
                    <li><a href="">Shop.at</a></li>
                    <li><a href="">Shop.ch</a></li>
                    <li><a href="">Shop.dk, Dansk</a></li>
                    <li><a href="">Shop.nl, Nederlands</a></li>
                    <li><a href="">Shop.de</a></li>
                </ul>
            </section>
        </section>
        <section id='footer-bottom'>
            <section>
                <strong><a href="#header-top">Copyright 2023 - Shop</a></strong>
            </section>
            <section>
                <strong>
                    <a href="">Find us on Facebook</a>
                </strong>
            </section>
        </section>
    </footer>
  );
}

export default Footer;