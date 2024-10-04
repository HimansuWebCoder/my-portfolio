import "./ProjectCards.css";

function ProjectCards() {
	return (
		<div className="project-cards-container">
			<div className="project-view-card">
				<ul>
					<li>
						<a
							href="https://github.com/HimansuWebCoder"
							target="_blank"
						>
							Himansu
						</a>
					</li>
					<li>
						<a
							href="https://himansuwebcoder.github.io/Cats-Friend-Hooks/"
							target="_blank"
						>
							GitHub Live Preview
						</a>
					</li>
					<li>
						<a
							href="https://github.com/HimansuWebCoder/Cats-Friend-Hooks"
							target="_blank"
						>
							Source Code
						</a>
					</li>
				</ul>
			</div>
			<div className="project-info-card">
				<h1>Cats-Friends Web Application</h1>
				<h2>Frontend-End Project</h2>
				<hr className="bar" />
				<p>A cats-friends colony to choose your cats</p>
			</div>
		</div>
	);
}

export default ProjectCards;
