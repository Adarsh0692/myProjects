import React from 'react'
import Style from './Footer.module.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function MyFooter() {
    return (
        <div className={Style.bg}>
            <div className={Style.main_div}>
                <div className={Style.logo}>
                    <h1>GYM</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, culpa.</p>
                    <div className={Style.mediaIcon}>
                        <Link to="https://www.facebook.com/" target='blank'><span><BsFacebook color="#1877F2" /></span></Link>
                        <Link to="https://www.instagram.com/" target='blank'><span><BsInstagram color="#c32aa3" /></span></Link>
                        <Link to="https://twitter.com/i/flow/login" target='blank'><span><BsTwitter color="#1DA1F2" /></span></Link>

                    </div>
                </div>
                <div className={Style.table}> 

                    {/* <h1>div 1</h1> */}
                    <span>ACCOUNT</span>
                    <p>Wishlist</p>
                    <p>Checkout</p>
                    <p>My Account</p>

                </div>
                <div className={Style.table}>
                    <div>
                        <span>CUSTOMER SERVICE</span>
                        <p>Delivery</p>
                        <p>Contact Us</p>
                        <p>FAQS</p>
                        <p>Size guide</p>
                        <p>Gift Certificate</p>
                    </div>


                </div >
                <div className={Style.table}>
                    <div>
                        <span>ABOUT FITNESS</span>
                        <p>Carrers</p>
                        <p>Gender pay report</p>
                        <p>Privacy Policy</p>
                        <p>T&A</p>
                    </div>


                </div>

            </div>
            <div className={Style.copy}>
                <hr />
                <p> &copy; &trade; &reg; @2023 </p>
            </div>
        </div>
    )
}
