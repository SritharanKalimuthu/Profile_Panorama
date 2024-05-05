import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function SignInForm() {
  // State to manage form inputs
  const [state, setState] = React.useState({
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

    // Extract email and password from state
    const { email, password } = state;

    // Display alert with login information
    alert(`You are login with email: ${email} and password: ${password}`);

    // Clear form inputs after submission
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="text-4xl font-bold mb-2">Sign in</h1>
        {/* Social login options */}
        <div className="social-container">
          <a href="#" className="social">
            <FontAwesomeIcon icon={faFacebook} className="form__icons"  />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faGoogle} className="form__icons"  />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faLinkedin} className="form__icons"  />
          </a>
        </div>
        <span className="text-lg font-semibold mb-4">or use your account</span>
        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="py-3 px-4 mb-4 bg-slate-300 w-full my-4"
        />
        {/* Password input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="py-3 px-4 mb-4 bg-slate-300 w-full"
        />
        {/* Forgot password link */}
        <a href="#" className="font-semibold">Forgot your password?</a>
        {/* Sign In button */}
        <button className="ghost py-2 px-4 bg-red-700 mt-4 rounded-3xl text-slate-50">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
