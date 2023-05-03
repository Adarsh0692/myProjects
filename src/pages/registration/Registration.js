import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Style from './Registration.module.css'



function RegistrationPage() {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [EM, setEM] = useState('');
  const [PW, setPW] = useState('');


  function handleUsernameChange(event) {
    setUsername(event.target.value);

  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regEmail.test(email)) {
      setEM('');
    } else if (!regEmail.test(email) && email !== "") {
      setEM("Email is Not Valid");
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (pwRegEx.test(password)) {
      setPW('');
    } else if (!pwRegEx.test(password) && password !== " ") {
      setPW("Password must be min one Capital letter,min one digit & min 6 letter");

    } else {
      setPW('');
    }
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleRegistration(event) {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.username === username || user.email === email);

    if (existingUser) {
      setRegistrationError('Username or email already exists');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match');
      return;
    }

    const newUser = {
       username, email, password,
      // isActive: {
      //   login: false
      // },
      subscriptionData: {
        isSubscribed: false,
        subscriptionPlan: '',
        isActive: false,
      }
    };

    const updatedUsers = [...storedUsers, newUser];
    //  const inputData = {
    //   ...(username && {username}),
    //   ...(email && {email}),
    //   ...(password && {password}),
    //   subscriptionData: {
    //     isSubscribed: false,
    //     subscriptionPlan: ''
    //   }
    //  }
    //  const updatedUsers = [...storedUsers, inputData];
    //  const noOfInputData = Object.keys(inputData).length
    //  console.log(noOfInputData);

    // localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Redirect to home page 
    if (EM === "Email is Not Valid" || PW === "password is Not Valid") {
      alert("you have enter wrong details")
    } else {

      const confirmation = window.confirm('Registration successfully Done! Click OK to go to Login page.');
      if (confirmation) {
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        navigate('/login');
      }
    }

  }

  return (
    <div className={Style.main_div}>
      {/* <div className={Style.leftDiv}>
        <img src='https://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-01-1600-x-843.jpg' alt='wallpaper' />
      </div> */}

      <div className={Style.RegistrationPage}>


        <form onSubmit={handleRegistration} className={Style.data}>
          <h1>Register </h1>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required="true" /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required="true" /><br /> <p>{EM}</p>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required="true" /><br /> <p>{PW}</p>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required="true" /><br />
          {registrationError && <p>{registrationError}</p>}

          <button type="submit">Register</button>
          < span>Have already an account? <Link to="/login">Login here</Link>.</span>

        </form>

      </div>
    </div>
  );
}

export default RegistrationPage;
