import React from 'react';
import './Header.css'
import header01 from './header01.jpeg'
import header02 from './header02.jpeg'

const Header = () => {
  return (
      <>
<section className='header'>
<div className='header-container container'>
  <div className='header-textbox'>
  <h2>YOUR GUESTS WILL<br />LOOK STUNNING!</h2>
  
  <h1>Photo Studio</h1>
  <p>He is blessed to have photography as a career. He really enjoys being appreciated by his clients and the most common compliment he gets is that he is patient and professional.</p>
  </div>
  <div className='header-imagebox'>
  
  <div className='box-wrapper'>
  <div className='imagebox1'>
    <img src={header01} alt="" />
    </div>
    <div className='imagebox2'>
    <img src={header02} alt="" />
  
  </div>
  </div>
  
  </div>
    
  
  </div>   

</section>

      </>
  )
};

export default Header;
