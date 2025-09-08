import { Outlet, Link } from 'react-router-dom'
import Motion from '../../Motion' // path to the Drag component

import Navigation from '../../Components/Navigation/Navigation'
import HomeCard from '../../Components/Home/Home'
import AboutCard from '../../Components/About-card/AboutCard'
import Testimonial from '../../Components/Testimonials/testimonial'
import RocketCard from '../../Components/Rocket-card/RocketCard'
import Skills from '../../Routes/Skills/Skills'
import ProjectCards from '../../Routes/Projects/Projects'
import Contact from '../../Routes/Contact/Contact'
import Services from '../../Routes/Services/Services'
import Footer from '../../Components/Footer/Footer'
import HeaderIntros from './HeaderIntroSections'
import './Layout.css'

function Layout() {
	return (
		<div className="layout-container">
			<Motion />
			<Navigation />
			{/*<RocketCard/>*/}
			<HomeCard />
			<HeaderIntros
				ids="about"
				name="About Me"
				headerIntroLineWidth="180"
			/>
			<AboutCard />
			{/*<hr className="h-bars"/>*/}
			<HeaderIntros
				ids="skills"
				name="Tech Stack & Skills"
				headerIntroLineWidth="180"
			/>
			<Skills />
			{/*<hr className="h-bars"/>*/}
			<HeaderIntros
				ids="services"
				name="My Services"
				headerIntroLineWidth="180"
			/>
			<Services />
			{/*<hr className="h-bars"/>*/}
			<div className="intro-section-names">
				<HeaderIntros
					ids="projects"
					name="Projects I've Built"
					headerIntroLineWidth="180"
				/>
			</div>
			<ProjectCards />
			<HeaderIntros
				ids="testimonial"
				name="Testimonials & Recommendations"
				headerIntroLineWidth="180"
			/>
			<Testimonial />
			{/*<hr className="h-bars"/>*/}
			<HeaderIntros
				ids="contact"
				name="Get In Touch"
				headerIntroLineWidth="180"
			/>
			<Contact />
			{/*<hr className="h-bars"/>*/}

			{/*<Outlet />*/}
			{/*<Footer />*/}
		</div>
	)
}

export default Layout
