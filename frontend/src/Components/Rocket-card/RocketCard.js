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
				<h2>Himansu Naik</h2>
				<h3>Full-Stack Javascript Developer</h3>
			</div>
		</div>
	);
}

export default RocketCard;
