import "./Links.css";
function Links() {
	return (
		<div className="social-links-container">
			<ul className="social-links-sub-container">
				<li>
					<a
						href="https://github.com/HimansuWebCoder"
						target="_blank"
					>
						<img
							className="links-icon"
							src="/assets/images/linkedin.png"
							alt="img"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/himansunaik/"
						target="_blank"
					>
						<img
							className="links-icon"
							src="/assets/images/github.png"
							alt="img"
						/>
					</a>
				</li>
				<li>
					<a href="">
						<img
							className="links-icon"
							src="/assets/images/linkedin.png"
							alt="img"
						/>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Links;
