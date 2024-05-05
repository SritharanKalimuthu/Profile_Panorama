import React, { useState } from "react";
import Lottie from 'lottie-react';
import "../stylesheets/form.css";
import SignInForm from "./Signin";
import SignUpForm from "./Signup";

import person from '../assets/person.json';

export default function Form() {
  // State to manage the type of form (signIn or signUp)
  const [type, setType] = useState("signIn");

  // Function to handle click events on sign-in or sign-up buttons
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
    }
  };

  // Dynamically set container class based on form type
  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="form min-h-screen flex flex-col items-center justify-center bg-slate-300">
      {/* Form submission title */}
      <h2 className="form__title text-5xl font-extrabold mt-24 mb-4 capitalize">Form submission</h2>
      {/* Form container */}
      <div className={`${containerClass} mb-8`} id="container">
        {/* Sign-up form */}
        <SignUpForm />
        {/* Sign-in form */}
        <SignInForm />
        {/* Overlay container */}
        <div className="overlay-container">
          <div className="overlay">
            {/* Left overlay panel (Sign in) */}
            <div className="overlay-panel overlay-left">
              {/* Animation */}
              <div className='form__stickers'>
                <Lottie animationData={person} speed={.5}/>
              </div>
              {/* Title and text */}
              <h1 className="overlay-title text-4xl font-bold mb-4">Welcome Back!</h1>
              <p className="overlay-text text-lg">
                To keep connected with us please login with your personal info
              </p>
              {/* Sign in button */}
              <button
                className="ghost font-bold py-2 px-4 bg-red-700 mt-4 rounded-3xl"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            {/* Right overlay panel (Sign up) */}
            <div className="overlay-panel overlay-right">
              {/* Animation */}
              <div className='form__stickers'>
                <Lottie animationData={person} speed={.5}/>
              </div>
              {/* Title and text */}
              <h1 className="overlay-title text-4xl font-bold mb-4">Hello, Friend!</h1>
              <p className="overlay-text text-lg">Enter your personal details and start journey with us</p>
              {/* Sign up button */}
              <button
                className="ghost font-bold py-2 px-4 bg-blue-700 mt-4 rounded-3xl"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
