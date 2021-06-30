import React, { Component } from 'react';
function Header(){
  
        return (

          <header className="ease">
          <div className="contain-fluid">
            <div className="logo ease">
              <a href="index.php" style={{display: 'block'}}>
                <img src="images/logo.svg" alt="" />
              </a>
            </div>
            <div className="toggle"><span /></div>
            <nav className="ease">
              <ul id="nav">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li className>
                  <a href="/about">About us</a>
                </li>
                <li className=" drop">
                  <a href="/services">Services</a>
                  {/* <ul className="sub">
                    <li><a href="interview-prep.php">Interview Prep</a></li>
                    <li><a href="resume-review.php">Resume Review Service</a></li>
                    <li><a href="coaching.php">1 on 1 Coaching Service</a></li>
                  </ul> */}
                </li>
                <li className>
                  <a href="/appointment">Schedule Appointment</a>
                </li>
              </ul>
              <ul id="cta">
                <li className>
                  <a href="/contact" className="webBtn">Contact us now</a>
                </li>
              </ul>
            </nav>
            <div className="clearfix" />
          </div>
        </header>
          );
    
}
 
export default Header;