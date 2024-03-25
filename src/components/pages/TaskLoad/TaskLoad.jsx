import React, {useEffect, useRef, useState} from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import classes from "./TaskLoad.module.css";
import arrow_image from './arrow.svg';
import mark_image from './mark.svg';
import ready_image from "../../../assets/icons/ready.png";
import {useNavigate, useParams} from "react-router-dom";
import {API_URL} from "../../../API";
import {TaskService} from "../../../API/TaskService";
import zipLogo from "../../../assets/img/zip.svg";

const TaskLoad = (props) => {
    const { id } = useParams();
    const [text, setText] = useState("");
    const [level, setLevel] = useState("");
    const [category, setCategory] = useState("");
    const [answer, setAnswer] = useState("");
    const ref = useRef();
    const [answerTextHelper, setAnswerTextHelper] = useState("Ответ неверный");
    const [imageHelper, setImageHelper] = useState(mark_image);
    const navigate = useNavigate();

    function access(res) {
        setImageHelper(ready_image);
        setAnswerTextHelper("Ответ верный");
        ref.current.style.transition = ".3s";
        ref.current.style.opacity = "1";
        setTimeout(() => {
            navigate("/tasks");
        }, 2000)
    }

    function error() {
        ref.current.style.transition = ".3s";
        ref.current.style.opacity = "1";
        setTimeout(() => {
            ref.current.style.opacity = "0";
        }, 2000)
    }
    const success = (res) => {
        setText(res.data["content"]);
        setLevel(res.data["level"]["name"]);
        setCategory(res.data["category"]["name"]);
    }
    useEffect(() => {
        async function f() {
            await TaskService.getTask(id, success);
        }
        f();
    }, []);

    return (
        <Wrapper>
            <div className={classes.content}>
                <div className={classes.level_panel}>
                    <div className={classes.task_type}>
                        <div style={{fontSize: "15px"}}>{category}</div>
                    </div>
                    <div className={classes.arrow}><img src={arrow_image}/></div>
                    <div className={classes.level_label}>
                        <div>{level}</div>
                    </div>
                    <div className={classes.arrow}><img src={arrow_image}/></div>
                    <div className={classes.lavel}><div>#{id}</div></div>
                </div>
                <div className={classes.task_loading}>
                    <div className={classes.task_text}>
                        <div className={classes.text}><div>{text}</div></div>
                        <div className={classes.answer}>
                            <input type='text' onChange={(e) => {
                                setAnswer(e.target.value);
                            }} placeholder='Введите ответ'></input>
                        </div>
                    </div>
                    <div className={classes.upload_file}>
                        <a style={{textDecoration: "none"}} href={API_URL + "api/Task/files/" + id} target={"_blank"}>
                            <div style={{display: "flex", flexDirection: "column", gap: "10px"}} onLoad={async () => {
                            await TaskService.getTask(id, success);
                        }}>
                            <img src={zipLogo} alt=""/>
                            <span style={{color: "black", fontSize: "18px"}}>Скачать</span>
                        </div></a>
                        <button className={classes.buttonSend} onClick={async () => {
                            await TaskService.UploadAnswer(id, answer, access, error);
                        }}>Отправить</button>
                    </div>
                </div>
                <div ref={ref} className={classes.answer_panel}>
                    <div>
                        <img src={imageHelper} style={{marginRight: '20px'}}></img>
                        <div>{answerTextHelper}</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default TaskLoad;