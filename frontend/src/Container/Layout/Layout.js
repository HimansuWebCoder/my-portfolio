import { Outlet, Link } from "react-router-dom";

import Navigation from "../../Components/Navigation/Navigation";
import AboutCard from "../../Components/About-card/AboutCard";
import RocketCard from "../../Components/Rocket-card/RocketCard";
import Skills from "../../Routes/Skills/Skills";
import ProjectCards from "../../Routes/Projects/Projects";
import Contact from "../../Routes/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import "./Layout.css";

function Layout() {
	return (
		<div className="layout-container">
			<Navigation />
			{/*<RocketCard/>*/}
			<AboutCard/>
			<hr className="h-bars"/>
			<Skills/>
			<hr className="h-bars"/>
			<ProjectCards/>
			<hr className="h-bars"/>
			<Contact/>
			<hr className="h-bars"/>

			{/*<Outlet />*/}
			{/*<Footer />*/}
		</div>
	);
}

export default Layout;
