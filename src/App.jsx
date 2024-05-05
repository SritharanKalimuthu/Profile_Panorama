import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css'

import Form from './Components/Form'
import Index from './Components/Index';

function App() {
  return (
    <>
      {/* Wrap the entire application with BrowserRouter */}
      <BrowserRouter>
        <Routes>
          {/* Define routes for Index and Form components */}
          <Route index element={<Index />} />
          <Route path="signup" element={<Form />} />
        </Routes>

        {/* Navigation bar */}
        <nav className='nav absolute flex items-center justify-between z-10'>
          {/* Title */}
          <h1 className='nav__title capitalize font-extrabold tracking-wide drop-shadow-2xl'>compass</h1>
          
          {/* Navigation buttons */}
          <div className='nav__button flex capitalize text-sm'>
            {/* Home button */}
            <NavLink to='/'><button className='nav__btn nav__btn-home  mr-5'>Home</button></NavLink>
            
            {/* Signup button */}
            <NavLink to='signup'><button className='nav__btn bg-orange-500'>Signup</button></NavLink>
          </div>
        </nav>
      </BrowserRouter>
    </>
  )
}

export default App;
