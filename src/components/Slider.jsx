import React from 'react';

const categories = [
  { id: 1, name: 'Category 1', image: 'category1.jpg' },
  { id: 2, name: 'Category 2', image: 'category2.jpg' },
  { id: 3, name: 'Category 3', image: 'category3.jpg' },
  // Weitere Kategorien hier hinzufügen
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === categories.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? categories.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-gray-800 text-white">
          Prev
        </button>
        <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-800 text-white">
          Next
        </button>
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {categories.map(category => (
              <div key={category.id} className="w-full flex-shrink-0">
                <img src={category.image} alt={category.name} className="w-full h-auto" />
                <p className="text-center">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;