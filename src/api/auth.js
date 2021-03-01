import { basePath, apiVersion } from "./config";
import { ACCESS_TOKEN, RESFRESH_TOKEN } from "../utils/constatns";
import jwtDecode from "jwt-decode";

export function getAccessTokenApi() {
	const accessToken = localStorage.getItem(ACCESS_TOKEN);
	if (!accessToken || accessToken === "null") {
		return null;
	}

	return willExpireToken(accessToken) ? null : accessToken;
}

export function getRefreshTokenApi() {
	const refreshToken = localStorage.getItem(RESFRESH_TOKEN);

	if (!refreshToken || refreshToken === "null") {
		return null;
	}

	return willExpireToken(refreshToken) ? null : refreshToken;
}

export function refreshAccessToken(refreshToken) {
	const url = `${basePath}/${apiVersion}/refresh-access-token`;
	const bodyObj = {
		refreshToken: refreshToken,
	};
	const params = {
		method: "POST",
		body: JSON.stringify(bodyObj),
		headers: {
			"Content-Type": "application/json",
		},
	};

	fetch(url, params)
		.then((response) => {
			if (response.status !== 200) {
				return null;
			}
			return response.json();
		})
		.then((result) => {
			if (!result) {
				logout();
			} else {
				const { accessToken, refreshToken } = result;
				localStorage.setItem(ACCESS_TOKEN, accessToken);
				localStorage.setItem(RESFRESH_TOKEN, refreshToken);
			}
		});
}

export function logout() {
	localStorage.removeItem(ACCESS_TOKEN);
	localStorage.removeItem(RESFRESH_TOKEN);
}

function willExpireToken(token) {
	const seconds = 60;
	const metaToken = jwtDecode(token);
	const { exp } = metaToken;
	const expCaducado = exp - 100000000;
	const now = (Date.now() + seconds) / 1000;

	console.log(`${now} > ${exp} __ ${now > exp}`);
	// return now > expCaducado;
	return now > exp;
}
