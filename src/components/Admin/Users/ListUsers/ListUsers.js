import React, { useState } from "react";
import { Switch, List, Avatar, Botton, Button } from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { CheckOutlined,EditOutlined, DeleteOutlined, StopOutlined } from "@ant-design/icons";
import "./ListUsers.scss";

export default function ListUsers(props) {
	const { usersActive, usersInactive } = props;
	const [viewUsersActives, setViewUsersActives] = useState(true);

	// console.log("usersActive_", usersActive);
	// console.log("usersInactive_", usersInactive);

	return (
		<div className="list-users">
			<div className="list-users__switch">
				<Switch
					defaultChecked
					onChange={() => setViewUsersActives(!viewUsersActives)}
				/>
				<span>
					{viewUsersActives
						? "Usuarios Activos"
						: "Usuarios Inactivos"}
				</span>
			</div>
			{viewUsersActives ? (
				<UserActive usersActive={usersActive} />
			) : (
				<UserInactive usersInactive={usersInactive} />
			)}
		</div>
	);
}

function UserActive(props) {
	const { usersActive } = props;
	console.log("usersActive_", usersActive);

	return (
		<List
			className="users-active"
			itemLayout="horizontal"
			dataSource={usersActive}
			renderItem={(user) => (
				<List.Item
					actions={[
						<Button
							type="primary"
							onClick={() => console.log("Editar Usuario")}
						>
							<EditOutlined />
						</Button>,
						<Button
							type="danger"
							onClick={() => console.log("Desactivar")}
						>
							<StopOutlined />
						</Button>,
						<Button
							type="danger"
							onClick={() => console.log("Eliminar Usuario")}
						>
							<DeleteOutlined />
						</Button>,
					]}
				>
					<List.Item.Meta
						avatar={
							<Avatar
								src={user.avatar ? user.avatar : NoAvatar}
							/>
						}
						title={`
							${user.name ? user.name : "..."}  
							${user.lastname ? user.lastname : "..."}
						`}
						description={user.email}
					/>
				</List.Item>
			)}
		/>
	);
}

function UserInactive(props) {
	const { usersInactive } = props;
	console.log("usersInactive_", usersInactive);
	return (
		<List
			className="users-active"
			itemLayout="horizontal"
			dataSource={usersInactive}
			renderItem={(user) => (
				<List.Item
					actions={[
						<Button
							type="primary"
							onClick={() => console.log("Activar Usuario")}
						>
							<CheckOutlined />
						</Button>,
						<Button
							type="danger"
							onClick={() => console.log("Eliminar Usuario")}
						>
							<DeleteOutlined />
						</Button>,
					]}
				>
					<List.Item.Meta
						avatar={
							<Avatar
								src={user.avatar ? user.avatar : NoAvatar}
							/>
						}
						title={`
							${user.name ? user.name : "..."}  
							${user.lastname ? user.lastname : "..."}
						`}
						description={user.email}
					/>
				</List.Item>
			)}
		/>
	);
}
