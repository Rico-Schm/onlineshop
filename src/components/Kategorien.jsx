import React, { useState } from 'react';
import kat1 from '../assets/kat1.jpg';
import kat2 from '../assets/kat2.jpg';
import kat3 from '../assets/kat3.jpg';

const categories = [
  { id: 1, name: 'Kerzenständer', image: kat1 },
  { id: 2, name: 'Decken', image: kat2 },
  { id: 3, name: 'Pendelleuchten', image: kat3 },
];

const Categories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === categories.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? categories.length - 1 : currentSlide - 1);
  };

  return (
    <section id='categories'>
      <h3 className="text-xl font-bold mb-4">Unsere Top Kategorien</h3>
      <section className="relative overflow-hidden">
        <section className="flex items-center">
          <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-gray-800 text-white">
            Prev
          </button>
          <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-800 text-white">
            Next
          </button>
          <section className="overflow-hidden">
            <section className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {categories.map(category => (
                <section key={category.id} className="w-full flex-shrink-0 p-4 relative">
                  <img src={category.image} alt={category.name} className="w-48 h-48 object-cover" />
                  <section className="absolute inset-0 flex items-end justify-center">
                    <section className="bg-black bg-opacity-50 text-white w-full text-center p-2 absolute bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-lg font-bold">{category.name}</p>
                    </section>
                  </section>
                </section>
              ))}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Categories;