import { Outlet, Link } from "react-router-dom";

import Navigation from "../../Components/Navigation/Navigation";
import AboutCard from "../../Components/About-card/AboutCard";
import RocketCard from "../../Components/Rocket-card/RocketCard";
import Skills from "../../Routes/Skills/Skills";
import ProjectCards from "../../Routes/Projects/Projects";
import Contact from "../../Routes/Contact/Contact";
import Services from "../../Routes/Services/Services";
import Footer from "../../Components/Footer/Footer";
import HeaderIntros from "./HeaderIntroSections";
import "./Layout.css";

function Layout() {
	return (
		<div className="layout-container">
			<Navigation />
			{/*<RocketCard/>*/}
			<AboutCard/>
			<hr className="h-bars"/>
			<HeaderIntros name="Tech Stack & Skills" headerIntroLineWidth="180" />
			<Skills/>
			<hr className="h-bars"/>
			<HeaderIntros name="My Services" headerIntroLineWidth="180" />
			<Services />
			<hr className="h-bars"/>
			<div className="intro-section-names">
			<HeaderIntros name="Projects I've Built" headerIntroLineWidth="180" />
			</div>
			<ProjectCards/>
			<hr className="h-bars"/>
			<HeaderIntros name="Get In Touch" headerIntroLineWidth="180" />
			<Contact/>
			<hr className="h-bars"/>

			{/*<Outlet />*/}
			{/*<Footer />*/}
		</div>
	);
}

export default Layout;
