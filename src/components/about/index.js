import React, { Component } from 'react';
function About() {
 
  
        return (

          <main common typical about>
          <section id="sBanner" style={{backgroundImage: 'url("images/3q.jpg")'}}>
            <div className="contain">
              <div className="content">
                <h1>About us</h1>
              </div>
            </div>
          </section>
          {/* sBanner */}
          <section id="business">
            <div className="contain">
              <div className="flexRow flex">
                <div className="col col1">
                  <div className="image"><img src="images/why-choose-us2.jpg" alt="" /></div>
                </div>
                <div className="col col2">
                  <div className="content">
                    <h1 className="heading">CyberSec Prep at a Glance</h1>
                    <h4 className="regular">All of our services are backed by our 100% satisfaction guarantee.</h4>
                    <p>Quo, deleniti vel, id reprehenderit, ullam sit quas minus odit voluptates iusto corrupti odio nesciunt ut temporibus voluptatem suscipit molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quae eos facilis voluptas, blanditiis nisi doloribus quaerat similique adipisci debitis sequi rerum eius laudantium numquam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur hic dolores earum laudantium atque saepe! Iste praesentium impedit repudiandae aliquam ratione animi ipsam accusamus ea beatae.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* business */}
          <section id="choose">
            <div className="contain text-center">
              <h1 className="heading">Why to choose us?</h1>
              <div className="flexRow flex">
                <div className="col">
                  <div className="inner">
                    <div className="icon"><img src="images/vector-shield.svg" alt="" /></div>
                    <div className="txt">
                      <h4>Network Security</h4>
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <div className="icon"><img src="images/vector-laptop.svg" alt="" /></div>
                    <div className="txt">
                      <h4>Database Security</h4>
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <div className="icon"><img src="images/vector-internet.svg" alt="" /></div>
                    <div className="txt">
                      <h4>Web Security</h4>
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <div className="icon"><img src="images/vector-bug.svg" alt="" /></div>
                    <div className="txt">
                      <h4>Locker Security</h4>
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <div className="icon"><img src="images/vector-user.svg" alt="" /></div>
                    <div className="txt">
                      <h4>Data Security</h4>
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <div className="icon"><img src="images/vector-chip.svg" alt="" /></div>
                    <div className="txt">
                      <h4>Cloud Security</h4>
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* choose */}
          <section id="subscribe">
            <div className="contain">
              <div className="content">
                <div className="txt text-center">
                  <h1 className="heading">Subscribe to Newsletter</h1>
                </div>
                <form action method="post">
                  <div className="txtGrp">
                    <img src="images/icon-envelope-fill.svg" alt="" />
                    <label htmlFor>Email Address</label>
                    <input type="text" name id className="txtBox" />
                    <button type="submit" className="webBtn lgBtn">Submit <i className="fi-arrow-right" /></button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* subscribe */}
        </main>
          );
    
}
 
export default About;