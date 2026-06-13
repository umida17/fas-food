import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Navbar from './Campanents/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter> 
      <div>
        <Navbar />
       </div>
    </BrowserRouter>
  );
};

export default App;