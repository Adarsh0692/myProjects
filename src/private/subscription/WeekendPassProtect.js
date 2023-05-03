import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function WeekendPassProtect() {
    const userData = JSON.parse(localStorage.getItem("users"))
    const isWeekendPass = userData.find((user) => user.subscriptionData.subscriptionPlan === "Weekend Pass" && user.subscriptionData.isActive === true )
  return (
    <div>
      {isWeekendPass?  <Outlet/> : <Navigate to='/' />  }
    </div>
  )
}



