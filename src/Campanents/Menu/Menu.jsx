import React, { useState } from 'react';
import './Menu.css';
import wawlik from '../../assets/wawlik.png'
import klipartz from '../../assets/klipartz.png'


  const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Shawarma', 'Turk Kebab', 'Hamburger Kebab', 
    'Doner Kebab', 'Shish Kebab', 'French Fries Pizza', 'Desserts'
  ];

   const popularDishes = Array(4).fill({
    title: 'Barbecue Shish kebab Shashlik Skewer',
    price: '$12.00',
    rating: 5,
    img: '/dish-example.png'  
  });

  const regularMenu = Array(12).fill({
    title: 'Barbecue Shish kebab Shashlik Skewer',
    price: '$12.00',
    img: '/dish-example.png'
  });

  return (
    <div className="menu-page">
 
       <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-subtitle">Chase The New Flavour</span>
            <h1 className="hero-title">The Key To Fine Dining</h1>
            <p className="hero-description">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi 
              facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.
            </p>
            <button className="explore-btn">Explore Menu</button>
          </div>
          <div className="hero-image-wrapper">
            <img src={wawlik} alt="Fine Dining" className="hero-food-img" />
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-line"></div>
          <span>SCROLL</span>
        </div>
      </section>

       <section className="popular-section container">
        <div className="section-header">
          <h2 className="section-title">Popular Dishes</h2>
          <div className="slider-controls">
            <button className="slider-btn">&lt;</button>
            <button className="slider-btn active">&gt;</button>
          </div>
        </div>

        <div className="dishes-grid popular-grid">
          {popularDishes.map((dish, index) => (
            <div className="dish-card" key={index}>
              <div className="dish-img-container">
                <img src={klipartz} alt={dish.title} />
              </div>
              <h3 className="dish-name">{dish.title}</h3>
              <div className="dish-rating">
                {'★'.repeat(dish.rating)}{'☆'.repeat(5 - dish.rating)}
              </div>
              <span className="dish-price">{dish.price}</span>
            </div>
          ))}
        </div>
      </section>

       <section className="regular-menu-section container">
        <h2 className="section-title center">Our Regular Menu Pack</h2>
        
         <div className="categories-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

         <div className="dishes-grid regular-grid">
          {regularMenu.map((dish, index) => (
            <div className="dish-card" key={index}>
              <div className="dish-img-container">
                <img src={dish.img} alt={dish.title} />
              </div>
              <h3 className="dish-name">{dish.title}</h3>
              <span className="dish-price">{dish.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;