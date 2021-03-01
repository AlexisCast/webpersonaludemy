import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
	MenuUnfoldOutlined,
	PoweroffOutlined,
	MenuFoldOutlined,
} from "@ant-design/icons";
import { logout } from "../../../api/auth";

import clientLogo from "../../../assets/img/png/gomez.png";
// import clientLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
	// console.log("MenuTop props:", props);
	const { menuCollapsed, setMenuCollapsed } = props;

	const logoutUser = () => {
		console.log("Logging Out...");
		logout();
		window.location.reload();
	};

	return (
		<div className="menu-top">
			<div className="menu-top__left">
				<Link to={"/admin"}>
					<img
						className="menu-top__left-logo"
						src={clientLogo}
						alt="web personal client"
					/>
				</Link>
				<Button
					type="link"
					onClick={() => setMenuCollapsed(!menuCollapsed)}
				>
					{menuCollapsed ? (
						<MenuFoldOutlined />
					) : (
						<MenuUnfoldOutlined />
					)}
				</Button>
			</div>
			<div className="menu-top__right">
				<Button type="link" onClick={logoutUser}>
					<PoweroffOutlined />
				</Button>
			</div>
		</div>
	);
}
