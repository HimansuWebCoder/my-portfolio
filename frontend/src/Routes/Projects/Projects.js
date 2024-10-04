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
			<ProjectCard
				title="Robo-Friends Web Application"
				description="A Robo-Friends group to choose your favourite robots"
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://himansuWebCoder.github.io/robofriends"
				sourceCodeLink="https://github.com/HimansuWebCoder/robofriends"
			/>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
}

export default Projects;
