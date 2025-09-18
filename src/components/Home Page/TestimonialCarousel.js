import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Michelle G.',
    text: 'Sustainable Handyman Solution is fantastic! Their eco-friendly approach and attention to detail made my home repairs a breeze. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=16'
  },
  {
    name: 'John D.',
    text: 'Great service! Very punctual and professional. Loved how sustainable their methods were.',
    image: 'https://i.pravatar.cc/400?img=59'
  },
  {
    name: 'Linda K.',
    text: 'My go-to handyman team now! Efficient, kind, and they clean up after themselves.',
    image: 'https://i.pravatar.cc/400?img=49'
  },
  {
    name: 'Carlos M.',
    text: 'I’m impressed with the eco-conscious choices they made during the project.',
    image: 'https://i.pravatar.cc/400?img=12'
  },
  {
    name: 'Emily R.',
    text: 'Amazing experience from start to finish. Will definitely use them again!',
    image: 'https://i.pravatar.cc/400?img=26'
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // change every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const { name, text, image } = testimonials[currentIndex];

  return (
    <div className="testimonial-carousel-container">
      <button
        onClick={handlePrev}
        className="testimonial-carousel-arrow"
        aria-label="Previous testimonial"
      >
       🡐
      </button>
      <div className="testimonial-carousel-content">
        <img src={image} alt={name} className="testimonial-carousel-image" />
        <p className="testimonial-carousel-text">{text}</p>
        <p className="testimonial-carousel-name">{name}</p>
      </div>
      <button
        onClick={handleNext}
        className="testimonial-carousel-arrow"
        aria-label="Next testimonial"
      >
        🡒
      </button>
    </div>
  );
};

export default TestimonialCarousel;
