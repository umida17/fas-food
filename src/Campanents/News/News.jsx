import React from 'react';
import './News.css';

const News = () => {
   const newsData = [
    {
      id: 1,
      image: '/src/assets/news-1.png',
      title: 'Tips For Prepping And Caring For Your Grill',
      date: '16 Apr 2026',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi lacus, ipsum nulla elit scelerisque egestas mus in.'
    },
    {
      id: 2,
      image: '/src/assets/news-2.png',
      title: 'The Secrets Behind Creating Our Famous Eat Turkish Sauce',
      date: '12 May 2026',
      desc: 'Aliquam erat volutpat. Integer sit amet magna a velit ullamcorper varius vel id tortors. Duis pretium sodales dictum.'
    },
    {
      id: 3,
      image: '/src/assets/news-3.png',
      title: 'Why Traditional Charcoal Gives The Best Kebab Flavor',
      date: '28 May 2026',
      desc: 'Phasellus finibus enim nec ante varius, eget facilisis diam convallis. Ut elementum tristique interdum nisl sed nisl.'
    },
    {
      id: 4,
      image: '/src/assets/news-4.png',
      title: '5 Healthy Mediterranean Side Dishes You Must Try',
      date: '02 Jun 2026',
      desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras ac ante sit amet diam.'
    },
    {
      id: 5,
      image: '/src/assets/news-5.png',
      title: 'How To Perfect Your Homemade Shish Kebab Cooking Time',
      date: '10 Jun 2026',
      desc: 'Curabitur imperdiet, diam non finibus gravida, diam ligula efficitur magna, ut hendrerit magna erat sit amet massa.'
    },
    {
      id: 6,
      image: '/src/assets/news-6.png',
      title: 'Our Restaurant Just Expanded Its Outdoor Grill Area',
      date: '14 Jun 2026',
      desc: 'Sed auctor, magna a sodales interdum, ante nulla varius lectus, id venenatis ligula erat rhoncus ex. Proin feugiat.'
    }
  ];

  return (
    <div className="news-page-wrapper">
       <div className="news-hero-banner">
        <div className="news-hero-overlay">
          <span className="news-subtitle">Latest Updates</span>
          <h1 className="news-page-title">Gericht Updates & Stories</h1>
        </div>
      </div>

       <div className="container news-page-container">
        <div className="news-main-grid">
          {newsData.map((blog) => (
            <article className="news-page-card" key={blog.id}>
              <div className="news-page-img-holder">
                <img src={blog.image} alt={blog.title} className="news-page-img" />
                <span className="news-page-badge">Eat Turkish</span>
              </div>
              <div className="news-page-body">
                <div className="news-page-meta">
                  <span className="news-page-date">📅 {blog.date}</span>
                  <span className="news-page-author">✍️ By Admin</span>
                </div>
                <h3 className="news-page-card-title">{blog.title}</h3>
                <p className="news-page-desc">{blog.desc}</p>
                <div className="news-page-footer">
                  <a href={`#readmore-${blog.id}`} className="news-readmore-btn">
                    Read Story <span className="arrow-icon">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

         <div className="news-pagination">
          <button className="page-nav-btn disabled">&lt;</button>
          <button className="page-nav-btn active">1</button>
          <button className="page-nav-btn">2</button>
          <button className="page-nav-btn">3</button>
          <button className="page-nav-btn">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default News;