import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
	const { routes } = props;
	const { Header, Content, Footer } = Layout;
	// console.log("LayoutAminProps", props);
	return (
		<Layout>
			<h1>Menu Sider Admin</h1>
			<Layout>
				<Header>Header...</Header>
				<LoadRoutes routes={routes} />
				<Footer>Web Personal Client</Footer>
			</Layout>
		</Layout>
	);
}

function LoadRoutes(props) {
	const { routes } = props;
	console.log("LoadRoutersprops_Admin", props);

	return (
		<Switch>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.component}
				/>
			))}
		</Switch>
	);
}
