import React, { useState } from 'react';
import Style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';




function LoginPage() {
  
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate()

  function handleEmailChange(event) {
    setUserEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.email === email && user.password === password && user.subscriptionData.isActive === false );
    // const isActiveStatus = storedUsers.find(user => user.isActive.login === false)
    
    if (existingUser) {
      const confirmation = window.confirm('Login successfully! Click OK to go to Home page.');
      if (confirmation) {
        existingUser.subscriptionData.isActive = true;
        localStorage.setItem('users', JSON.stringify(storedUsers))
        localStorage.setItem('logged', true)
        navigate('/');
      }
    } else {
      setLoginError('Email or Password is incorrect');
    }
  }

  return (
    <div className={Style.container}>
      
    <div className={Style.form}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={Style.data}>
        <div className={Style.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required={true}
          />
        </div>
        <div className={Style.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required={true}
          />
        </div>
        {loginError && <span>{loginError}</span>}
        <button type="submit" className={Style.loginButton}>
          Login
        </button>
        <p className={Style.linkText}>
          Don't have an account?{' '}
          <Link to="/registration" className={Style.registrationLink}>
            Register here
          </Link>
          .
        </p>
      </form>
    </div>
  </div>
);
}

export default LoginPage;
