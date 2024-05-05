import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../stylesheets/support.css';

function Support() {
  return (
    <div id="Support">
      {/* Support title */}
      <h1 className='support__title text-center text-5xl font-extrabold capitalize pt-28 mb-1'>Get in touch</h1>
      
      {/* Support section */}
      <div className='support'>
        <div className="support__grid">
          {/* Grid item 1: About */}
          <div className="support__grid-1 p-9 rounded-lg">
            <h1 className=' font-black capitalize leading-tight'>Every profile tells a story.</h1>
            <p className='text-xl mt-4 font-bold'>@compass</p>
            <p className='mt-3'>© 2024 All Rights Reserved</p>
          </div>

          {/* Grid item 2: Support */}
          <div className="support__grid-2 p-5 px-8 rounded-lg">
            <h2 className='text-2xl font-bold mb-6'>Support</h2>
            <p className='mb-4'>Have questions? Get in touch or check out our Help Center.</p>
            <p className=''>You can also text our support team at <a href='telto:(000) 0help@mail.com00-0000' className='underline underline-offset-1'>(000) 000-0000</a> or email us at <a href='mailto:help@gmail.com' className='underline underline-offset-1'>help@mail.com</a></p>
          </div>

          {/* Grid item 3: Social */}
          <div className="support__grid-3 p-8 rounded-lg">
            <h2 className='text-2xl font-bold text-center mb-6'>social</h2>
            <div className='flex items-center '>
              {/* Social icons */}
              <FontAwesomeIcon icon={faFacebook} className='support__grid-icons' />
              <FontAwesomeIcon icon={faInstagram} className='support__grid-icons' />
              <FontAwesomeIcon icon={faTwitter} className='support__grid-icons' />
              <FontAwesomeIcon icon={faYoutube} className='support__grid-icons' />
            </div>
          </div>

          {/* Grid item 4: Terms of Use and Privacy Policy */}
          <div className="support__grid-4 p-8 rounded-lg flex justify-between">
            <p className='underline underline-offset-1 cursor-pointer'>Terms of use</p>
            <p className='underline underline-offset-1 cursor-pointer'>privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support;
