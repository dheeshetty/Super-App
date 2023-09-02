import React from 'react';
import {Route,Routes,} from 'react-router-dom';
import Home from './pages/Home'; // Update the import statement
import Genre from './pages/Genre';
import Browse from './pages/Browse';
import Movies from './pages/Movies';


const App = () => {
  return (
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/category" element={<Genre/>} />
      <Route path="/browse" element={<Browse/>} />
      <Route path="/movies" element={<Movies/>} />
     
      
      
    
  </Routes>
  );
};

export default App;
