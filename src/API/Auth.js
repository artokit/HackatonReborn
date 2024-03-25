import {$api} from "./index";


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
    ).catch((error) => {
        if (error.response.status === 400) {
            ErrorCallback(error);
        }
    })

}

function saveAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
}
