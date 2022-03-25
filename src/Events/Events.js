import React from 'react';
import './Events.css'
import EImage from '../Events/eventImage.png'
const Events = () => {
  return (
      <>
          <section className='events'>
                <div className='events-container container'>
                    <div className='events-image'>
                        <img src={EImage} alt="" />
                    </div>
                    <div className='events-text'>
                        <h1>An Elevated Photo Experience For Events</h1>
                        <h2>SEE HOW IT WORK</h2>
<p className='event-para'>Jamal was our lead photographer and we also had a second photographer and a videographer. As soon as we met Jamal, we immediately felt comfortable with him. He took our engagement pictures, and by the outcome of those, we truly could not wait to see how our actual wedding pictures would come out! Jamal and his crew were extremely professional, fun, and energetic.</p> 
<p className='event-para'>
They stayed the ENTIRE night and worked very hard up until the end of our wedding to get as many photos as they could to capture the true essence of our wedding day. We highly recommend JF Photography and we know that if we need professional photography in the future, we would look no further than Jamal and his crew at JF Photography.</p>

                    </div>
                </div>
          </section>
      </>
  )
};

export default Events;
