// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './header.css';
// import { GiEternalLove } from 'react-icons/gi';
// import Contact from '../contact/Contact';

// const Header = () => (
//   <header>
//     <div className="container header-container">
//       <h2>
//         l
//         <GiEternalLove class="love" />
//         yalbaze
//       </h2>
//       <button type="submit" className="btn btn-primary">Request a call</button>
//     </div>
//   </header>
// );

// export default Header;

import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import './header.css';
import { GiEternalLove } from 'react-icons/gi';
// import './contact.css';
import emailjs from 'emailjs-com';

const Header = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y1wcamy', 'template_m8qp32i', form.current, '_LZ3I_eYb72pjJF8d');
    e.target.reset();
  };
  return (
    <section id="contact">
      <header>
        <div className="container header-container">
          <h2>
            l
            <GiEternalLove class="love" />
            yalbaze
          </h2>
          <button type="submit" className="btn btn-primary" onClick={() => setmodalIsOpen(true)}>Request a call</button>
        </div>
      </header>
      <Modal
        isOpen={modalIsOpen}
        style={
          {
            content: {
              color: '#fff',
              backgroundColor: '#151729',
              height: '100vh',
              overflow: 'hidden',
            },
          }
        }
      >
        <div className="container contact-container">
          <div className="contact_options">
            <h1>Priority Access</h1>
            <p>
              Get ready to revolutionize the way you interact with your customers and
              drive sales with Loyalbaze. Skip the waitlist and get exclusive priority
              access to LoyalBaze. Limited slots available. Please tell us a bit about
              your business and needs, and our consultants will be in touch immediately!
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <h2>Book a consultation with us</h2>
            <input type="text" name="name" placeholder="Enter your full name" required />
            <input type="email" name="email" placeholder="Enter your work email" required />
            <input type="email" name="email" placeholder="Mobile number" required />
            <input type="email" name="email" placeholder="Enter your work email" required />
            <textarea name="message" id="" cols="30" rows="10" placeholder="Drop a message" required />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Header;
