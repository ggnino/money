import React from "react";
import img from "../imgs/fitapp.PNG";
import img2 from "../imgs/fixerup.PNG";
import img3 from "../imgs/library.JPG";
import Navbar from "./Navbar";

function Fullstack() {
	// Render Component
	return (
		<div>
			<Navbar />
			<div className="container-fluid" id="fullstack">
				<div className="row">
					<h1>Full-Stack</h1>
					<div className="col-md-4">
						<img className="resize2" src={img} alt="fullstack-img1" />
						<p className="p-2 text-justify">
							A exercise app built for tracking daily activites. You can
							register with a new user or login with user: Admin pw: 123456.
							Built this app with the MERN stack, passportjs and loading.io
							library.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/fitApp"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://gg-exercise-app.herokuapp.com/"
							className="btn btn-outline-primary"
						>
							Live Version
						</a>
					</div>
					<div className="col-md-4">
						<img className="resize2" src={img2} alt="fullstack-img2" />
						<p className="p-2 text-justify">
							A mock app for a start up IT service. Where the user can send
							their issue to be fixed and where the technician can login and
							view said issue. Built this app using Bootstrap 4/CSS and the MERN
							stack.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/fixerUpper"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://fixer-upper.herokuapp.com"
							className="btn btn-outline-primary"
						>
							Live Version
						</a>
					</div>
					<div className="col-md-4">
						<img className="resize2" src={img3} alt="fullstack-img3" />
						<p className="p-2 text-justify">
							A personal library app, where user can log all the books that have
							been read. User can also add a review to each entry into the
							library. Built using the MERN stack.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/personallibrary"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://ggnino-personallibrary.glitch.me/"
							className="btn btn-outline-primary"
						>
							Live Version
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Fullstack;
