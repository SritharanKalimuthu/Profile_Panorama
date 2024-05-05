import React from 'react';
import Lottie from 'lottie-react';
import '../stylesheets/home.css';

// Import Lottie animations
import facebook from '../assets/facebook.json';
import instagram from '../assets/instagram.json';
import linkedin from '../assets/linkedin.json';
import twitch from '../assets/twitch.json';
import tiktok from '../assets/tiktok.json';
import twitter from '../assets/twitter.json';
import snapchat from '../assets/snapchat.json'
import groovywalk from "../assets/groovywalk.json";

function Home() {
  return (
    <div className="mount flex flex-col mt-24">
      {/* Social media icons */}
      <div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={twitter} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={instagram} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={tiktok} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={snapchat} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={linkedin} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={twitter} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={tiktok} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={twitch} loop={false} speed={.5}/>
        </div>
        <div className='mount__section1-stickers'>
          <Lottie animationData={facebook} loop={false} speed={.5}/>
        </div>
      </div>
      {/* Content */}
      <div className="mount__section1-content">
        <h1 className='mount__section1-title text-center font-extrabold'>Connect through stories, thrive through connections</h1>
        <p className='mount__section1-description text-center font-bold'>
          Join a vibrant community of individuals sharing their stories, experiences, and passions. 
          Discover unique profiles spanning various interests and backgrounds. 
          Share your own profile to showcase your talents, expertise, and experiences.
        </p>
        {/* Animation */}
        <div className='mount__section1-animation'>
          <Lottie animationData={groovywalk}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
