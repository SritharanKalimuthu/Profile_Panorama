import React, { useState,useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import './App.css'
import Home from './Components/Home';
import Testimonals from './Components/Testimonals';
import About from './Components/About';
import Support from './Components/Support';
import Navbar from './Components/Navbar';

gsap.registerPlugin(ScrollTrigger);

function App() {

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
      <Navbar/>
      <main className='main h-screen max-w-screen flex flex-col overflow-auto'>
          <section className='mount__section1 min-h-screen w-screen' data-bgcolor="#d6d6d6" data-textcolor="#ffffff">
            <Home/>
          </section>
          <section className='mount__section2 min-h-screen w-screen' data-bgcolor="#B8CEDC" data-textcolor="#d0b6c0">
           <About/>
          </section>
          <section className='mount__section3 min-h-screen w-screen' data-bgcolor="#eca678c7" data-textcolor="#c2c1b3">
            <Testimonals/>
          </section>
          <section className='mount__section4 min-h-screen w-screen' data-bgcolor="#c3b2e7" data-textcolor="#ffffff">
            <Support/>
          </section>
        </main>
    </>
  )
}

export default App
