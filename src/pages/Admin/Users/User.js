import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersApi, getUsersActiveApi } from "../../../api/user";
import ListUsers from "../../../components/Admin/Users/ListUsers";

import "./Users.scss";

export default function Users() {
	const [usersActive, setUsersActive] = useState([]);
	const [usersInactive, setUsersInactive] = useState([]);
	const token = getAccessTokenApi();

	// console.log("usersActive_", usersActive);
	// console.log("usersInactive_", usersInactive);

	useEffect(() => {
		getUsersActiveApi(token, true).then((response) => {
			setUsersActive(response.users);
		});
		getUsersActiveApi(token, false).then((response) => {
			setUsersInactive(response.users);
		});
	}, [token]);

	return (
		<div className="users">
			<ListUsers
				usersActive={usersActive}
				usersInactive={usersInactive}
			/> 
		</div>
	);
}
