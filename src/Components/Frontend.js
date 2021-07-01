import React from "react";
import img from "../imgs/calculator.PNG";
import img2 from "../imgs/roseshop.PNG";
import img3 from "../imgs/uglyblog.PNG";
import Navbar from "./Navbar";

function Frontend() {
	// Render component
	return (
		<div>
			<Navbar />
			<div className="container-fluid" id="frontend">
				<div className="row">
					<h1>Front-End</h1>
					<div className="col-md-4">
						<img className="resize2" src={img} alt="frontend-img" />
						<p className="p-2 text-justify">
							A calculator app for normal operations. Plus, it has a binary mode
							for binary numbers. Built this with Reactjs and CSS
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/binCalculator"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://gg-calculator.herokuapp.com"
							className="btn btn-outline-primary"
						>
							Live Version
						</a>
					</div>
					<div className="col-md-4">
						<img className="resize2" src={img2} alt="frontend-img2" />
						<p className="p-2 text-justify">
							A mock design for a client with a rose shop. The design goal was
							to be simple and straight forward for the user. Built this simple
							app with react and some css.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/clientDesign"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://gg-client-design.herokuapp.com/"
							className="btn btn-outline-primary"
						>
							Live Version
						</a>
					</div>
					<div className="col-md-4">
						<img className="resize2" src={img3} alt="frontend-img3" />
						<p className="p-2 text-justify">
							A mock design for a client that needed a redesign for their blog.
							Built this app using Bootstrap/CSS and Reactjs
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/uglyBlog"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://gg-blog-redesign.herokuapp.com"
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

export default Frontend;
