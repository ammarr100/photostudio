import React, { useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

const [toggle, setToggle] = useState(false)

const openHam = <FiMenu onClick={()=>setToggle(!toggle)}/>
const closeHam = <CgClose onClick={()=>setToggle(!toggle)}/>



  return (
      <>
          <section className='navbar-desktop'>
            <div className='desktop-container container'>
            <div className='logo'>                
                <NavLink to="/">Logo</NavLink>
            </div>
                <div className='desktop-links'>
                  <Desktop/>
                </div>
            </div>
          </section>

          <section className='navbar-mobile'>
            <div className='mobile-container container'>

            <div className='ham-icon'>
              {
                toggle ? closeHam : openHam
              }
            </div>
                <div className='mobile-links'>
                  {
                    toggle && <Mobile/>
                  }
                </div>
            </div>
          </section>
      </>
  )
};

export default Navbar;
