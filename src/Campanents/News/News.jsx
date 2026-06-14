import React, { useState } from 'react';
import './News.css';

const News = () => {
  // Slayder tugmalari bosilganda raqamlar o'zgarishi uchun holat (state)
  const [slide, setSlide] = useState(0);

  // Rasmdagi 3 ta "Maria" kartasi va ularning ostidagi dinamik raqamlar
  const testimonies = [
    { id: 1, name: "Maria", date: "14 Apr 2026", likes: 12, views: 234 },
    { id: 2, name: "Maria", date: "15 Apr 2026", likes: 19, views: 310 },
    { id: 3, name: "Maria", date: "16 Apr 2026", likes: 25, views: 420 }
  ];

  // Slayder tugmalari bosilganda raqamlarni o'zgartirish funksiyasi
  const handleNext = () => setSlide(prev => (prev + 1) % testimonies.length);
  const handlePrev = () => setSlide(prev => (prev - 1 + testimonies.length) % testimonies.length);

  return (
    <div className="news-page-container">
      
      {/* ================= TESTIMONY SECTION ================= */}
      <section className="testimony-section">
        <div className="section-header">
          <span className="subtitle">Testimony</span>
          <div className="spoon-line"></div>
          <h2 className="main-title">Happy Customers</h2>
        </div>

        <div className="testimony-grid">
          {testimonies.map((item) => (
            <div className="testimony-card" key={item.id}>
              <h3 className="customer-name">{item.name}</h3>
              <p className="customer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vulputate morbi lacus, ipsum nulla elit scelerisque egestas mus in.
              </p>
              <div className="card-footer-meta">
                <span className="meta-item">📅 {item.date}</span>
                {/* Slayder bosilganda raqamlar o'zgarib turadi */}
                <span className="meta-item">❤️ {item.likes + slide}</span>
                <span className="meta-item">👁️ {item.views + (slide * 5)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rasmdagi slayder tugmalari */}
        <div className="slider-arrows">
          <button className="arrow-btn" onClick={handlePrev}>&lt;</button>
          <button className="arrow-btn" onClick={handleNext}>&gt;</button>
        </div>
      </section>

      {/* Rasmdagi o'rtadagi dumaloq pichoq-vilka belgisi */}
      <div className="center-divider">
        <div className="circle-logo">
          <span className="logo-text">BITE DELIGHT</span>
        </div>
      </div>

      {/* ================= GERICHT UPDATES SECTION ================= */}
      <section className="updates-section">
        <div className="section-header">
          <span className="subtitle">News</span>
          <div className="spoon-line"></div>
          <h2 className="main-title red-title">Gericht Updates</h2>
        </div>

        <div className="updates-grid">
          {[1, 2, 3].map((id) => (
            <article className="update-card" key={id}>
              <div className="card-image-box">
                {/* Rasm yo'lini shu yerga qo'yasiz, hozircha bo'sh joy qoldirildi */}
                <img src="" alt="" className="update-img" />
                <div className="image-placeholder-text">Rasm joyi</div>
              </div>
              <div className="card-body">
                <h3 className="card-title">Tips For Prepping And Caring For Your Grill</h3>
                <p className="card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Vulputate morbi lacus, ipsum nulla elit scelerisque egestas mus in.
                </p>
                <div className="card-footer">
                  <a href={`#read-${id}`} className="read-more">Read More</a>
                  <span className="post-date">16 Apr 2026</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="view-more-container">
          <button className="view-more-btn">View More</button>
        </div>
      </section>

      {/* ================= BOTTOM LARGE IMAGE/VIDEO BANNER ================= */}
      <div className="bottom-video-banner">
        <div className="play-button-overlay">
          <div className="play-btn-circle">
            <div className="play-icon-triangle"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default News;