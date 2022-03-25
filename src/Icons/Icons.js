import React from 'react';
import './Icons.css'
import {FaRing} from 'react-icons/fa'
import {GiCakeSlice, GiDoorRingHandle} from 'react-icons/gi'
import {MdCorporateFare, MdFamilyRestroom} from 'react-icons/md'
import {ImFilePicture} from 'react-icons/im'
import {FaChild} from 'react-icons/fa'
import {CgTrees} from 'react-icons/cg'
import girl1 from '../Icons/girl1.jpeg'
import girl2 from '../Icons/girl2.jpeg'
import './Icons.css'



const Icons = () => {
  return (
      <>
      <section className='icons'>
        <div className='icons-container container'>
            <div className='icons-text'>
            <div className='icon-flex'>
            <div className='icon-name'>            
                <FaRing />
                <h1>Wedding</h1>
            </div>
                <div className='icon-name'>
                <GiDoorRingHandle />
                <h1>Engagement</h1>
                </div>
                <div className='icon-name'>
                <GiCakeSlice />
                <h1>Sweets</h1>
                </div>
                <div className='icon-name'>
                <MdFamilyRestroom />
                <h1>Family</h1>
                </div>
                <div className='icon-name'>
                <MdCorporateFare />
                <h1>Corporate</h1>
                </div>
                <div className='icon-name'>
                <ImFilePicture />
                <h1>Portraits</h1>
                </div>
                <div className='icon-name'>
                <FaChild />
                <h1>Child</h1>
                </div>
                <div className='icon-name'>
                <CgTrees />
                <h1>Nature</h1>               
                
                </div>
            </div>
            
                
                
            </div>
            <section className='icons-image'>
                <div className='icon-image01'>
                    <img src={girl1} alt="" />
                </div>
                <div className='icon-image02'>
                    <img src={girl2} alt="" />
                </div>
            </section>
        </div>
      </section>
          
      </>
  )
};

export default Icons;
