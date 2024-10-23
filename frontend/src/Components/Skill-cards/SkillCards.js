import "./SkillCards.css";

function SkillCard({ src, skillName }) {
	return (
		<div className="skills-card-container">
			<div className="skills-sub-container">
				<img className="skill-img" src={src} alt="img" />
				<h1>{skillName}</h1>
			</div>
		</div>
	);
}

export default SkillCard;
