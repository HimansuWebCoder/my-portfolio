import RocketCard from "../../Components/Rocket-card/RocketCard";
import "./Skills.css";

function Skills() {
	return (
		<div className="skills-container">
			<div className="skills-main-container">
				<div className="skills-sub-container">
					<a>
						<img
							className="skill-img"
							src="/assets/images/html.png"
						/>
					</a>
					<h1>Html</h1>
				</div>

				<div className="skills-sub-container">
					<a>
						<img
							className="skill-img"
							src="/assets/images/css.png"
						/>
					</a>
					<h1>Css</h1>
				</div>

				<div className="skills-sub-container">
					<a>
						<img
							className="skill-img"
							src="/assets/images/javascript.png"
						/>
					</a>
					<h1>Javascript</h1>
				</div>

				<div className="skills-sub-container">
					<a>
						<img
							className="skill-img"
							src="/assets/images/react.png"
						/>
					</a>
					<h1>React.js</h1>
				</div>

				<div className="skills-sub-container">
					<a>
						<img
							className="skill-img"
							src="/assets/images/nodejs.png"
						/>
					</a>
					<h1>Node.js</h1>
				</div>

				<div className="skills-sub-container">
					<a>
						<img
							className="skill-img"
							src="/assets/images/express.png"
						/>
					</a>
					<h1>Express.js</h1>
				</div>

				<div className="skills-sub-container">
					<a>
						<img
							className="skill-img"
							src="/assets/images/postgresql.png"
						/>
					</a>
					<h1>PostgreSQL</h1>
				</div>
			</div>
		</div>
	);
}

export default Skills;
