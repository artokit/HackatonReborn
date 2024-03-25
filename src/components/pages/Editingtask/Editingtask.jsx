import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import classes from "./Editingtask.module.css";

        
const Editingtask = () => {
    return (
        <Wrapper>
            <div  className={classes.page}>
                <div className={classes.block1}>
                    <div>
                        <div className={classes.creator}><a href='/'><div className={classes.horizontal}><div className={classes.vertical}></div></div>
                        </a></div>
                        <div className={classes.creatsignature}>Добавить</div>
                    </div>
                </div>
                <div className={classes.block2}>
                    <div className={classes.filter}>
                        <div className={classes.fbot1}>
                            <button className={classes.bot}>Реверс-инжиниринг</button>
                        </div>
                        <div className={classes.fbot2}>
                            <button className={classes.bot}>Криптография</button>
                        </div>
                    </div>
                </div>
                <div className={classes.block3}>
                    <div className={classes.veryeasy}>
                        <div className={classes.vebadge}> Очень легкий </div>
                        <div className={classes.tasks}>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                        </div>
                    </div>
                    <div className={classes.easy}>
                        <div className={classes.ebadge}>Легкий</div>
                        <div className={classes.tasks}>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                        </div>
                    </div>
                    <div className={classes.average}>
                        <div className={classes.abadge}>Средний</div>
                        <div className={classes.tasks}>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                        </div>
                    </div>
                    <div className={classes.difficult}>
                        <div className={classes.dbadge}>Сложный</div>
                        <div className={classes.tasks}>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a></div>
                    </div>
                </div>
    </div>
        </Wrapper>
         );
};

export default Editingtask;
