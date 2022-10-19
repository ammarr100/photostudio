import React from 'react';
import './Contact.css'
import contact from '../Contact/contact.png'
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
      <>
          <section className='contact'>
            <div className='contact-container container'>
                <div className='contact-text' data-aos="flip-left">
                <h1>Contact Us</h1>
                <h2>+61 0420883693<br />
                contact@ammar.tech</h2>
                <p>
                Thank you for your interest in Turner Photography Studio. We would love to hear from you!Our hours of operation are <span>Tuesday - Friday 10am to 6pm,</span> appointments preferred. Please fill out the contact form below and you will hear from us shortly!</p>
                </div>
                <div className='contact-image' data-aos="zoom-in">
                <img src={contact} alt="" />
                </div>
                <div className='contact-input' data-aos="flip-right">
                <input className='input-area' type="text" placeholder='Enter your Name' />
                <input className='input-area' type="email" placeholder='Enter a Valid Email Address' />
                <textarea className='input-area' name="" id="" cols="30" rows="10" placeholder='Enter your Message'></textarea>
                <button className='btn-contact'><NavLink to="/contact">Submit</NavLink></button>
                </div>
            </div>
          </section>
      </>
  )
};

export default Contact;
