import React, { useState } from 'react';
import './SignIn.scss';

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login">
      <main className="login__form">
        <form className="login__form--input">
          <h1>SIGN IN</h1>
          <input type="text" required placeholder="Username" id="user" autoComplete="off" />
          <input
            type={passwordShown ? "text" : "password"}
            required
            placeholder="Password"
            id="pass"
            autoComplete="off"
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
            onClick={togglePasswordVisibility}
            id="showimg"
            alt="Show/Hide"
          />
          <span id="vaild-pass"></span>
          <button type="submit">SIGN IN</button>
          <p className="login__form--input-forgot"><a href="#">Forgot your password?</a></p>
          <p className="login__form--input-signup"><a href="#">Don't have an account? Sign Up</a></p>

        </form>
      </main>
    </div>
  );
};

export default SignIn;
