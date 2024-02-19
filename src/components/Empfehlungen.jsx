import React from 'react'
import Kerzenhalter from '../assets/prod1.jpg';
import Messing from '../assets/prod2.jpg';
import EggCups from '../assets/prod3.jpg';
import Cups from '../assets/prod4.jpg';
import SaltnPepper from '../assets/prod5.jpg'

const Empfehlungen = () => {
  return (
    <section id='empfehlungen'>
        <h3>Unsere Empfehlungen für Sie</h3>
        <section id='recommends'>
        <section className='recommends-box'>
            <img src={Kerzenhalter} alt="Kerzenhalter 3er Set" />
            <p>Stoff Nagel - Kerzenhalter, 3er-Set</p>
            <strong className='price'>Preis: 99,99 €</strong>
        </section>
        <section className='recommends-box'>
            <img src={Messing} alt="Messing-Ornament Blatt" />
            <p>ferm Living - Messing-Ornament Blatt (4er-Set)</p>
            <strong className='price'>Preis: 19,00 €</strong>
        </section>
        <section className='recommends-box'>
            <img src={EggCups} alt="Hkliving - 70´2 Eierbecher" />
            <p>HKliving - 70'2 Eierbecher (4er-Set)</p>
            <strong className='price'>Preis: 24,95 €</strong>
        </section>
        <section className='recommends-box'>
            <img src={Cups} alt="Hkliving - 70's Cappucino Tassen" />
            <p>HKliving - 70's Cappucino Tassen 300ml, virgo(4er-Set)</p>
            <strong className='price'>Preis: 34,99 €</strong>
        </section>
        <section className='recommends-box'>
            <img src={SaltnPepper} alt="Hkliving - 70's Salz und Pfefferstreuer" />
            <p>HKliving - 70's Salz und Pfefferstreuer, asteroids / peat</p>
            <strong className='price'>Preis: 99,99 €</strong>
        </section>
        </section>
    </section>
  );
}

export default Empfehlungen;