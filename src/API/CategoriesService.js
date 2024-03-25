import {$api} from "./index";

export class CategoriesService {
    static async GetAllCategories(success) {
        await $api.get("/api/Category").then(
            (res) => {
                success(res);
            }
        )
    }
}