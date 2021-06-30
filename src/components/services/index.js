import React, { Component } from 'react';
function Services() {
 
  
        return (

          <main common services>
          <section id="sBanner" style={{backgroundImage: 'url("images/3q.jpg")'}}>
            <div className="contain">
              <div className="content">
                <h1>Our Services</h1>
              </div>
            </div>
          </section>
          {/* sBanner */}
          <section id="services">
            <div className="contain">
              <div className="flexRow flex">
                <div className="col col1">
                  <div className="image"><img src="images/s1.jpg" alt="" /></div>
                </div>
                <div className="col col2">
                  <div className="content">
                    <h2 className="heading">Interview Prep</h2>
                    <p>Quo, deleniti vel, id reprehenderit, ullam sit quas minus odit voluptates iusto corrupti odio nesciunt ut temporibus voluptatem suscipit molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quae eos facilis voluptas, blanditiis nisi doloribus quaerat similique adipisci debitis sequi rerum eius laudantium numquam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur hic dolores earum laudantium atque saepe! Iste praesentium impedit repudiandae aliquam ratione animi ipsam accusamus ea beatae.</p>
                    <div className="bTn"><a href="interview-prep.php" className="webBtn">Learn More <i className="fi-arrow-right" /></a></div>
                  </div>
                </div>
              </div>
              <div className="flexRow flex">
                <div className="col col1">
                  <div className="image"><img src="images/s2.jpg" alt="" /></div>
                </div>
                <div className="col col2">
                  <div className="content">
                    <h2 className="heading">Resume Review Service</h2>
                    <p>Quo, deleniti vel, id reprehenderit, ullam sit quas minus odit voluptates iusto corrupti odio nesciunt ut temporibus voluptatem suscipit molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quae eos facilis voluptas, blanditiis nisi doloribus quaerat similique adipisci debitis sequi rerum eius laudantium numquam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur hic dolores earum laudantium atque saepe! Iste praesentium impedit repudiandae aliquam ratione animi ipsam accusamus ea beatae.</p>
                    <div className="bTn"><a href="resume-review.php" className="webBtn">Learn More <i className="fi-arrow-right" /></a></div>
                  </div>
                </div>
              </div>
              <div className="flexRow flex">
                <div className="col col1">
                  <div className="image"><img src="images/s3.jpg" alt="" /></div>
                </div>
                <div className="col col2">
                  <div className="content">
                    <h2 className="heading">1 on 1 Coaching Service</h2>
                    <p>Quo, deleniti vel, id reprehenderit, ullam sit quas minus odit voluptates iusto corrupti odio nesciunt ut temporibus voluptatem suscipit molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quae eos facilis voluptas, blanditiis nisi doloribus quaerat similique adipisci debitis sequi rerum eius laudantium numquam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus illum dolorum consectetur hic dolores earum laudantium atque saepe! Iste praesentium impedit repudiandae aliquam ratione animi ipsam accusamus ea beatae.</p>
                    <div className="bTn"><a href="coaching.php" className="webBtn">Learn More <i className="fi-arrow-right" /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* services */}
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
 
export default Services;