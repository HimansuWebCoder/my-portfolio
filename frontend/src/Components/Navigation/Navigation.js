import { Outlet, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navigation.css";

function Navigation() {
	return (
		<div className="nav-container">
			<Logo />
			<div className="routes-container">
				<div className="menu-container">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<ul className="links-container">
					<li>
						<Link to="/about">About me</Link>
					</li>
					<li>
						<Link to="/skills">My Skills</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
