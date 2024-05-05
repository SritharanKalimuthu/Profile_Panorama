import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function SignUpForm() {
  // State to manage form inputs
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  // Function to handle input changes
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  // Function to handle form submission
  const handleOnSubmit = evt => {
    evt.preventDefault();

    // Extract name, email, and password from state
    const { name, email, password } = state;

    // Display alert with signup information
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    // Clear form inputs after submission
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        {/* Title */}
        <h1 className="signup__title text-4xl font-bold mb-2">Create Account</h1>
        {/* Social login options */}
        <div className="social-container">
          <a href="#" className="social">
            <FontAwesomeIcon icon={faFacebook} className="form__icons" />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faGoogle} className="form__icons" />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faLinkedin} className="form__icons" />
          </a>
        </div>
        {/* Signup message */}
        <span className="text-lg font-semibold mb-4">or use your email for registration</span>
        {/* Name input */}
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="py-3 px-4 bg-slate-300 w-full mb-2"
        />
        {/* Email input */}
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="py-3 px-4 bg-slate-300 w-full mb-2"
        />
        {/* Password input */}
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="py-3 px-4 bg-slate-300 w-full mb-2"
        />
        {/* Sign Up button */}
        <button className="ghost py-2 px-4 bg-blue-700 mt-4 rounded-3xl text-slate-50">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
