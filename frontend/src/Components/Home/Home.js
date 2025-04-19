import Links from "../Links/Links";
import "./Home.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomeCard() {

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
		<div id="home" ref={containerRef} className="home-container anchor-offset">
			<div className="profile-img-container">
				<img src="/logo.jpg" alt="img" />
			</div>
			<hr className="bar" />
			<h1 id="profile-name">Himansu Naik</h1>
			<div className="links-container">
				<Links
				    id="social-link"
					url="https://www.linkedin.com/in/himansunaik/"
					img="/assets/images/linkedin.png"
				/>

				<Links
				    id="social-link2"
					url="https://github.com/HimansuWebCoder"
					img="/assets/images/github.webp"
				/>
			</div>			
		</div>
	);
}

export default HomeCard;
