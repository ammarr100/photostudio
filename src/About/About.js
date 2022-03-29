import React from 'react';
import './About.css'
import about from '../About/about.png'

const About = () => {
  return (
      <>
          <section className='about'>
                <div className='about-container container'>
                    <div className='about-text1'>
                        <h1>About the Company</h1>
                            <h2>Jamie and Jason Turner</h2>
                            <p>Award Winning Wedding, Portrait and Commerical Photographers. Jamie has been awarded Maryland's Wedding Photographer of the Year in 2013 and Maryland Portrait Photographer of the Year in 2013.</p>
                    </div>
<section className='imageText'>
<div className='about-image' data-aos="flip-right">
<img src={about} alt="" />
</div>
<div className='about-text2' data-aos="zoom-in">
<p className='spacing'>We are not only twin brothers, we are story tellers. We are photographic artists with our own distinct approach to photography; our own unique style of creating your portrait; our own personal way of capturing, memorializing and preserving your wedding or special event in a manner that you can appreciate. <br />
</p>
<p className='spacing'>
Combining Jamie’s background in boutique wedding photography with Jason’s experience as a creative photojournalist for newspapers and magazines around the world, we greet your wedding and portrait experience with the same artistic vision that has earned us many awards and accolades. <br />
</p>
<p className='spacing'>
Our style is professional but informal and has been perfected with a chic but contemporary look. We strive to make your photographic session fun so you can be yourself and enjoy the experience. Ultimately, our goal is to craft vibrant, energetic images that are as unique as the people in them, you.</p>
</div>
</section>
                </div>
          </section>
      </>
  )
};

export default About;
