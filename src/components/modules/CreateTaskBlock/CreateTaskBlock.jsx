import React, {useState} from 'react';
import classes from "./CreateTaskBlock.module.css";
import CategoriesList from "../../shared/CategoriesList/CategoriesList";
import LevelsList from "../../shared/LevelsList/LevelsList";
import UploaderFile from "../UploaderFile/UploaderFile";
import {TaskService} from "../../../API/TaskService";

const CreateTaskBlock = () => {
    const [rightAnswer, setRightAnswer] = useState("");
    const [levelId, setLevelId] = useState(1);
    const [categoryId, setCategoryId] = useState(1);

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
                        <CategoriesList/>
                    </div>
                </div>
                <UploaderFile/>
            </div>
            <div style={{height: '50%', display: 'flex', gap: '36px'}}>
                <textarea  placeholder="Введите текст задания" className={classes.enterTextTask} style={{
                    width: '66.6%',
                    resize: "none",
                    overflow: "hidden",
                    height: '100%',
                    backgroundColor: 'rgba(141, 156, 166, 1)',
                    border: '2px dashed rgba(21, 35, 42, 1)',
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
                    }} className={classes.LoadButton}>
                        <div onClick={async () => {await TaskService.UploadTask(levelId, rightAnswer)}}>Загрузить</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskBlock;