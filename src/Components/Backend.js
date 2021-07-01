import React from "react";
import img from "../imgs/metric.JPG";
import img2 from "../imgs/url.JPG";
import img3 from "../imgs/filemicroservice.JPG";
import Navbar from "./Navbar";

function Backend() {
	// Render component
	return (
		<div>
			<Navbar />
			<div className="container-fluid" id="backend">
				<div className="row">
					<h1>Backend</h1>
					<div className="col-md-4">
						<img className="resize2" src={img} alt="backend-img1" />
						<p className="p-2 text-justify">
							A back end app which will convert a users measurement to the
							desired output. Built using NodeJS.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/metricconverter"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://ggnino-metricconverter.glitch.me/"
							className="btn btn-outline-primary"
						>
							Live Version
						</a>
					</div>
					<div className="col-md-4">
						<img className="resize2" src={img2} alt="backend-img2" />
						<p className="p-2 text-justify">
							A back end microservice, which takes a url and shortens it. The
							shorten url will redirect to the original link. Built using
							NodeJS.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/urlshortner"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://ggnino-urlshortner.glitch.me/"
							className="btn btn-outline-primary"
						>
							Live Version
						</a>
					</div>
					<div className="col-md-4">
						<img className="resize2" src={img3} alt="backend-img3" />
						<p className="p-2 text-justify">
							Another back end microservice which the user can upload a file.
							Which in return will receive a JSON response with file info. Built
							using NodeJs.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ggnino/filemetadataservice"
							className="btn btn-outline-success"
						>
							Source Code
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://ggnino-filemetadataservice.glitch.me/"
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

export default Backend;
