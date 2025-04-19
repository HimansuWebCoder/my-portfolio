import SkillCard from "../../Components/Skill-cards/SkillCards";
import "./Skills.css";

function Skills() {
	return (
		<div className="skills-container">
			<div className="skills-main-container">
				<SkillCard src="/assets/images/css.png" skillName="Css" />
				<SkillCard src="/assets/images/html.png" skillName="Html" />
				<SkillCard src="/assets/images/tailwindcss.svg" skillName="Tailwindcss" />
				<SkillCard src="/assets/images/javascript.png" skillName="Javascript"/>
				<SkillCard src="/assets/images/react.png" skillName="React" />
				<SkillCard src="/assets/images/nodejs.png" skillName="Node" />
				<SkillCard src="/assets/images/express.png"skillName="Express"/>
				<SkillCard src="/assets/images/postgresql.png"skillName="PostgreSQL"/>
				<SkillCard src="/assets/images/Git.png"skillName="Git"/>
			</div>
		</div>
	);
}

export default Skills;
