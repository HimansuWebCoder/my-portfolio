import ProjectCard from "../../Components/Project-cards/ProjectCards";
import "./Projects.css";

function Projects() {
	return (
		<div className="projects-container">
			<ProjectCard
				title="Cats-Friends Web Applications"
				description="A cats-friends colony to choose your cats"
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://himansuWebCoder.github.io/Cats-Friend-Hooks/"
				sourceCodeLink="https://github.com/HimansuWebCoder/Cats-Friend-Hooks"
				projectImg="/assets/images/cats-friends.png"
				projectTechInfo="Frontend Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
			/>
			<ProjectCard
				title="Robo-Friends Web Application"
				description="A Robo-Friends group to choose your favourite robots"
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://himansuWebCoder.github.io/robofriends"
				sourceCodeLink="https://github.com/HimansuWebCoder/robofriends"
				projectImg="/assets/images/robo-friends.png"
				projectTechInfo="Frontend Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
			/>
			<ProjectCard welcome="Coming Soon" />
			<ProjectCard welcome="Coming Soon" />
			<ProjectCard welcome="Coming Soon" />
			<ProjectCard welcome="Coming Soon" />
		</div>
	);
}

export default Projects;
