import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Navbar from './Campanents/Navbar/Navbar';
import Menu from './Campanents/Menu/Menu';
import Footer from './Campanents/Footer/Footer';
import News from './Campanents/News/News';  

const About = () => <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '50vh', color: '#b7202e' }}><h2>About Us</h2><p>Learn more about our culinary history.</p></div>;
const Contact = () => <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '50vh', color: '#b7202e' }}><h2>Contact Us</h2><p>Get in touch with Eat Turkish.</p></div>;
const Login = () => <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '50vh', color: '#b7202e' }}><h2>Login Page</h2><p>Access your account here.</p></div>;

const App = () => {
  return (
    <BrowserRouter> 
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/menu" />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/news" element={<News />} />  
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;