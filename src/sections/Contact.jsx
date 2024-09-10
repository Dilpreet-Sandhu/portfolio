import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contact = () => {

  const [loading,setLoading] = useState(false);
  

  async  function handleSubmit(e) {
    console.log("hey form")
    e.preventDefault();
    const formData = new FormData(e.target);
    let name = formData.get("name");
    let email = formData.get("email");
    let message = formData.get("message");

    try {
      setLoading(true);
      const toastId = toast.loading("send email");

       emailjs.init("SPnpGOyK2Nq4SZDUI");
     await  emailjs
      .send(
        "service_an6aejp",
        "template_6qlvoh7",
        {
          from_name: name,
          to_name: 'Dilpreet Sandhu',
          from_email: email,
          to_email: 'dilpreet66770@gmail.com',
          message: message,
        },
        
      )

    

      name = "";
      email = "";
      message = "";

      toast.success("email sent successfully",{id : toastId})

    } catch (error) {
      console.log("error happened while sending email",error);
      toast.error('error while sending email');

    }finally {
      setLoading(false);
    }
    
    
  }

  //service_an6aejp

  return (
    <section className="c-space my-20 " id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src={"/assets/terminal.png"}
          alt="terminal"
          className="absolute inset-0 z-[-1] w-full h-full object-cover max-sm:hidden mb-2"
        />
        <div className="contact-container">
        <h3 className="head-text z-10">Get In Touch</h3>
        <p className="z-10 text-lg text-white-700 mt-3">
          Let’s Build Something Extraordinary Together
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-2">
          <label className="space-y-1">
            <span className="field-label">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="field-input"
            placeholder="your name"
          />
          <label className="space-y-3">
            <span className="field-label">Email</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="field-input"
            placeholder="youremail@anything.com"
          />
          <label className="space-y-3">
            <span className="field-label">message</span>
          </label>
          <textarea
            type="text"
            name="message"
            required
            className="field-input"
            rows={5}
            placeholder="type your message here"
          />
          <button disabled={loading} className="field-btn" type="submit" >
            {
              loading ? "Sending message" : "Send message"
            }
            <img src={'/assets/arrow-up.png'} className="field-btn_arrow"/>
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
