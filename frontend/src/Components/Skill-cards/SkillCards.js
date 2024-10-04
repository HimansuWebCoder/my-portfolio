import "./SkillCards.css";

function SkillCard({ src, skillName }) {
	return (
		<div className="skills-container">
			<div className="skills-main-container">
				<div className="skills-sub-container">
					<a>
						<img className="skill-img" src={src} alt="img" />
					</a>
					<h1>{skillName}</h1>
				</div>
			</div>
		</div>
	);
}

export default SkillCard;
