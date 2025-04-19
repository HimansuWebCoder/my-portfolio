import StatusIndicator from "../StatusIndicator/StatusIndicator";
import "./ProjectCards.css";

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
	return (
		<div className="project-cards-container">
			<div className="project-cards-sub-container">
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
