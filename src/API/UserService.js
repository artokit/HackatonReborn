import {$api} from "./index";

export class UserService {
    static async my(success) {
        await $api.get("/api/user/my").then(
            (res) => {
                success(res);
            }
        )
    }
}