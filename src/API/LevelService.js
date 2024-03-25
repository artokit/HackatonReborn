import {$api} from "./index";

export class LevelService {
    static async GetLevels(success) {
        await $api.get("/api/Level").catch(
            (res) => {success(res)}
        )
    }
}