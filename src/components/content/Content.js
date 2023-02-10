import React, { useRef } from 'react';
import './content.css';
import { IoIosContact } from 'react-icons/io';
import { BiMessageCheck } from 'react-icons/bi';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';

const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y1wcamy', 'template_m8qp32i', form.current, '_LZ3I_eYb72pjJF8d');
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <h5>Turn your best customers into Loyal fans</h5>
          <p>
            Get ready to revolutionize the way you interact with your customers and 
            drive sales with Loyalbaze. Join the waiting list now to be among the first to 
            experience the future of customer loyalty.
          </p>
        </div>
        {/* end of contactact details */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="<IoIosContact />Tell us your name" required />
          <input type="email" name="email" placeholder="<HiOutlineMail />Enter your email address" required />
          <button type="submit" className="btn btn-primary">Get early access</button>
        </form>
      </div>
    </section>
  );
};

export default Content;
