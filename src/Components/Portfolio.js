import React from "react";
import { Link } from "react-router-dom";
import img from "../imgs/fe.png";
import img2 from "../imgs/be.png";
import img3 from "../imgs/full.png";
import Navbar from "./Navbar";

function Portfolio() {
	// Render component
	return (
		<div>
			<Navbar />
			<div className="container-fluid" id="portfolio">
				<div className="row">
					<h1>Portfolio</h1>
					<p className="mb-2">
						(Apps are on a free hosting service. Loading may be a little slow.)
					</p>
					<div className="col-md-4">
						<Link className="nav-link" to="/frontend">
							<img src={img} alt="front-end-img" />
							<h1>Front-End</h1>
						</Link>
					</div>
					<div className="col-md-4">
						<Link className="nav-link" to="/fullstack">
							<img src={img3} alt="full-stack-img" />
							<h1>Full-Stack</h1>
						</Link>
					</div>
					<div className="col-md-4">
						<Link className="nav-link" to="/backend">
							<img src={img2} alt="back-end-img" />
							<h1>Back-End</h1>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Portfolio;
