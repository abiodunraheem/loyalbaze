import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import './header.css';
import { GiEternalLove, GiStarShuriken } from 'react-icons/gi';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { TbWaveSawTool } from 'react-icons/tb';
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
            },
          }
        }
      >
        <div className="container contact-container">
          <div className="contact-options">
            <RiCheckboxBlankCircleFill className="small-circle" />
            <GiStarShuriken className="star big" />
            <h1>Priority Access</h1>
            <div className="wave"><TbWaveSawTool /></div>
            <p>
              Get ready to revolutionize the way you interact with your customers and
              drive sales with Loyalbaze. Skip the waitlist and get exclusive priority
              access to LoyalBaze. Limited slots available. Please tell us a bit about
              your business and needs, and our consultants will be in touch immediately!
            </p>
            <GiStarShuriken className="star" />
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <h5>Book a consultation with us</h5>
              <input type="text" name="name" placeholder="Enter your full name" required />
              <input type="email" name="email" placeholder="Enter your work email" required />
              <input type="number" name="number" placeholder="Mobile number" required />
              <input type="name" name="name" placeholder="Company name" required />
              <select>
                <option>Select country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="America">America</option>
                <option value="Brazil">Brazil</option>
                <option value="Bonswana">Bonswana</option>
                <option value="Costa-Rica">Costa-Rica</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Peru">Peru</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Zambia">Zambia</option>
              </select>
              <textarea name="message" id="" cols="20" rows="5" placeholder="Drop a message..." required />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Header;
