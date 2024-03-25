import React, {useState} from 'react';
import classes from "./CreateTaskBlock.module.css";
import CategoriesList from "../../shared/CategoriesList/CategoriesList";
import LevelsList from "../../shared/LevelsList/LevelsList";
import UploaderFile from "../UploaderFile/UploaderFile";
import {TaskService} from "../../../API/TaskService";
import {UserService} from "../../../API/UserService";
import {useNavigate} from "react-router-dom";

const CreateTaskBlock = () => {
    const [rightAnswer, setRightAnswer] = useState("");
    const [levelId, setLevelId] = useState(1);
    const [categoryId, setCategoryId] = useState(1);
    const [content, setContent] = useState("");
    const [file, setFile] = useState();
    const navigate = useNavigate();

    const success = (res) => {
        console.log(res);
    };

    return (
        <div style={{
            margin: "148px auto",
            width: '1206px',
            height: '578px',
            backgroundColor: 'rgba(78, 92, 101, .3)',
            borderRadius: '32px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px'
        }}>
            <div style={{height: '50%', display: 'flex', gap: '36px'}}>
                <div style={{width: '66.6%', display: 'flex', gap: '36px'}}>
                    <div style={{width: '27%', display: 'flex', flexDirection: 'column', gap: '36px'}}>
                        <div style={{
                            height: '50%',
                            color: "white",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '6px',
                            fontSize: '24px',
                        }}>
                            <span>Сложность</span>
                        </div>
                        <div style={{
                            height: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            borderRadius: '6px',
                            fontSize: '24px'
                        }}>
                            <span>Категории</span>
                        </div>
                    </div>
                    <div style={{width: '73%', display: 'flex', flexDirection: 'column', gap: '36px'}}>
                        <LevelsList setLevel={setLevelId}/>
                        <CategoriesList setCategory={setCategoryId}/>
                    </div>
                </div>
                <UploaderFile file={file} setFile={setFile}/>
            </div>
            <div style={{height: '50%', display: 'flex', gap: '36px'}}>
                <textarea onChange={(e) => {setContent(e.target.value)}}  placeholder="Введите текст задания" className={classes.enterTextTask} style={{
                    width: '66.6%',
                    resize: "none",
                    overflow: "hidden",
                    height: '100%',
                    backgroundColor: 'rgba(141, 156, 166, 1)',
                    border: '5px dashed rgba(21, 35, 42, 1)',
                }}>
                </textarea>
                <div style={{width: '33.3%', height: '100%', display: 'flex', flexDirection: 'column', gap: '36px'}}>
                    <input style={{
                        fontSize: '20px',
                        height: '60%',
                        width: '100%',
                        color: 'white',
                        backgroundColor: 'rgba(21, 35, 42, 1)',
                        outline: "none",
                        border: "none",
                    }} className={classes.enterRightAnswer} onChange={(e) => {setRightAnswer(e.target.value)}} placeholder="Введите правильный ответ"/>
                    <div style={{
                        fontSize: '31px',
                        height: '40%',
                        width: '100%',
                        textAlign: "center",
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '6px'
                    }} className={classes.LoadButton} onClick={async () => {
                        if(!file) {

                        }
                        await TaskService.UploadTask(levelId, categoryId, rightAnswer, content, async (res) => {
                            let id = res['data'].id;
                            await TaskService.UploadPhoto(id, file, success);
                            navigate("/tasks");
                        })
                    }}>
                        <div>Загрузить</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskBlock;