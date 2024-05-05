import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

import Home from './Home';
import Testimonials from './Testimonals';
import About from './About';
import Support from './Support';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Index() {
  useEffect(() => {
    // Initialize Smooth Scrollbar
    const scrollBar = Scrollbar.init(document.querySelector('.main'), {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });

    // Set ScrollTrigger defaults
    ScrollTrigger.defaults({
      scroller: '.main',
    });

    // Create ScrollTrigger scroller proxy
    ScrollTrigger.scrollerProxy('.main', {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    // Update ScrollTrigger on scrollbar scroll
    scrollBar.addListener(ScrollTrigger.update);

    // Iterate over sections to change background and text color
    const sectionColor = document.querySelectorAll('[data-bgcolor]');
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor = i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

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

    // Cleanup function
    return () => {};
  }, []); // Run effect only once

  return (
    <>
      <main className='main h-screen max-w-screen flex flex-col overflow-auto'>
        {/* Sections */}
        <section className='mount__section1 min-h-screen w-screen' data-bgcolor="#ccc8c8" data-textcolor="#ffffff">
          <Home/>
        </section>
        <section className='mount__section2 min-h-screen w-screen' data-bgcolor="#B8CEDC" data-textcolor="#d0b6c0">
          <About/>
        </section>
        <section className='mount__section3 min-h-screen w-screen' data-bgcolor="#eca678c7" data-textcolor="#c2c1b3">
          <Testimonials/>
        </section>
        <section className='mount__section4 min-h-screen w-screen' data-bgcolor="#c3b2e7" data-textcolor="#ffffff">
          <Support/>
        </section>
      </main>
    </>
  );
}

export default Index;
