import ProjectCard from "../../Components/Project-cards/ProjectCards";

function Projects() {
	return (
		<div>
			<ProjectCard
				title="Cats-Friends Web Applications"
				description="A cats-friends colony to choose your cats"
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://himansuWebCoder.github.io/Cats-Friend-Hooks/"
				sourceCodeLink="https://github.com/HimansuWebCoder/Cats-Friend-Hooks"
			/>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
}

export default Projects;
