import React from 'react';
import '../stylesheets/navbar.css'

function Navbar() {
  return (
      <nav className='nav absolute flex items-center justify-between z-10'>
          <h1 className='nav__title mr-20 uppercase text-4xl font-extrabold tracking-widest drop-shadow-2xl'>qviq</h1>
          <div className='nav__button flex capitalize text-sm'>
            <button className='mr-5'>login</button>
            <button>signup for free</button>
          </div>
        </nav>
  )
}

export default Navbar
