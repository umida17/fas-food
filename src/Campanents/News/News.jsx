import React, { useState } from 'react';
import './News.css';
import klipar from '../../assets/klipartz.png';

const News = () => {
  const categories = [
    "All", "KEBABS", "PIDES", "BURGERS", "OTHER DISHES", "SIDES", "DRINKS", "DESSERTS", "MEAL DEALS"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const baseMenuProducts = [
    { id: 1, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 2, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 3, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 4, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 5, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 6, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 7, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 8, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 9, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
    { id: 10, name: "Barbecue Shish kebab Shashlik Skewer", basePrice: 12.00 },
  ];

  const getMultiplier = (category) => {
    switch (category) {
      case "KEBABS": return 1.2;
      case "PIDES": return 0.9;
      case "BURGERS": return 0.8;
      case "DRINKS": return 0.4;
      default: return 1.0;
    }
  };

  const multiplier = getMultiplier(activeCategory);

  return (
    <div className="regular-menu-page">
      <div className="menu-page-layout">
        
        <aside className="menu-sidebar-panel">
          <h2 className="sidebar-main-heading">Our Regular Menu Pack</h2>
          
          <div className="sidebar-buttons-list">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`sidebar-nav-btn ${activeCategory === cat ? 'active-cat' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <main className="menu-products-display">
          <div className="products-two-columns-grid">
            {baseMenuProducts.map((product, index) => {
              const dynamicPrice = (product.basePrice * multiplier + (index * 0.5)).toFixed(2);
              
              return (
                <div className="single-product-card" key={product.id}>
                  
                  {index === 4 && (
                    <div className="floating-circular-badge">
                      <div className="rotating-text-svg">
                        <svg viewBox="0 0 100 100" width="90" height="90">
                          <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                          <text fill="#b7202e" fontSize="8.5" fontWeight="bold" letterSpacing="2.5">
                            <textPath href="#circlePath">BITE DELIGHT IN EVERY BITE • </textPath>
                          </text>
                        </svg>
                        <div className="inner-fork-spoon">🍴</div>
                      </div>
                    </div>
                  )}

                  <div className="product-img-container">
                    <img 
                      src={klipar}
                      alt={product.name} 
                      className="product-actual-image" 
                    />
                  </div>
                  
                  <div className="product-details-content">
                    <h3 className="product-title-name">{product.name}</h3>
                    <span className="product-price-tag">${dynamicPrice}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

      </div>
    </div>
  );
};
export default News;