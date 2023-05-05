import React, { useState } from 'react';

import {Link, useNavigate } from 'react-router-dom';
import style from './Registration.module.css'
// import Button from ?'@mui/material/Button';
import { TextField, Button } from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
import {FcGoogle} from 'react-icons/fc'
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import data from '../../data/userFake_DATA .json'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';



export default function Registration() {
 
  const [hide, setHide] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [registrationError, setRegistrationError] = useState('');
  

  const [EM, setEM] = useState(false);
  const [PW, setPW] = useState(false);
  const [Ph, setPh] = useState(false);

  const navigate = useNavigate()

  function handleName(e){
    setName(e.target.value)
    
  }

  function handlePhone(event) {
    setPhone(event.target.value);
    if (phone.length !== 9) {
      setPh(true)

    } else{
      setPh('')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regEmail.test(email)) {
      setEM('');
    } else if (!regEmail.test(email) && email !== "") {
      setEM(true);
    }
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (pwRegEx.test(password)) {
      setPW('');
    } else if (!pwRegEx.test(password) && password !== " ") {
      setPW(true);

    } else {
      setPW('');
    }
  }

  function handleSignup() {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || []

    const existingUser = storeduser.find((user) => user.name === name || user.email === email || user.phone === phone)

    if (existingUser) {
      setRegistrationError('Username or email already exists');
      return;
    }
  //   const generateUserImage = async () => {
  //     const response = await axios.get("https://randomuser.me/api/");
  //     const imageUrl = response.data.results[0].picture.large;
  //     return imageUrl
  // }


    const userData = {
      name, email, password, phone, 
      active: {
        isActive: false
      },
      // data,

    }
    const updatedUser = [...storeduser, userData]



    if (name && phone && email && password) {

      if (EM === "Email is Not Valid" || PW === "Password must be min one Capital letter,min one digit & min 6 letter" || Ph === "phone number must be 10 digit") {
        alert('you have enter wrong details')
      } else {
      const confirmation = window.confirm(`Dear ${name} Registration successfully Done! Click OK to go to Login page.`);
        if (confirmation) {
          localStorage.setItem('userData', JSON.stringify(updatedUser))
          localStorage.setItem('data', JSON.stringify(data))
          navigate('/login')
        }

      }
    } else {
      alert('All fields are mandatory')
    }


  }
  return (
    <div className={style.main_div}>
      <div className={style.form_box}>

      <div className={style.header}>
              <div className={style.cross}>
                <p> <CloseIcon onClick={() => navigate(-1)} /> </p>
              </div>
              <div className={style.logo}>

                <span><TwitterIcon sx={{
                  color: ' rgb(29, 155, 240)',
                  fontSize: '40px'
                }} /> </span>
              </div>
              </div>

        <div className={style.form_data}>
          <div className={style.form_buttons} >

         

            <div className={style.create_field} style={{ display: hide ? 'none' : '' }}>
              {/* <div>
                <TwitterIcon sx={{color: ' rgb(29, 155, 240)',
                     fontSize: '40px'}}/>
              </div> */}

               

              <div >
                <h1>Join Twitter today</h1>
              </div>

              <Button sx={{ borderRadius: '40px', color: 'black' }} variant="outlined"> <FcGoogle size={20}/> Sign Up with Google</Button>
              <Button sx={{ borderRadius: '40px', color: 'black' }} variant="outlined"> <AppleIcon /> Sign Up with Apple</Button>
              
              <div className={style.hrr}>
              {/* <hr /> */}
              <span>or</span>
              </div>
              




              <Button sx={{
                borderRadius: '40px',
                background: 'black',
                color: 'white',
                overflow: 'none'
              }} variant="contained" onClick={() => setHide(true)}>Create account</Button>
              <p>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span> , including <span> Cookie Use</span>.</p>
              <div className={style.bottum}>
                <h4>Have an account already? <Link to='/login'><span >Log in</span></Link> </h4>
              </div>
            </div>
            <div className={style.textfield} style={{ display: hide ? '' : 'none' }}>
              <h1>Create your account</h1>

              <TextField sx={{ 
                width: '100%'
              }} label="Name" variant="outlined" type='text'  value={name}  onChange={handleName} />
              <TextField sx={{
                width: '100%'
              }} label="Phone" variant="outlined" type='number' error={Ph} helperText={Ph? "phone number must be 10 digit." : ''} value={phone} onChange={handlePhone} /> 
              <TextField sx={{
                width: '100%'
              }} label="Email" variant="outlined" type='email' error={EM} helperText={EM? "Email is Not Valid." : ''} value={email} onChange={handleEmailChange} /> 
              <TextField sx={{
                width: '100%'
              }} label="Password" variant="outlined" type='password' error={PW} helperText={PW? "Password must be min one Capital letter,min one digit & min 6 letter." : ''} value={password} onChange={handlePassword} /> 
              {/* <div className={style.dob}>
                <span>Date of birth</span>
                 <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                 
      
                  </div> */}
              <div className={style.signup_btn}>
                {registrationError && <p>{registrationError}</p>}

                {/* <Snackbar autoHideDuration={6000} >
                 <Alert  severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                  </Alert>
                 </Snackbar> */}

                <Button sx={{
                  width: '100%',
                  borderRadius: '40px',
                  background: 'black',
                  color: 'white',
                  overflow: 'none'
                }} variant="contained" onClick={handleSignup}>Sign up</Button>
              </div>



            </div>

          </div>


        </div>

      </div>

    </div>
  )
}
