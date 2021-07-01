import React from "react";
import img from "../imgs/html.png";
import img2 from "../imgs/css.png";
import img3 from "../imgs/js.png";
import img4 from "../imgs/mongo.png";
import img5 from "../imgs/nodejs.png";
import img6 from "../imgs/npm.png";
import img7 from "../imgs/react.png";
import img8 from "../imgs/ps.png";
import img9 from "../imgs/bootstrap.png";
import Navbar from "./Navbar";

function About() {
	// Render component
	return (
		<div>
			<Navbar />
			<div className="container-fluid" id="about">
				<div className="row">
					<div className="col-md-8 ld ld-wander-v" id="skill">
						<p>
							Hi, Im Guillermo Gonzalez, a web developer who feels like a wizard
							behind a computer screen. My coding journey started in community
							college, but I ended up teaching myself the all powerful MERN
							stack. I love to code and build different apps, also love learning
							different languages/frameworks/libraries. Anytime I get an
							opportunity to learn something, I think of it as adding a new
							"spell" in my "spell book". Everytime I build an app, I think of
							it as making magic on a computer. I am looking for a company,
							where I can have an impact, learn from great people; and where I
							can blossom into an excellent developer.
						</p>
					</div>
					<div className="col-md-4 ld ld-wander-v" id="skills">
						<img className=" ld ld-swing resize" src={img} alt="" />
						<img className="resize ld ld-swing" src={img2} alt="" />
						<img className="resize ld ld-swing" src={img3} alt="" />
						<img className="resize ld ld-tick" src={img7} alt="" />
						<img className="resize ld ld-tick" src={img4} alt="" />
						<img className="resize ld ld-tick" src={img5} alt="" />
						<img className="resize ld ld-wrench" src={img6} alt="" />
						<img className="resize ld ld-wrench" src={img8} alt="" />
						<img className="resize ld ld-wrench" src={img9} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;
