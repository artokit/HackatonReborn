import {$api} from "./index";

export class TaskService {
    static async UploadTask(levelId, categoryId, rightAnswer, content) {
        $api.post("/api/Task", {
            levelId: levelId,
            categoryId: categoryId,
            rightAnswer: rightAnswer,
            content: content
        }).then((res) => {
            console.log(res);
        });
    }
}