import { motion } from 'framer-motion';
import "./SkillCards.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SkillCard({ src, skillName }) {

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
		<div ref={containerRef} className="skills-card-container">
			<div className="skills-sub-container box">
				<img className="skill-img" src={src} alt="img" />
				{/*<h1 id="skills-name">{skillName}</h1>*/}
			</div>
			
		</div>
	);
}

export default SkillCard;
