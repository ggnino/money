import React, { useState, useEffect } from "react";
import brand from "../imgs/222.png";
import { Link } from "react-router-dom";

function Navbar() {
	// useState hook for styling
	const [style, setStyle] = useState({
		style: {},
		style2: {},
		style3: {},
		home: { cursor: "", href: "/" },
	});

	// useEffecct hook to style component based on url path
	useEffect(() => {
		if (window.location.pathname === "/") {
			setStyle((style) => {
				return { ...style, home: { cursor: "default", href: "" } };
			});
		}
		if (
			window.location.pathname === "/portfolio" ||
			window.location.pathname === "/backend" ||
			window.location.pathname === "/fullstack" ||
			window.location.pathname === "/frontend"
		) {
			setStyle((style) => {
				return {
					...style,
					style: {
						color: "purple",
						borderRadius: "5%",
						textShadow: "0px 10px 5px purple ",
					},
				};
			});
		}
		if (window.location.pathname === "/about") {
			setStyle((style) => {
				return {
					...style,
					style2: {
						color: "purple",
						borderRadius: "5%",
						textShadow: "0px 10px 5px purple",
					},
				};
			});
		}
		if (window.location.pathname === "/contact") {
			setStyle((style) => {
				return {
					...style,
					style3: {
						color: "purple",
						borderRadius: "5%",
						textShadow: "0px 10px 5px purple ",
					},
				};
			});
		}
	}, []);

	// Render component
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
				<div className="container-fluid">
					<Link style={style.home} to={style.home.href}>
						<img id="navBrand" alt="navBrand" src={brand} />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									<span style={style.style2}>About</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/portfolio">
									<span style={style.style}>Portfolio</span>
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									<span style={style.style3}>Contact</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
