import RocketCard from "../../Components/Rocket-card/RocketCard";
import "./Contacts.css";

function Contact() {
	return (
		<div className="contact-sub-container">
			<div>
				<h2>Contact Me</h2>
				<a
					href="tel:+91-9861194145"
					target="_blank"
					rel="noopener noreferrer"
				>
					+919861194145
				</a>
			</div>
			<div>
				<h2>Email:</h2>
				<a
					href="intent://send?to=naikhimansu546@gmail.com&subject=Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about...#Intent;scheme=gmail;package=com.google.android.gm;end"
					target="_blank"
					rel="noopener noreferrer"
				>
					naikhimansu546@gmail.com
				</a>
			</div>
			<div>
				<h2>WhatsApp:</h2>
				<a
					href="https://wa.me/9861194145"
					target="_blank"
					rel="noopener noreferrer"
				>
					Message Me on WhatsApp
				</a>
			</div>
		</div>
	);
}

export default Contact;
