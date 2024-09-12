import React from 'react';


import Home from './pages/Home';
import User from './pages/User';
import About from './pages/About';
import Navbar from './components/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';



function App() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
  
       
      </Routes>
    </BrowserRouter>
    )
  }
  
  export default App