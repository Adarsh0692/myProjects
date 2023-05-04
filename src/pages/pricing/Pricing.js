import React from "react";
import Style from "./Pricing.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export default function Pricing() {
 
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("logged");
  const userData = JSON.parse(localStorage.getItem("users")) || [];
  const name = userData.find(user => user.subscriptionData.isActive === true )


  function handleSubsriptionW() {
    const userDetails = userData.find(
      (user) =>
        user.subscriptionData.isSubscribed === false ||
        user.subscriptionData.subscriptionPlan === ""
    );

    if (isLogin) {
      if (userDetails) {
        const confirmation = window.confirm(
          "Do You want to Subscribed our Weekend Pass"
        );
        if (confirmation) {
          userDetails.subscriptionData.isSubscribed = true;
          userDetails.subscriptionData.subscriptionPlan = "Weekend Pass";
          localStorage.setItem("users", JSON.stringify(userData));
          Swal.fire(
            'Congratulations!',
            'You have subscribed our Weekend pass.'
          )
          
        }
      } else {
        Swal.fire(
          `Dear ${name.username}`,
          `You have already Subscribed our ${name.subscriptionData.subscriptionPlan}.`
          )
      }
    }
     else {
      navigate("/login");
    }
  }
  function handleSubsriptionM() {
    const userDetails = userData.find(
      (user) =>
        user.subscriptionData.subscriptionPlan === "Weekend Pass" ||
        user.subscriptionData.subscriptionPlan === ""
    );
    if (isLogin) {
      if (userDetails) {
        const confirmation = window.confirm(
          "Do You want to Subscribed our Monthly Pass"
        );
        if (confirmation) {
          userDetails.subscriptionData.isSubscribed = true;
          userDetails.subscriptionData.subscriptionPlan = "Monthly Pass";
          localStorage.setItem("users", JSON.stringify(userData));
          Swal.fire(
            'Congratulations!',
            'You have subscribed our Monthly pass.'
          )
        }
      } else {
        Swal.fire(
          `Dear ${name.username}`,
          `You have already Subscribed our ${name.subscriptionData.subscriptionPlan}.`
          )
      }
    } else {
      navigate("/login");
    }
  }
  function handleSubsriptionY() {
    const userDetails = userData.find(
      (user) =>
        user.subscriptionData.subscriptionPlan === "Weekend Pass" ||
        user.subscriptionData.subscriptionPlan === "Monthly Pass" ||
        user.subscriptionData.subscriptionPlan === ""
    );
    if (isLogin) {
      if (userDetails) {
        const confirmation = window.confirm(
          "Do You want to Subscribed our Yearly Pass"
        );
        if (confirmation) {
          userDetails.subscriptionData.isSubscribed = true;
          userDetails.subscriptionData.subscriptionPlan = "Yearly Pass";
          localStorage.setItem("users", JSON.stringify(userData));
          Swal.fire(
            'Congratulations!',
            'You have subscribed our yearly pass.'
          )
        }
      } else {
        Swal.fire(
          `Dear ${name.username}`,
          `You have already Subscribed our ${name.subscriptionData.subscriptionPlan}.`
          )
      }
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <Navbar />
      <div className={Style.main_div}>
        <div className={Style.content}>
          <h1>
            {" "}
            <span>Special Offers</span> Get It Now For Your Health{" "}
          </h1>
          <p>
            Time and health are two precious assets that we don't recognize and
            appreciate until they have been depleted
          </p>
        </div>
        <div className={Style.p_table}>
          <div className={Style.div_1}>
            <h1>Weekend Pass</h1>
            <h2>INR 200</h2>
            <span>Unlimited Yoga Classes</span> <br />
            <span>Aerobics</span> <br />
            <span>Strength Training</span> <br />
            <button onClick={handleSubsriptionW}>SELECT PLAN</button>
          </div>
          <div className={Style.div_2}>
            <h1>Monthly Pass</h1>
            <h2>INR 700</h2>
            <span>Unlimited Yoga Classes</span> <br />
            <span>Aerobics, Dance</span> <br />
            <span>Strength & CrossFit Training</span> <br />
            <button onClick={handleSubsriptionM}>SELECT PLAN</button>
          </div>
          <div className={Style.div_3}>
            <h1>Yearly Pass</h1>
            <h2>INR 7500</h2>
            <span>Unlimited Yoga Classes</span> <br />
            <span>Aerobics, Dance, Jujutsu</span> <br />
            <span>Strength Training & CrossFit Training</span> <br />
            <button onClick={handleSubsriptionY}>SELECT PLAN</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
