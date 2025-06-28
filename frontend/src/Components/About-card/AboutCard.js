import Links from "../Links/Links";
import "./AboutCard.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutCard() {

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
		<div ref={containerRef} className="about-container ">
			{/*<hr className="h-bars"/>*/}
			<div className="about-description-container box">
				<p id="profile-intro">
					A <b>Full-Stack Developer</b> & <b>Freelancer</b> helping businesses build modern, responsive websites using client-focused web technologies.
          I create fast, scalable, and user-friendly web solutions — whether you're hiring or building your brand online
				</p>
			</div>
		</div>
	);
}

export default AboutCard;
