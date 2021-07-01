import React from "react";
import img from "../imgs/resume.png";
import img2 from "../imgs/email.png";
import Navbar from "./Navbar";

function Contact() {
	// Render component
	return (
		<div>
			<Navbar />
			<div className="container-fluid" id="contact">
				<div className="row">
					<h1>Contact</h1>
					<div className="col-md-6">
						<a
							className="nav-link"
							target="_blank"
							rel="noreferrer"
							href="https://drive.google.com/file/d/1ORvCv62eLcVzlk4gaA7n5apDEPA_RMDJ/view?usp=sharing"
						>
							<img className="ld ld-bounce" src={img} alt="resume-img" />
							<p className="p-2 text-justify">Here is my resume.</p>
						</a>
					</div>
					<div className="col-md-6">
						<a
							className="nav-link"
							target="_blank"
							rel="noreferrer"
							href="mailto: ggnino18@gmail.com"
						>
							<img className="ld ld-blink" src={img2} alt="email-img" />
							<p className="p-2 text-justify">
								Want to know more about this web developer, please feel free to
								contact me through my email.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
