import ProjectCard from "../../Components/Project-cards/ProjectCards";

function Projects() {
	return (
		<div className="flex h-auto justify-center flex-wrap  max-w-[100vw] border border-black mt-[10px] mb-[50px]">
			<ProjectCard
				title="Profile Store Mini Social Media"
				description="A Profile Store mini social media where user connected with other professionals."
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://profile-store-frontend.vercel.app"
				sourceCodeLink="https://github.com/HimansuWebCoder/Profile-Store-Mini-Social-Media"
				projectImg="/assets/images/thumbnail profile store.jpg"
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
