import ProjectCard from "../../Components/Project-cards/ProjectCards";
import "./Project.css";

// className="flex h-auto justify-center flex-wrap  max-w-[100vw]  mt-[10px] mb-[50px]"

function Projects() {
	return (
		<div className="project-box-container">
			<ProjectCard
					title="Sili Salon & Spa"
					description="A Beauty Spa Salon Website to visit for beauty"
					githubLink="https://github.com/HimansuWebCoder"
					liveLink="https://www.silisalon.com/"
					sourceCodeLink="https://github.com/HimansuWebCoder/silisalon"
					projectImg="/assets/images/silisalon.png"
					projectTechInfo="Frontend Project"
					liveImageLink="/assets/images/link.png"
					liveImageLinkAlt="live-project-link"
					sourceUrl="Source Code"
				/>
				<ProjectCard
				title="Tripathy Finanical Consultant"
				description="A Financial Consulatant Website"
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://tripathy-financial-consulstant-dsqn.vercel.app/"
				sourceCodeLink="https://github.com/HimansuWebCoder/tripathy_financial_consulstant"
				projectImg="/assets/images/tripathy.png"
				projectTechInfo="FullStack Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
				sourceUrl="Source Code"
			/>
			<ProjectCard
				title="Profile Store Mini Social Media"
				description="A Profile Store mini social media where user connected with other professionals."
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://profile-store-frontend.vercel.app"
				sourceCodeLink="https://github.com/HimansuWebCoder/Profile-Store-Mini-Social-Media"
				projectImg="/assets/images/profile-store-mini-social-media.jpg"
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
			<ProjectCard
				title="FullStack Blog Platform"
				description="Blog platform"
				githubLink="https://github.com/HimansuWebCoder/Full_Stack_Blog_Website"
				liveLink="https://blog-app-frontend-gjg4grgyddbpb5f4.israelcentral-01.azurewebsites.net/"
				sourceCodeLink="https://github.com/HimansuWebCoder/Full_Stack_Blog_Website"
				projectImg="/assets/images/blog.png"
				projectTechInfo="Frontend Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
				sourceUrl="Source Code"
			/>

			
		</div>
	);
}

export default Projects;
