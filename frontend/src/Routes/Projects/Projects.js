import ProjectCard from "../../Components/Project-cards/ProjectCards";
// import StatusIndicator from "../../Components/StatusIndicator/StatusIndicator";
import "./Project.css";

// className="flex h-auto justify-center flex-wrap  max-w-[100vw]  mt-[10px] mb-[50px]"

function Projects() {
	return (
		<div className="project-box-container">
		<ProjectCard
					title="Pihu Makeup Studio & Salon"
					description="A Beauty Spa Salon Website to visit for beauty"
					githubLink="https://github.com/HimansuWebCoder"
					liveLink="https://pihumakeupstudio.com"
					sourceCodeLink="https://github.com/HimansuWebCoder/pihu-makeup-studio-and-salon"
					projectImg="/assets/images/pihu.png"
					projectTechInfo="Frontend Project"
					liveImageLink="/assets/images/link.png"
					liveImageLinkAlt="live-project-link"
					sourceUrl="Source Code"
					status="completed"
				/>
			<ProjectCard
					title="Sili Salon & Spa"
					description="A Beauty Spa Salon Website to visit for beauty"
					githubLink="https://github.com/HimansuWebCoder"
					liveLink="https://www.silisalon.com/"
					sourceCodeLink="https://github.com/HimansuWebCoder/silisalon"
					projectImg="/assets/images/silisalon2.png"
					projectTechInfo="Frontend Project"
					liveImageLink="/assets/images/link.png"
					liveImageLinkAlt="live-project-link"
					sourceUrl="Source Code"
					status="completed"
				/>

			<ProjectCard
				title="Achievers Institute"
				description="A Profile Store mini social media where user connected with other professionals."
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://www.achievers-institute.in"
				sourceCodeLink="https://github.com/HimansuWebCoder/achievers-institute"
				projectImg="/assets/images/achievers-institute.png"
				projectTechInfo="Frontend Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
				sourceUrl="Source Code"
				status="completed"
			/>
				<ProjectCard
				title="Tripathy Finanical Consultant"
				description="A Financial Consultant Website"
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://tripathy-financial-consulstant-dsqn.vercel.app/"
				sourceCodeLink="https://github.com/HimansuWebCoder/tripathy_financial_consulstant"
				projectImg="/assets/images/tripathy.png"
				projectTechInfo="FullStack Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
				sourceUrl="Source Code"
				status="pending"
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
				status="ongoing"
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
				status="completed"
			/>
			{/*<ProjectCard
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
				status="pending"
			/>*/}

			
		</div>
	);
}

export default Projects;
