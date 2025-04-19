// import RocketCard from "../../Components/Rocket-card/RocketCard";
import "./Services.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {

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
		<div ref={containerRef} id="services" className="Services-container anchor-offset">
			<div className="Service-bucket bucket1 box">
			    <img src="https://saif-portfolio-ruby.vercel.app/static/media/service-1.e6772bd53c577af49129f09d020b488f.svg" alt="responsive design" />
				<h2 className="services-heading"> Responsive Design</h2>
				<p className="services-info">Ensuring that the website/mobile app is responsive across all platforms</p>
			</div>
			<div className="Service-bucket bucket2 box">
			    <img src="https://saif-portfolio-ruby.vercel.app/static/media/service-2.360040db94db03a3ca860042e67c4912.svg" alt="responsive design" />
				<h2 className="services-heading"> Web Development</h2>
				<p className="services-info">Ensuring that that a website meets the correct standards, and also ensuring it's well maintained</p>
			</div>
			<div className="Service-bucket bucket3 box">
			    <img src="assets/images/google-business.jpg" alt="responsive design" />
				<h2 className="services-heading">Google Business Setup</h2>
				<p className="services-info">Google Business setup for more client reaching with more search to find your business easily</p>
			</div>
		</div>
	);
}

export default Services;
