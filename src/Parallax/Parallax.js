import React from 'react';
import './Parallax.css'
import olivia from '../Parallax/olivia.png'


const Parallax = () => {
  return (<>
      <section className='parallax'>
        <div className='parallax-container'>
            <div className='parallax-image1'>
            
            <div className='parallax-image2' data-aos="zoom-in">
            <img src={olivia} alt="" />
            </div>
            </div>
        </div>
      </section>
  </>)
};

export default Parallax;
