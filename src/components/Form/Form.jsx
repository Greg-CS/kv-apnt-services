import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9b2lhnb', 'template_9qmeczr', form.current, 'Qg9lalc1QLU_5DHIT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='grid mt-10 p-10 text-black border-2 rounded-lg border-black' ref={form} onSubmit={sendEmail}>
      <label className=''>Name</label>
      <input className='bg-transparent border-2 border-black rounded-lg' type="text" name="user_name" />
      <label>Email</label>
      <input className='bg-transparent border-2 border-black rounded-lg' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='bg-transparent border-2 border-black rounded-lg' name="message" />
      <input className='btn mt-5 mx-auto' type="submit" value="Send" />
    </form>
  );
};