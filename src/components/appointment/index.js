import React, { Component } from 'react';
function Appointment() {
 
  
        return (

          <main common appoint>
          <section id="sBanner" style={{backgroundImage: 'url("images/3q.jpg")'}}>
            <div className="contain">
              <div className="content">
                <h1>Interview Schedule Appointment</h1>
              </div>
            </div>
          </section>
          {/* sBanner */}
          <section id="appoint">
            <div className="contain">
              <div className="flexRow flex">
                <div className="col col1">
                  <div className="workBlk">
                    <div className="image"><img src="images/s1.jpg" alt="" /></div>
                    <div className="txt">
                      <h3>Interview Prep</h3>
                      <p>Dolor porttitor commodo lacinia risus interdum mauris, non ut dolor velit dui elit , lacus mauris.</p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </section>
          {/* appoint */}
        </main>
          );
    
}
 
export default Appointment;