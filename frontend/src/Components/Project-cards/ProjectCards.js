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
}) {
	return (
		<div className="project-cards-container">
			<div className="project-view-card">
				<img src={projectImg} alt="project-image" />
			</div>
			<div className="project-info-card">
				<h1 id="project-title">{title}</h1>
				<h2 id="project-tech-info">{projectTechInfo}</h2>
				<a href={liveLink} target="_blank" rel="noopener noreferrer">
					<img
						id="live-image-link"
						src={liveImageLink}
						alt={liveImageLinkAlt}
					/>
				</a>
				<a
					href={sourceCodeLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					{sourceUrl}
				</a>
				<hr className="bar" />
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectCards;
