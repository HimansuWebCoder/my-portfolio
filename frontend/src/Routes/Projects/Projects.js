import ProjectCard from "../../Components/Project-cards/ProjectCards";
import "./Projects.css";

function Projects() {
	return (
		<div className="projects-container">
			<ProjectCard
				title="Profile Store Mini Social Media"
				description="A Profile Store mini social media where user connected with other professionals."
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://profile-store-mini-social-media.onrender.com"
				sourceCodeLink="https://github.com/HimansuWebCoder/Profile-Store-Mini-Social-Media"
				projectImg="/assets/images/profile-store.png"
				projectTechInfo="FullStack Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
				sourceUrl="Source Code"
			/>
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
				sourceUrl="Source Code"
			/>
		</div>
	);
}

export default Projects;
