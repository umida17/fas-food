import React, { useState, useEffect } from 'react';
import './Menu.css';

 import wawlik from '../../assets/wawlik.png';
import klipartz from '../../assets/klipartz.png';
import pitsa from '../../assets/pitsa.png';
 import burger from '../../assets/burger.png';
 import asartiy from '../../assets/asartiy.png';
 import lavash from '../../assets/lavash.png';
import stek from '../../assets/stek.png';
import video from '../../assets/Video.png';
import 1 from '../../assets/1.png';




 const CounterAnimate = ({ targetPrice }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(targetPrice.replace('$', '')); 
    
    if (start === end) return;

    let totalDuration = 1000; 
    
    let incrementTime = Math.max(Math.floor(totalDuration / (end * 10)), 20);
    
    let timer = setInterval(() => {
      start += 0.5;  
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetPrice]);

  return <span>${count.toFixed(2)}</span>;
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Shawarma', 'Turk Kebab', 'Hamburger Kebab', 
    'Doner Kebab', 'Shish Kebab', 'French Fries Pizza', 'Desserts'
  ];


  const popularDishes = [
    { title: 'Barbecue Shish kebab Shashlik', price: '$12.00', rating: 5, img: klipartz},
    { title: 'Pepperoni Fresh Italian Pizza', price: '$14.50', rating: 4, img: pitsa },
    { title: 'Juicy Beef Burger Double Chese', price: '$9.99', rating: 5, img: burger },
    { title: 'Turkish Traditional Doner Kebab', price: '$11.00', rating: 5, img: asartiy },
  ];


  const regularMenu = [
    { title: 'klipartz', price: '$12.00', img: klipartz, category: 'klipartz' },
    { title: 'Classic Cheese Pizza', price: '$15.00', img: pitsa, asartiy: 'asartiy' },
    { title: 'Gourmet Hamburger Crispy', price: '$8.50', img: klipartz, category: 'Hamburger Kebab' },
    { title: 'Special Shawarma Wrap', price: '$10.00', img: wawlik, category: 'Shawarma' },
    { title: 'King Doner Kebab', price: '$13.20', img: klipartz, category: 'Doner Kebab' },
    { title: 'Turkish Sweet Dessert', price: '$7.00', img: pitsa, category: 'Desserts' },
    { title: 'Barbecue Shashlik Skewer', price: '$12.00', img: wawlik, category: 'Shish Kebab' },
    { title: 'Mixed Pizza Pack', price: '$18.00', img: pitsa, lavash: 'lavash' },
    { title: 'Double Beef Burger', price: '$11.00', img: klipartz, category: 'Hamburger Kebab' },
    { title: 'Mini Shawarma Roll', price: '$6.50', img: wawlik, category: 'Shawarma' },
    { title: 'Traditional Turk Kebab', price: '$14.00', img: klipartz, category: 'Turk Kebab' },
    { title: 'Chocolate Baklava Plate', price: '$9.00', img: pitsa, category: 'Desserts' },
  ];

   const filteredMenu = activeCategory === 'All' 
    ? regularMenu 
    : regularMenu.filter(dish => dish.category === activeCategory);

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
            <div className="hero-bg-circle"></div>
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
            <div className="dish-card animate-card" key={index}>
              <div className="dish-img-container">
                <img src={dish.img} alt={dish.title} />
              </div>
              <h3 className="dish-name">{dish.title}</h3>
              <div className="dish-rating">
                {'★'.repeat(dish.rating)}{'☆'.repeat(5 - dish.rating)}
              </div>
              <span className="dish-price">
                <CounterAnimate targetPrice={dish.price} />
              </span>
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
          {filteredMenu.map((dish, index) => (
            <div className="dish-card animate-card" key={index}>
              <div className="dish-img-container">
                <img src={dish.img} alt={dish.title} />
              </div>
              <h3 className="dish-name">{dish.title}</h3>
              <span className="dish-price">
                <CounterAnimate targetPrice={dish.price} />
              </span>
            </div>
          ))}
        </div>
      </section>


       <section className="testimony-section container">
        <div className="section-title-wrapper center">
          <span className="section-subtitle">Testimony</span>
          <h2 className="section-title-dark">Happy Customers</h2>
        </div>

        <div className="testimony-grid">
          {[1, 2, 3].map((item) => (
            <div className="testimony-card" key={item}>
              <div className="testimony-header">
                <div className="client-info">
                  <h4>Maria</h4>
                  <span>Chef / Food Critic</span>
                </div>
              </div>
              <p className="testimony-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor sit iaculis 
                in arcu. Vulputate morbi lacus, Vestibulum sapien varius scelerisque.
              </p>
              <div className="testimony-stars">★★★★★</div>
            </div>
          ))}
        </div>

        <div className="slider-controls center-controls">
          <button className="slider-btn">&lt;</button>
          <button className="slider-btn active">&gt;</button>
        </div>
      </section>

       <section className="news-section container">
        <div className="section-title-wrapper center">
          <span className="section-subtitle">News</span>
          <h2 className="section-title-dark">Gericht Updates</h2>
        </div>

        <div className="news-grid">
          {[1, 2, 3].map((item) => (
            <div className="news-card animate-card" key={item}>
              <div className="news-img-wrapper">
                 <img src={stek} alt="News Grill" className="news-img" />
              </div>
              <div className="news-content">
                <h3 className="news-card-title">Tips For Prepping And Caring For Your Grill</h3>
                <p className="news-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi 
                  lacus, ipsum nulla elit scelerisque egestas mus in.
                </p>
                <div className="news-footer">
                  <a href="#readmore" className="readmore-link">Read More</a>
                  <span className="news-date">16 Apr 2026</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <button className="view-more-btn">View More</button>
        </div>
      </section>

       <section className="restaurant-video-section">
        <div className="video-overlay">
           <img src={video} alt="Restaurant Interior" className="video-bg-img" />
          <div className="play-btn-wrapper">
            <button className="play-btn">
              <div className="play-triangle"></div>
            </button>
          </div>
        </div>
      </section>


       <section className="instagram-gallery-section container">
        <div className="gallery-info">
          <span className="section-subtitle">Instagram</span>
          <h2 className="section-title-dark">Photo Gallery</h2>
          <p className="gallery-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button className="view-more-btn">View More</button>
        </div>

        <div className="gallery-carousel">
          {[1, 2, 3, 4].map((num) => (
            <div className="gallery-card" key={num}>
              <img 
                src={1} 
                alt={`Gallery ${num}`} 
                className="gallery-img" 
              />
              <div className="instagram-overlay">
                <i className="fab fa-instagram instagram-icon"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Menu;