import { Outlet, Link } from "react-router-dom";

import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import "./Layout.css";

function Layout() {
	return (
		<div className="layout-container">
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
