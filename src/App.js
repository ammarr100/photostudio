import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './Home';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductsPage from './Pages/ProductsPage';
import ServicesPage from './Pages/ServicesPage';



const App = () => {
  return (
      <>

      <Routes>
      <Route exact path = '/' element = {<Home/>} ></Route>
      <Route exact path = '/products' element = {<ProductsPage/>} ></Route>
      <Route exact path = '/services' element = {<ServicesPage/>} ></Route>
      <Route exact path = '/about' element = {<AboutPage/>} ></Route>
      <Route exact path = '/contact' element = {<ContactPage/>} ></Route>    
      <Route exact path = '*' element = {<Home/>} ></Route>   
      </Routes>
      </>
  )
};

export default App;

