import Links from "../Links/Links";
import "./AboutCard.css";

function AboutCard() {
	return (
		<div className="about-container">
			<div className="profile-img-container">
				<img src="/assets/images/user.png" />
			</div>
			<hr className="bar" />
			<h1>Himansu Naik</h1>
			<div className="about-description-container">
				<p>
					Hii, I am Himansu, Full-stack Javascript Developer, Welcome
					to my portfolio
				</p>
			</div>
			<Links />
		</div>
	);
}

export default AboutCard;
