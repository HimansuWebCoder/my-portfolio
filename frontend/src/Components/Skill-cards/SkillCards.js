import "./SkillCards.css";

function SkillCard({ src, skillName }) {
	return (
		<div id="skills" className="skills-card-container  anchor-offset">
			<div className="skills-sub-container">
				<img className="skill-img" src={src} alt="img" />
				<h1 id="skills-name">{skillName}</h1>
			</div>
		</div>
	);
}

export default SkillCard;
