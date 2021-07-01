import "./App.css";
import Main from "./Components/Main";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Backend from "./Components/Backend";
import Fullstack from "./Components/Fullstack";
import Frontend from "./Components/Frontend";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/portfolio">
					<Portfolio />
				</Route>
				<Route path="/backend">
					<Backend />
				</Route>
				<Route path="/fullstack">
					<Fullstack />
				</Route>
				<Route path="/frontend">
					<Frontend />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
