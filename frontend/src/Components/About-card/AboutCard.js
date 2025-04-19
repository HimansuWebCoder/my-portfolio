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
			<hr className="h-bars"/>
			<div className="about-description-container box">
				<p id="profile-intro">
					Hii,👋 I am 
🅷🅸🅼🅰🅽🆂🆄, 🇫​​🇺​​🇱​​🇱​-​🇸​​🇹​​🇦​​🇨​​🇰​ ​ ​🇩​​🇪​​🇻​​🇪​​🇱​​🇴​​🇵​​🇪​​🇷​, Welcome to my
					portfolio. I’m a passionate full-stack developer with
					hands-on experience in building web applications from front
					to back. I specialize in creating efficient, scalable, and
					user-friendly solutions using modern web technologies.{" "}
					{/*<strong>My expertise includes</strong>:<br />
					<i>Frontend Development</i>: HTML, CSS, JavaScript, React.js
					<br />
					<i>Backend Development</i>: Node.js, Express, REST APIs{" "}
					<br /> <i>Databases</i>: PostgreSQL <br />{" "}
					<i>Cloud Services</i>: Cloudinary (for media storage),
					Render or AWS (for deployment)
					<br /> <i>Other Tools</i>: Git, Docker, Passport.js (for
					authentication)*/}
					<br /> I enjoy solving complex problems and thrive in
					environments where I can contribute to building robust
					applications that meet users' needs. I believe in writing
					clean, maintainable code and continuously improving my
					skills through learning and hands-on experience.
					<br />
					<i>
						Feel free to explore my projects, and I’d love to
						connect to discuss how I can contribute to your team
					</i>
				</p>
			</div>
		</div>
	);
}

export default AboutCard;
