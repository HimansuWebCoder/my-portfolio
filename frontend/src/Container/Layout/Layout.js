import { Outlet, Link } from "react-router-dom";

import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";

function Layout() {
	return (
		<div>
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
