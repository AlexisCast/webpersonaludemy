import { apiVersion, basePath } from "./config";

export function signUpApi(data) {
	const url = `${basePath}/${apiVersion}/sign-up`;
	const params = {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	};

	// console.log('data',data);
	return fetch(url, params)
		.then((response) => {
			console.log("response_", response);
			return response.json();
		})
		.then((result) => {
			console.log("result", result);
			if (result.user) {
				return {
					ok: true,
					message: "User created correctly.",
				};
			}
			return {
				ok: false,
				message: result.message,
			};
		})
		.catch((err) => {
			console.log("err", err);
			return {
				ok: false,
				message: err.message,
			};
		});
}

export function signInApi(data) {
	const url = `${basePath}/${apiVersion}/sign-in`;
	const params = {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	};

	return fetch(url, params)
		.then((response) => {
			// console.log("response", response);
			return response.json();
		})
		.then((result) => {
			console.log("result", result);
			return result;
		})
		.catch((err) => {
			console.log("err", err);
			return err.message;
		});
}
