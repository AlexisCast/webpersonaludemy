import React, { Fragment, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import useAuth from "../hook/useAuth";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn";

import { getAccessTokenApi, getRefreshTokenApi } from "../api/auth";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
	const { routes } = props;
	const [menuCollapsed, setMenuCollapsed] = useState(false);
	const { Header, Content, Footer } = Layout;

	const { user, isLoading } = useAuth();

	console.log("user", user);
	console.log("isLoading", isLoading);
	// const user = null;

	// const accessToken = getAccessTokenApi();
	// console.log("getAccessTokenApi", accessToken);
	// const refreshToken=getRefreshTokenApi();
	// console.log("refreshToken", refreshToken);

	if (!user && !isLoading) {
		return (
			<Fragment>
				<Route path="/admin/login/" component={AdminSignIn} />
				<Redirect to="/admin/login" />
			</Fragment>
		);
	}

	// console.log("LayoutAminProps", props);
	if (user && !isLoading) {
		return (
			<Layout>
				<MenuSider menuCollapsed={menuCollapsed} />
				<Layout
					className="layout-admin"
					style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
				>
					<Header className="layout-admin__header">
						<MenuTop
							menuCollapsed={menuCollapsed}
							setMenuCollapsed={setMenuCollapsed}
						/>
					</Header>
					<Content className="layout-admin__content">
						<LoadRoutes routes={routes} />
					</Content>
					<Footer className="layout-admin__footer">
						Web Personal Client
					</Footer>
				</Layout>
			</Layout>
		);
	}
	return null;
}

function LoadRoutes(props) {
	const { routes } = props;
	// console.log("LoadRoutersprops_Admin", props);

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
