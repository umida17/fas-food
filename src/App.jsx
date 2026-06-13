import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Navbar from './Campanents/Navbar/Navbar';
import Menu from './Campanents/Menu/Menu';
import Footer from './Campanents/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter> 
      <div>
        <Navbar />
        <Menu/>
        <Footer/>
       </div>
    </BrowserRouter>
  );
};

export default App;