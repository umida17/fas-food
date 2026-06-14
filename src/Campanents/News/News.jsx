import React, { useState } from 'react';
import './News.css';

const News = () => {
   const [testimonyIndex, setTestimonyIndex] = useState(0);

   const testimonies = [
    {
      id: 1,
      name: "Maria",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi lacus, ipsum nulla elit scelerisque egestas mus in.",
      date: "14/05/2026",
      likes: 12,
      views: 234
    },
    {
      id: 2,
      name: "John Doe",
      text: "Quisque volutpat mattis tempus urna, sit amet scelerisque egestas mus in. Integer sit amet magna a velit ullamcorper varius.",
      date: "28/05/2026",
      likes: 45,
      views: 512
    },
    {
      id: 3,
      name: "Anny Lee",
      text: "Phasellus finibus enim nec ante varius, eget facilisis diam convallis. Ut elementum tristique interdum nisl sed nisl.",
      date: "02/06/2026",
      likes: 8,
      views: 198
    }
  ];

   const updatesData = [
    {
      id: 1,
      image: "",  
      title: "Tips For Prepping And Caring For Your Grill",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi lacus, ipsum nulla elit scelerisque egestas mus in.",
      date: "16 Apr 2026"
    },
    {
      id: 2,
      image: "",  
      title: "Tips For Prepping And Caring For Your Grill",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi lacus, ipsum nulla elit scelerisque egestas mus in.",
      date: "16 Apr 2026"
    },
    {
      id: 3,
      image: "",  
      title: "Tips For Prepping And Caring For Your Grill",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi lacus, ipsum nulla elit scelerisque egestas mus in.",
      date: "16 Apr 2026"
    }
  ];

   const nextTestimony = () => {
    setTestimonyIndex((prev) => (prev + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setTestimonyIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };

  return (
    <div className="gericht-news-section">
      
       <section className="testimony-container">
        <div className="section-subtitle-wrapper">
          <span className="section-mini-title">Testimony</span>
          <div className="spoon-decorator"></div>
        </div>
        <h2 className="gericht-main-title">Happy Customers</h2>

        <div className="testimony-slider-wrapper">
          <div className="testimony-grid">
             {testimonies.map((item, idx) => (
              <div 
                key={item.id} 
                className={`testimony-card ${idx === testimonyIndex ? 'highlighted' : ''}`}
              >
                <h4 className="customer-name">{item.name}</h4>
                <p className="customer-review">"{item.text}"</p>
                <div className="testimony-card-meta">
                  <span>📅 {item.date}</span>
                  <span>❤️ {item.likes + idx * 5}</span> 
                  <span>👁️ {item.views + idx * 12}</span>
                </div>
              </div>
            ))}
          </div>

           <div className="slider-controls">
            <button className="slider-arrow prev" onClick={prevTestimony}>&lt;</button>
            <button className="slider-arrow next" onClick={nextTestimony}>&gt;</button>
          </div>
        </div>
      </section>

       <div className="center-divider-badge">
        <div className="circle-badge-inner">
          <span>MENU</span>
        </div>
      </div>

       <section className="updates-container">
        <div className="section-subtitle-wrapper">
          <span className="section-mini-title">News</span>
          <div className="spoon-decorator"></div>
        </div>
        <h2 className="gericht-main-title red-text">Gericht Updates</h2>

        <div className="updates-grid">
          {updatesData.map((post, index) => (
            <article className="update-card" key={post.id}>
              <div className="update-img-box">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="update-actual-img" />
                ) : (
                  <div className="update-img-placeholder">
                    <span>Rasm joyi (Rasm yo'lini kodga yozing)</span>
                  </div>
                )}
              </div>
              <div className="update-card-body">
                <h3 className="update-card-title">{post.title}</h3>
                <p className="update-card-desc">{post.desc}</p>
                <div className="update-card-footer">
                  <a href={`#story-${post.id}`} className="read-more-link">Read More</a>
                  <span className="update-date">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="view-more-action">
          <button className="gericht-view-more-btn">View More</button>
        </div>
      </section>

       <div className="restaurant-video-banner">
        <div className="video-play-overlay">
          <button className="play-circular-btn" aria-label="Play Video">
            <div className="play-triangle"></div>
          </button>
        </div>
      </div>

    </div>
  );
};

export default News;