import {$api} from "./index";

export class TaskService {
    static async UploadTask(levelId, categoryId, rightAnswer, content, success) {
        $api.post("/api/Task", {
            levelId: levelId,
            categoryId: categoryId,
            rightAnswer: rightAnswer,
            content: content
        }).then(async (res) => {
            await success(res);
        });
    }

    static async UploadPhoto(id, file, success) {
        let formData = new FormData();
        formData.append("file", file);
        $api.put(
            `/api/Task/files?id=${id}`,
            formData,
            {headers: {"Content-Type": 'multipart/form-data'}}
    ).then((res) => {
            success(res);
        });
    }
}