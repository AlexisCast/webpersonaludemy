import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

import AdminHome from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.scss";

function App() {
	return (
		<Router>
			<Switch>
				{routes.map((route, index) => (
					<RouteWithSubRoutes key={index} {...route} />
				))}
			</Switch>
		</Router>
	);
}

function RouteWithSubRoutes(route) {
	console.log("RouteWithSubRoutesroute", route);
	return (
		<Route
			path={route.path}
			component={route.exact}
			render={(props) => (
				<route.component routes={route.routes} {...props} />
			)}
		/>
	);
}

export default App;
