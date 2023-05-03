import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function WeekendPassProtect() {
    const userData = JSON.parse(localStorage.getItem("users"))
    const isMonthlyPass = userData.find((user) => user.subscriptionData.subscriptionPlan === "Monthly Pass" && user.subscriptionData.isActive === true )
  return (
    <div>
      {isMonthlyPass?  <Outlet/> : <Navigate to='/' />  }
    </div>
  )
}