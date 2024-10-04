import Links from "../Links/Links";
import "./AboutCard.css";

function AboutCard() {
	return (
		<div className="about-container">
			<div className="profile-img-container">
				<img src="/logo.jpg" alt="img" />
			</div>
			<hr className="bar" />
			<h1>Himansu Naik</h1>
			<div className="about-description-container">
				<p>
					Hii, I am Himansu, Full-stack Javascript Developer, Welcome
					to my portfolio
				</p>
			</div>
			<div className="links-container">
				<Links
					url="https://www.linkedin.com/in/himansunaik/"
					img="/assets/images/linkedin.png"
				/>

				<Links
					url="https://github.com/HimansuWebCoder"
					img="/assets/images/github.png"
				/>
			</div>
		</div>
	);
}

export default AboutCard;
