import React from 'react';
import Style from './Home.module.css'

import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Button from '../../components/Button';


export default function Home() {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem('logged')
  const userDetails = JSON.parse(localStorage.getItem('users')) || []
  const registerData = userDetails.find((user) => user.username)
  const userIsSubscribed = userDetails.find(user => user.subscriptionData.isSubscribed === false && user.subscriptionData.subscriptionPlan === '')
  // console.log(userIsSubscribed);
  const names = (userIsSubscribed ? 'Subscribe Now' : 'Get Started')
  const isWeekenPass = userDetails.find(user => user.subscriptionData.isSubscribed === true && user.subscriptionData.subscriptionPlan === 'Weekend Pass')
  // const isWeekenPass = userDetails?.subscriptionData?.subscriptionPlan === 'Weekend Pass'
  const isMonthlyPass = userDetails.find(user => user.subscriptionData.isSubscribed === true && user.subscriptionData.subscriptionPlan === 'Monthly Pass')
  // const isMonthlyPass = userDetails?.subscriptionData?.subscriptionPlan === 'Monthly Pass' 
  const isYearlyPass = userDetails.find(user => user.subscriptionData.isSubscribed === true && user.subscriptionData.subscriptionPlan === 'Yearly Pass')
  // const isYearlyPass = userDetails?.subscriptionData?.subscriptionPlan === 'Yearly Pass'
  
  function handleNavClick() {
    if(registerData){
      navigate('/login')
    }else{
      navigate('/registration')
    }
    
  }

  function handleSubscribe() {
    if (names === 'Subscribe Now') {
      navigate('/pricing')
    }
    if (isWeekenPass) {
      navigate('/weekend')
    }
    else if (isMonthlyPass) {
      navigate('/monthly')
    }
    else if (isYearlyPass) {
      navigate('/yearly')
    }


  }

  return (
    <div>
      <div>
      <Navbar />
      </div>
     

      <div className={Style.homeImg}>

        <div className={Style.homeContent}>
          <h1>IT'S ALL ABOUT WHAT YOU CAN ACHIEVE</h1>
          <p>Empower Yourself to make the changes you need to make </p> <br />
          {isLogin ? <Button onClick={handleSubscribe} name={names} /> : <Button onClick={handleNavClick} name='Join Us' />}

        </div>

      </div>

      <Footer />
    </div>
  )
}