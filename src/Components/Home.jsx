import React, { useState,useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import '../stylesheets/home.css';

import facebook from '../assets/facebook.json';
import instagram from '../assets/instagram.json';
import linkedin from '../assets/linkedin.json';
import twitch from '../assets/twitch.json';
import tiktok from '../assets/tiktok.json';
import twitter from '../assets/twitter.json';
import groovywalk from "../assets/groovywalk.json";


function Home() {

  return (
      <div className="mount flex flex-col mt-24">
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
                      <Lottie animationData={instagram} loop={false} speed={.5}/>
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
              <h1 className='mount__section1-title text-center text-6xl font-extrabold'>Connect through stories, thrive through connections</h1>
              <p className='mount__section1-description text-center text-lg font-bold'>
              Join a vibrant community of individuals sharing their stories, experiences, and passions. 
              Discover unique profiles spanning various interests and backgrounds. 
              Share your own profile to showcase your talents, expertise, and experiences.</p>
              <div className='mount__button text-sm font-bold'>
                <button className='mount__section1-button mr-14'>About Us</button>
                <button className='mount__section1-button'>Know More</button>
              </div>
              <div className='mount__section1-animation'>
                    <Lottie animationData={groovywalk}  speed={.5}/>
              </div>
      </div>
  );
}

export default Home;