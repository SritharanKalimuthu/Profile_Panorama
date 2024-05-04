import React, { useState,useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import Lottie from 'lottie-react';
import '../stylesheets/home.css'
import Testimonals from './Testimonals';

import facebook from '../assets/facebook.json';
import instagram from '../assets/instagram.json';
import linkedin from '../assets/linkedin.json';
import twitch from '../assets/twitch.json';
import tiktok from '../assets/tiktok.json';
import twitter from '../assets/twitter.json';
import groovywalk from "../assets/groovywalk.json";
import About from './About';

gsap.registerPlugin(ScrollTrigger);

function Home() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleParallax = (e) => {
      const movingValue = parseInt(e.target.getAttribute('data-value'), 10);
      const newX = (e.clientX - movingValue) / 250;
      const newY = (e.clientY - movingValue) / 250;
      setX(newX);
      setY(newY);
    };

    document.addEventListener('mousemove', handleParallax);

    return () => {
      document.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  const lottieRef = useRef();
  
  
  useEffect(() => {
    const scrollBar = Scrollbar.init(document.querySelector('.main'), {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });
    ScrollTrigger.defaults({
      scroller: '.main',
    });
    ScrollTrigger.scrollerProxy('.main', {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const sectionColor = document.querySelectorAll('[data-bgcolor]');
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor =
        i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: '.main',
        start: 'top 50%',
        onEnter: () =>
          gsap.to('.main', {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: 'auto',
          }),
        onLeaveBack: () =>
          gsap.to('.main', {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: 'auto',
          }),
      });
    });

    return () => {};
  }, []);

  return (
    <>
      <div className="mount">
        <nav className='mount__nav absolute flex items-center justify-between  z-10'>
          <h1 className='mount__nav-title mr-20 uppercase text-4xl font-extrabold tracking-widest drop-shadow-2xl'>qviq</h1>
          <div className='mount__nav-button flex capitalize text-sm'>
            <button className='mr-5'>login</button>
            <button>signup for free</button>
          </div>
        </nav>
        <main className='main h-screen max-w-screen flex flex-col overflow-auto'>
          <section className='mount__section1 min-h-screen w-screen flex flex-col items-center justify-center'  data-bgcolor="#d6d6d6" data-textcolor="#ffffff">
            <div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={twitter} loop={false} speed={.5}/>
                  </div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={instagram} loop={false} speed={.5}/>
                  </div>
                  
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={tiktok} loop={false} speed={.5}/>
                  </div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={instagram} loop={false} speed={.5}/>
                  </div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={linkedin} loop={false} speed={.5}/>
                  </div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={twitter} loop={false} speed={.5}/>
                  </div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={tiktok} loop={false} speed={.5}/>
                  </div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={twitch} loop={false} speed={.5}/>
                  </div>
                  <div className='mount__section1-stickers'>
                      <Lottie lottieRef={lottieRef} animationData={facebook} loop={false} speed={.5}/>
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
                  <Lottie lottieRef={lottieRef} animationData={groovywalk}  speed={.5}/>
            </div>
          </section>
          <section className='mount__section2 min-h-screen w-screen' data-bgcolor="#B8CEDC" data-textcolor="#d0b6c0">
           <About/>
          </section>
          <section className='mount__section3 min-h-screen w-screen' data-bgcolor="#eca678c7" data-textcolor="#c2c1b3">
            <Testimonals/>
          </section>
          <section className='mount__section4 min-h-screen w-screen' data-bgcolor="#c3b2e7" data-textcolor="#ffffff">

          </section>
        </main>
      </div>
    </>
  );
}

export default Home;