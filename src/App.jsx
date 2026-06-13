import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Navbar from './Campanents/Navbar/Navbar';
import Menu from './Campanents/Menu/Menu';

const App = () => {
  return (
    <BrowserRouter> 
      <div>
        <Navbar />
        <Menu/>
       </div>
    </BrowserRouter>
  );
};

export default App;