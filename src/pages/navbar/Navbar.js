import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Style from './Navbar.module.css'
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';



export default function Navbar() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const isLogin = localStorage.getItem('logged') 

  const userdetails = JSON.parse(localStorage.getItem('users')) || []
  
  
  function handleLogout() {
    const islogin = userdetails.find(user => user.subscriptionData.isActive === true)
   
    if(islogin){
       islogin.subscriptionData.isActive = false;
      localStorage.setItem('users', JSON.stringify(userdetails))
      localStorage.removeItem('logged')
      navigate('/login')
    }else{
      navigate('/login')
    }
    
    

  }
  return (
  <>
    <div className={Style.main_Navdiv}>
    
      <div className={Style.logo}>

        <Link to='/' style={{ textDecoration: 'none' }}> <h1>GYM  </h1> </Link>
      </div>
     
      <div >
        <ul className={Style.link_div} >

          <Link to='/aboutUs'  ><li>About Us</li></Link>
          <Link to='/programs' ><li>Program</li></Link>
          <Link to='/training' ><li>Training</li></Link>
          <Link to='/pricing' ><li>Pricing</li></Link>

        </ul>
      </div>
      <div className={Style.btn_div} >
        <button className={Style.btn} onClick={handleLogout}>{isLogin ? "Logout" : "Login"}</button>
      </div>
      <div className={Style.menuIcon} >
        {isMobile ? <HiMenuAlt3 onClick={() => setIsMobile(false)} /> : <HiMenu onClick={() => setIsMobile(true)} />}
 

      </div>
      

    </div>
    <div className={isMobile ? Style.mobileLink : Style.hideIcon}>
        <div>
          <Link to='/' ><p>Home</p></Link>
          <Link to='/aboutUs' ><p>AboutUs</p></Link>
          <Link to='/programs' ><p>Program</p></Link>
          <Link to='/training' ><p>Training</p></Link>
          <Link to='/pricing' ><p>Pricing</p></Link>
          {isLogin? <Link to='/login' ><p onClick={handleLogout}>Logout</p></Link> : <Link to='/login' ><p>Login</p></Link> }
        </div>
      </div>
    </>
  )
}