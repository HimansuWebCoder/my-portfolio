import StatusIndicator from "../StatusIndicator/StatusIndicator";
import "./ProjectCards.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectCards({
	title,
	description,
	githubLink,
	liveLink,
	liveImageLink,
	liveImageLinkAlt,
	sourceCodeLink,
	sourceUrl,
	projectImg,
	projectTechInfo,
	status,
}) {

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
		<div ref={containerRef} className="project-cards-container">
			<div className="project-cards-sub-container box">
				<div className="project-view-card">
					<a className="redirect-project-link"
						href={liveLink}
						target="_blank"
						rel="noopener noreferrer">
						<img id="thumbnail" src={projectImg} alt="project-image" />
						</a>
				</div>
				<div className="project-info-card">
					<h1 id="project-title">{title}</h1>
					{/*<h2 id="project-tech-info">{projectTechInfo}</h2>*/}
					<a
					    className="info-redirect-project-link"
						href={liveLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							id="live-image-link"
							src={liveImageLink}
							alt={liveImageLinkAlt}
						/>
					</a>
					{/*<a
						href={sourceCodeLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						{sourceUrl}
					</a>*/}
					<hr className="bar" />
		 {status && <StatusIndicator status={status} />}
				</div>
			</div>
		</div>
	);
}

export default ProjectCards;
