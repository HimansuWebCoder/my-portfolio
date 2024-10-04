import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
	return (
		<div className="logo-container">
			<Link className="home-route-link" to="/">
				<img id="profile-img" src="/logo.jpg" alt="logo" />
			</Link>
		</div>
	);
}

export default Logo;
