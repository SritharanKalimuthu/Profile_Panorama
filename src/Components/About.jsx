import React from 'react';
import Lottie from 'lottie-react';
import '../stylesheets/about.css'

import phone from '../assets/phone2.json'


function About() {
  return (
    <div className='about flex flex-col items-center justify-center'>
        <h1 className='about__title text-5xl font-extrabold text-center mt-20'>Discover Our Purpose</h1>
        <p className='mt-4 text-2xl font-bold tracking-wide'>Connect & Share with Love</p>
        <div className='about__content flex items-center justify-center'>
            <div className="about__content-article1 m-14">
                <h2 className='text-center text-4xl font-extrabold'>Profile Panorama</h2>
                <p className='text-center my-4 text-xl font-bold tracking-wide'>Explore a diverse panorama of profiles from across the globe.</p>
                <ul className='ml-4 list-disc list-inside leading-8'>
                    <li>Immerse yourself in a world of fascinating profiles, ranging from artists to entrepreneurs.</li>
                    <li>Uncover hidden talents and inspiring journeys through engaging profiles.</li>
                    <li>Connect with individuals who share your interests, goals, and aspirations.</li>
                </ul>
            </div>
            <div className='about__content-animation w-2/5'>
                 <Lottie animationData={phone} speed={.5}/>
            </div>
            <div className="about__content-article2 m-14">
            <h2 className='text-center text-4xl font-extrabold'>Unveil Your Story</h2>
                <p className='text-center my-4 text-xl font-bold tracking-wide'> Your platform to unveil your unique story to the world.</p>
                <ul className='ml-4 list-disc list-inside leading-8'>
                    <li>Craft a captivating profile that showcases your personality, achievements, and passions.</li>
                    <li>Connect with individuals who resonate with your story and vision.</li>
                    <li>Empower others by sharing your successes, challenges, and lessons learned.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About
