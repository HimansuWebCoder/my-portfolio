import ProjectCard from '../../Components/Project-cards/ProjectCards'
// import StatusIndicator from "../../Components/StatusIndicator/StatusIndicator";
import './Project.css'

// className="flex h-auto justify-center flex-wrap  max-w-[100vw]  mt-[10px] mb-[50px]"

function Projects() {
	return (
		<div className="project-box-container">
			<ProjectCard
				title="M.R Kalakars Dance Studio"
				description=""
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://dance-studio-mr-kalakar.vercel.app/"
				sourceCodeLink="https://github.com/HimansuWebCoder/dance-studio"
				projectImg="/assets/images/mrkalakarsdancestudio.png"
				projectTechInfo="Frontend Project"
				liveImageLink="/assets/images/link.png"
				liveImageLinkAlt="live-project-link"
				sourceUrl="Source Code"
				status="completed"
			/>
			<ProjectCard
				title="Pihu Makeup Studio & Salon"
				description="A Beauty Spa Salon Website to visit for beauty"
				githubLink="https://github.com/HimansuWebCoder"
				liveLink="https://pihumakeupstudio.com"
				sourceCodeLink="https://github.com/HimansuWebCoder/pihu-makeup-studio-and-salon"
				projectImg="/assets/images/pihu-makeup-studio-img.png"
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
				title="Tripathy Financial Consultant"
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
		</div>
	)
}

export default Projects
