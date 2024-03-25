import {$api} from "./index";

export class UserService {
    static async my(success) {
        await $api.get("/api/user/my").then(
            (res) => {
                success(res);
            }
        )
    }

    static async GetTop10(success) {
        $api.get("/api/Rating/top10").then(
            (res) => {
                success(res);
            }
        );
    }
}