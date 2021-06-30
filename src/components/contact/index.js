import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const Contact =()=> {
  const { register, handleSubmit, formState: { errors } } = useForm();
//  const [contact, setContact] = useState({});


  const submitContact = (e) => {
    // e.preventDefault();
  //  console.log(contact.firstname + " " + contact.lastname)
  console.log(JSON.stringify(e));
    
  }
  
        return (

          <main common typical contact>
          <section id="sBanner" style={{backgroundImage: 'url("images/3q.jpg")'}}>
            <div className="contain">
              <div className="content">
                <h1>Feel free to ask any question</h1>
              </div>
            </div>
          </section>
          {/* sBanner */}
          <section id="contact">
            <div className="contain text-center">
              <div className="content">
                <h1 className="heading">Start a conversation</h1>
                <p>Working with Tangent gives you access to cross-disciplinary teams to help you meet your digital ambitions- whatever they may be.</p>
              </div>
              <form action method="post"  onSubmit={handleSubmit(submitContact)}>
                <h3 className="heading">Let’s start the conversation</h3>
                <div className="row formRow">
                  
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6 txtGrp">
                    {/* <label>Full Name</label> */}
                    <input type="text" className="txtBox" placeholder="Full Name" {...register("fullName", { required: true, maxLength: 80, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} />
                    {errors?.fullName?.type === "required" && (<p>This field is required</p>)}
                    {errors?.fullName?.type === "maxLength" && (
                      <p>Name cannot exceed 20 characters</p>
                    )}
                    {errors?.fullName?.type === "pattern" && (
                      <p>Alphabetical characters only</p>
                    )}
                  </div>
                  
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                    <div className="txtGrp">
                      {/* <label htmlFor>Phone Number</label> */}
                      <input type="text" className="txtBox" placeholder="Phone Number" {...register("phoneNumber", { required: true, maxLength: 80 })} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                    <div className="txtGrp">
                      {/* <label htmlFor>Email Address</label> */}
                      <input type="text" name id className="txtBox" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12">
                    <div className="txtGrp">
                      {/* <label htmlFor>Comments</label> */}
                      <textarea name id className="txtBox" placeholder="comments" defaultValue={""} {...register("message")}/>
                    </div>
                  </div>
                </div>
                <div className="bTn formBtn"><button type="submit" className="webBtn">Submit <i className="fi-arrow-right" /></button></div>
              </form>
            </div>
          </section>
          {/* contact */}
        </main>
          );
    
}
 
export default Contact;