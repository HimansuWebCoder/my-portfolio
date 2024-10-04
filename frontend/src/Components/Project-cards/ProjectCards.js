import "./ProjectCards.css";

function ProjectCards({
	title,
	description,
	githubLink,
	liveLink,
	sourceCodeLink,
	projectImg,
	projectTechInfo,
}) {
	return (
		<div className="project-cards-container">
			<div className="project-view-card">
				<img src={projectImg} alt="project-image" />
			</div>
			<div className="project-info-card">
				<h1>{title}</h1>
				<h2>{projectTechInfo}</h2>
				<a href="" rel="noopener noreferrer">
					Live
				</a>
				<a href="" rel="noopener noreferrer">
					Live
				</a>
				<hr className="bar" />
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectCards;

/*
<ul>
					<li>
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							Himansu
						</a>
					</li>
					<li>
						<a
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub Live Preview
						</a>
					</li>
					<li>
						<a
							href={sourceCodeLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							Source Code
						</a>
					</li>
				</ul>
				*/
