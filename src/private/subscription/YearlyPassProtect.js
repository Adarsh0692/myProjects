import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function WeekendPassProtect() {
    const userData = JSON.parse(localStorage.getItem("users"))
    const isYearlyPass = userData.find((user) => user.subscriptionData.subscriptionPlan === "Yearly Pass" && user.subscriptionData.isActive === true )
  return (
    <div>
      {isYearlyPass?  <Outlet/> : <Navigate to='/' />  }
    </div>
  )
}