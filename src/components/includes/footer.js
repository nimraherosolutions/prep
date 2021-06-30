import React, { Component } from 'react';
function Footer(){
   
        return (

          <footer>
          <div className="contain">
            <div className="flexRow flex">
              <div className="col">
                <h5>About Company</h5>
                <p>We like to say we are striving to “connect the world.” </p>
              </div>
              <div className="col">
                <h5>Website</h5>
                <ul className="lst">
                  <li><a href="index.php">Home</a></li>
                  <li><a href="about.php">About us</a></li>
                  <li><a href="services.php">Our Services</a></li>
                  <li><a href="faq.php">FAQ's</a></li>
                  <li><a href="contact.php">Contact us</a></li>
                </ul>
              </div>
              <div className="col">
                <h5>Get in Touch</h5>
                <ul className="lst infoLst">
                  <li>
                    <img src="images/icon-map-marker.svg" alt="" />
                    <span>1711 O Street Sanger, <br /> CA 93657 Suite 102</span>
                  </li>
                  <li>
                    <img src="images/icon-envelope-fill.svg" alt="" />
                    <a href="mailto:info@cybersec_prep.com">info@cybersec_prep.com</a>
                  </li>
                  <li>
                    <img src="images/icon-phone.svg" alt="" />
                    <a href="tel:559-579-8833">559-579-8833</a>
                  </li>
                </ul>
                <ul className="social flex">
                  <li><a href="?" style={{display: 'block'}}><img src="images/social-facebook.svg" alt="" /></a></li>
                  <li><a href="?" style={{display: 'block'}}><img src="images/social-twitter.svg" alt="" /></a></li>
                  <li><a href="?" style={{display: 'block'}}><img src="images/social-instagram.svg" alt="" /></a></li>
                  <li><a href="?" style={{display: 'block'}}><img src="images/social-email.svg" alt="" /></a></li>
                </ul>
              </div>
              <div className="col">
                <div className="bTn"><a href="contact.php" className="webBtn">Contact us <i className="fi-arrow-right" /></a></div>
              </div>
            </div>
          </div>
          <div className="copyright relative">
            <div className="contain">
              <div className="inner">
                <p>Copyright © 2021 <a href="index.php" className="regular">CyberSec Prep</a>. All rights reserved.</p>
                <ul className="smLst flex">
                  <li><a href="privacy-policy.php">Privacy Policy</a></li>
                  <li><a href="terms-and-conditions.php">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
          );
    
}
 
export default Footer;