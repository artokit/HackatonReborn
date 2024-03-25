import React, {useEffect, useState} from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import classes from "./Alltask.module.css";
import {Link} from "react-router-dom";
import TaskLoad from "../TaskLoad/TaskLoad";
import {TaskService} from "../../../API/TaskService";


const Alltask = () => {
    const [categoryId, setCategoryId] = useState(0);
    const [levelId, setLevelId] = useState(1);
    const [tasks, setTasks] = useState([]);
    let success = (res) => {
        setTasks(res.data || []);
    }

    useEffect(() => {
        async function f() {
            await TaskService.GetAllTasks(1, 1, success)
        }
        f();
    }, []);

    return (
        <Wrapper>
            <div className={classes.page}>

                <div className={classes.block2}>
                    <div className={classes.filter}>
                        <div className={classes.fbot3}>
                            <button onClick={async (e) => {setCategoryId(0); await TaskService.GetAllTasks(levelId, 0, success)}} style={{cursor: "pointer", transition:".3s", color: (categoryId === 0) ? "green" : "white"}} className={classes.bot}>Показать всё</button>
                        </div>
                        <div className={classes.fbot1}>
                            <button onClick={async (e) => {setCategoryId(1); await TaskService.GetAllTasks(levelId, 1, success)}} style={{cursor: "pointer", transition:".3s", color: (categoryId === 1) ? "green" : "white"}} className={classes.bot}>Реверс-инжиниринг</button>
                        </div>
                        <div className={classes.fbot2}>
                            <button onClick={async (e) => {setCategoryId(2); await TaskService.GetAllTasks(levelId, 2, success)}} style={{cursor: "pointer", transition:".3s", color: (categoryId === 2) ? "green" : "white"}} className={classes.bot}>Криптография</button>
                        </div>

                    </div>
                </div>
                <div className={classes.badge}>
                        <div onClick={async () => {setLevelId(1); await TaskService.GetAllTasks(1, categoryId, success)}} style={{filter: (levelId === 1) ? "" : "brightness(.8)", transition: ".3s", color: (levelId === 1) ? "white" : "black", borderRadius: (levelId === 1) ? "20px" : "12px"}} className={classes.vebadge}> Очень легкий</div>
                        <div onClick={async () => {setLevelId(2); await TaskService.GetAllTasks(2, categoryId, success)}} style={{filter: (levelId === 2) ? "" : "brightness(.8)", transition: ".3s", color: (levelId === 2) ? "white" : "black", borderRadius: (levelId === 2) ? "20px" : "12px"}} className={classes.ebadge}>Легкий</div>
                        <div onClick={async () => {setLevelId(3); await TaskService.GetAllTasks(3, categoryId, success)}} style={{filter: (levelId === 3) ? "" : "brightness(.8)", transition: ".3s", color: (levelId === 3) ? "white" : "black", borderRadius: (levelId === 3) ? "20px" : "12px"}} className={classes.abadge}>Средний</div>
                        <div onClick={async () => {setLevelId(4); await TaskService.GetAllTasks(4, categoryId, success)}} style={{filter: (levelId === 4) ? "" : "brightness(.8)", transition: ".3s", color: (levelId === 4) ? "white" : "black", borderRadius: (levelId === 4) ? "20px" : "12px"}} className={classes.dbadge}>Сложный</div>
                </div>
                        <div className={classes.tasks}>
                            {tasks.map(t => <Link style={{textDecoration: "none"}} to={`/task/${t.id}`}><div className={classes.task}>
                                <div className={classes.task__inner}>Задание #{t.id}</div>
                            </div></Link>)}
                        </div>
                   </div>
        </Wrapper>
         );
};

export default Alltask;
