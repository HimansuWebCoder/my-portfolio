import RocketCard from "../../Components/Rocket-card/RocketCard";
import "./Contacts.css";
import location from "../../assets/location.png";
import contact1 from "../../assets/contact3.png";
// import contact from "../../assets/contact.png";
import call from "../../assets/call.png";
import email from "../../assets/email.png";
// import contact from "../../assets/freelancer.svg";
// import contact from "../../assets/freelancer2.webp";
import contact from "../../assets/freelancer3.webp";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {


   const containerRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      '.box',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.box',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

	return (
		<div ref={containerRef} className="contact-container">
  <div className="contact-info box">
    {/*<h1 className="contact-title">Our Address</h1>*/}
    <div className="info-sections">

      {/* Location */}
      <div className="info-block">
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/himansunaik" target="_blank">
           <img className="icon-image" src="/assets/images/linkedin.png" alt="location" />
          </a>
        </div>
        <div className="text-container">
          {/*<p>Ak Plaza, near MM Mart, Azad Nagar, UPstar, Sundarpada, Kantilo, Bhubaneswar, Odisha 751002</p>*/}
        <a className="contact-links" href="https://www.linkedin.com/in/himansunaik" target="_blank">Linkedin</a>
        </div>
      </div>

      {/* Phone */}
      <div className="info-block">
        <div className="icon-container">
          <a href="tel:+919861194145">
           <img className="icon-image" src={call} alt="call" />
          </a>
        </div>
        <div className="text-container">
          <a className="contact-links" href="tel:+919861194145">+91-9861194145</a>
        </div>
      </div>

      {/* Email */}
      <div className="info-block">
        <div className="icon-container">
          <img className="icon-image" src={email} alt="email" />
        </div>
        <div className="text-container">
          <p className="contact-links" >hello@himansuwebcoder.in</p>
        </div>
      </div>

    </div>
  </div>

  <div className="contact-image box">
    <img src={contact} alt="contact us image" />
  </div>
</div>

	);
}

export default Contact;
