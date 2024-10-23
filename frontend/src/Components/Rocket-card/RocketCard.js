import "./RocketCard.css";

function RocketCard() {
	return (
		<div className="rocket-card-container">
			<div className="rocket-img-container">
				<img
					id="rocket-img"
					src="/assets/images/rocket.png"
					alt="rocket"
				/>
			</div>
			<div className="rocket-card-info">
				<h2 id="profile-about-name">Himansu Naik</h2>
				<p id="profile-about-description">Full-Stack Web Developer</p>
			</div>
		</div>
	);
}

export default RocketCard;
