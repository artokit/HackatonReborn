import {$api} from "./index"

export async function RegisterRequest(username, email, password, successCallback, errorCallback) {
    let request_data = {
        username: username,
        password: password,
        email: email
    }
    $api.post("/api/Authorization/register", request_data).then(
        (res) => {
            saveAccessToken(res.data["accessToken"]);
            successCallback();
        }
    ).catch(
        () => {
            errorCallback();
        }
    )
}

export async function LoginRequest(username, password, SuccessCallback, ErrorCallback) {
    let request_data = {
        login: username,
        password: password
    }

    $api.post("/api/Authorization/login", request_data).then(
        (res) => {
            saveAccessToken(res.data["accessToken"]);
            SuccessCallback();
        }
    ).catch(
        () => {
            ErrorCallback()
        }
    )
}

function saveAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
    $api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`;
        return config;
    });
}