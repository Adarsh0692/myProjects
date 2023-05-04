import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Style from './Registration.module.css'
import Swal from 'sweetalert2'
import Alert from '@mui/material/Alert';



function RegistrationPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [EM, setEM] = useState('');
  const [PW, setPW] = useState('');
  const [UN, setUN] = useState('');
  const [CPW, setCPW] = useState('')

  function validateUsername(username) {
    const regex = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    if (regex.test(username)) {
      return ""
    }
    return "Username must contain only alphabets";
  }  

  function handleUsernameChange(event) {
    setUsername(event.target.value)
    setUN(() =>validateUsername(event.target.value))
  }

  function validateEmail(email){
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
     if(!regex.test(email)){
       return "Invalid email"
     }
     return "";
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEM(() =>validateEmail(event.target.value))
  }

  function validatePassword(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(!regex.test(password)){
       return "Password must be min one Capital letter,min one digit & min 6 letter"
    }
      return ""
    
    
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPW(() =>validatePassword(event.target.value))
  }

  function validateConfirmPassword(confirmPassword,password){
    if(confirmPassword !== password){
      return "Password is not matching"
    }
    return ""
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    setCPW(validateConfirmPassword((event.target.value),password))
  }

  function handleRegistration(event) {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.username === username || user.email === email);

    if (existingUser) {
      setRegistrationError('Username or email already exists');
      return;
    }else{
      setRegistrationError("")
    }


    const newUser = {
       username, email, password,
      subscriptionData: {
        isSubscribed: false,
        subscriptionPlan: '',
        isActive: false,
      }
    };

    const updatedUsers = [...storedUsers, newUser];
    
    if (EM === "Invalid email" || PW === "Password must be min one Capital letter,min one digit & min 6 letter" || UN ==="Username must contain only alphabets" || CPW==="Password is not matching" || registrationError) {
      Swal.fire(
        'Oops!',
        "Something wasn't right."
      )
      
    } else {

      const confirmation = Swal.fire(
        'Congratulations',
        'You are successfully registered.'
      )
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
      

      <div className={Style.RegistrationPage}>
        <form onSubmit={handleRegistration} className={Style.data}>
          <h1>Register </h1>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required="true"/><br /><p>
            {UN && <Alert severity="error">{UN}</Alert>}
          </p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required="true" /><br /><p>{EM && <Alert severity="error">{EM}</Alert>}</p>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}  /><br /> <p>{PW && <Alert severity="error">{PW}</Alert>}</p>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required="true" /><br /><p>{CPW && <Alert severity="error">{CPW}</Alert>}</p>
          {registrationError && <p><Alert severity="error">{registrationError}</Alert></p>}

          <button type="submit">Register</button>
          < span>Have already an account? <Link to="/login">Login here</Link>.</span>

        </form>

      </div>
    </div>
  );
}

export default RegistrationPage;
