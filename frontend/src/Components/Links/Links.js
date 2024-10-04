import "./Links.css";
function Links({ url, img }) {
	return (
		<div className="social-links-container">
			<ul className="social-links-sub-container">
				<li>
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img className="links-icon" src={img} alt="img" />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Links;
