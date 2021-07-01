import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../imgs/heart.png";
import img2 from "../imgs/coding2.png";
import img3 from "../imgs/showy.gif";
import img4 from "../imgs/showy2.gif";
import Navbar from "./Navbar";
function Main() {
	// useState hook for styling
	const [style, setStyle] = useState({
		background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img3}) no-repeat center center rgb(35, 22, 46)`,
		imgOn: false,
		animate: true,
		class: "",
		class2: "",
	});

	// Event handler for when to style the component
	const clicker = (e) => {
		if (e.target.id === "btn2") {
			if (style.animate)
				setStyle({
					...style,
					class: "ld ld-heartbeat",
					class2: "ld ld-tremble",
					animate: !style.animate,
				});
			else
				setStyle({ ...style, class: "", class2: "", animate: !style.animate });
			return;
		}
		if (style.imgOn) {
			setStyle({
				...style,
				background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img3}) no-repeat center center rgb(35, 22, 46)`,
				imgOn: !style.imgOn,
			});
		} else
			setStyle({
				...style,
				background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img4}) no-repeat center center rgb(35, 22, 46)`,
				imgOn: !style.imgOn,
			});
	};

	// Render component
	return (
		<>
			<Navbar />
			<div className="container-fluid" id="main" style={style}>
				<h1>The Computer Wizard</h1>
				<h2>
					Who <img className={style.class} src={img} alt="love" />
					<br /> To <br /> Code{" "}
					<img className={style.class2} src={img2} alt="coding" />
				</h2>
				<Link to="/about">
					<button
						className="btn btn-outline-primary"
						type="button"
						onMouseEnter={clicker}
						onMouseOut={clicker}
						id="btn1"
					>
						About Me
					</button>
				</Link>
				<Link className="nav-link" to="/portfolio">
					<button
						className="btn btn-outline-success"
						type="button"
						id="btn2"
						onMouseEnter={clicker}
						onMouseOut={clicker}
					>
						My Portfolio
					</button>
				</Link>
			</div>
		</>
	);
}
export default Main;
