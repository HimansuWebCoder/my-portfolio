import Links from "../Links/Links";
import "./AboutCard.css";

function AboutCard() {
	return (
		<div id="about" className="about-container anchor-offset">
			<div className="profile-img-container">
				<img src="/logo.jpg" alt="img" />
			</div>
			<hr className="bar" />
			<h1 id="profile-name">Himansu Naik</h1>
			<div className="links-container">
				<Links
				    id="social-link"
					url="https://www.linkedin.com/in/himansunaik/"
					img="/assets/images/linkedin.png"
				/>

				<Links
				    id="social-link2"
					url="https://github.com/HimansuWebCoder"
					img="/assets/images/github.webp"
				/>
			</div>
			<div className="intro-section-names">
			<h1 id="about-header">About Me</h1>
			</div>
			<hr className="h-bars"/>
			<div className="about-description-container">
				<p id="profile-intro">
					Hii,👋 I am 
🅷🅸🅼🅰🅽🆂🆄, 🇫​​🇺​​🇱​​🇱​-​🇸​​🇹​​🇦​​🇨​​🇰​ ​ ​🇩​​🇪​​🇻​​🇪​​🇱​​🇴​​🇵​​🇪​​🇷​, Welcome to my
					portfolio. I’m a passionate full-stack developer with
					hands-on experience in building web applications from front
					to back. I specialize in creating efficient, scalable, and
					user-friendly solutions using modern web technologies.{" "}
					{/*<strong>My expertise includes</strong>:<br />
					<i>Frontend Development</i>: HTML, CSS, JavaScript, React.js
					<br />
					<i>Backend Development</i>: Node.js, Express, REST APIs{" "}
					<br /> <i>Databases</i>: PostgreSQL <br />{" "}
					<i>Cloud Services</i>: Cloudinary (for media storage),
					Render or AWS (for deployment)
					<br /> <i>Other Tools</i>: Git, Docker, Passport.js (for
					authentication)*/}
					<br /> I enjoy solving complex problems and thrive in
					environments where I can contribute to building robust
					applications that meet users' needs. I believe in writing
					clean, maintainable code and continuously improving my
					skills through learning and hands-on experience.
					<br />
					<i>
						Feel free to explore my projects, and I’d love to
						connect to discuss how I can contribute to your team
					</i>
				</p>
			</div>
		</div>
	);
}

export default AboutCard;
