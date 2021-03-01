import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { signInApi, signUpApi } from "../../../api/user";
import { ACCESS_TOKEN, RESFRESH_TOKEN } from "../../../utils/constatns";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./LoginForm.scss";

export default function LoginForm() {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const changeForm = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const login = async (e) => {
		// console.log("login", inputs);
		const result = await signInApi(inputs);
		console.log("result:>", result);
		if (result.message) {
			notification["error"]({
				message: result.message,
			});
		} else {
			const { accessToken, refreshToken } = result;
			localStorage.setItem(ACCESS_TOKEN, accessToken);
			localStorage.setItem(RESFRESH_TOKEN, refreshToken);
			notification["success"]({
				message: "Correct Login...",
			});
			window.location.href = "/admin";
		}
	};

	return (
		<Form className="login-form" onChange={changeForm} onFinish={login}>
			<Form.Item>
				<Input
					prefix={
						<UserOutlined style={{ color: "rgba(0,0,0,.25" }} />
					}
					type="email"
					name="email"
					placeholder="Correo electronico"
					className="login-form__input"
					// onChange={inputValidation}
					// value={inputs.email}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={
						<LockOutlined style={{ color: "rgba(0,0,0,.25" }} />
					}
					type="password"
					name="password"
					placeholder="Contraseña"
					className="login-form__input"
					// onChange={inputValidation}
					// value={inputs.password}
				/>
			</Form.Item>
			<Form.Item>
				<Button htmlType="submit" className="login-form__button">
					Entrar
				</Button>
			</Form.Item>
		</Form>
	);
}
