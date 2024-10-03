import { Outlet, Link } from "react-router-dom";

import Navigation from "../../Components/Navigation/Navigation";

function Layout() {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	);
}

export default Layout;
