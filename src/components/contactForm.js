import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xvf0qmy', 'template_51ahtz1', form.current, 'tK4mouyUDHp4dv_wV')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <div name='form'>
        
        <input type="text" name="user_name" placeholder='Name'/>
        
        <input type="email" name="user_email" placeholder='Email'/>
        
        <textarea name="message" placeholder='Message'/>
        <input type="submit" value="Send" />
      </div> 
    </form>
  );
};

export default ContactUs