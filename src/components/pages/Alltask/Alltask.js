import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import classes from "./Alltask.module.css";

        
const Alltask = () => {
    return (
        <Wrapper>
            <div className={classes.page}>
            
                <div className={classes.block2}>
                    <div className={classes.filter}>
                        <div className={classes.fbot3}>
                            <button className={classes.bot}>Показать всё</button>
                        </div>
                        <div className={classes.fbot1}>
                            <button className={classes.bot}>Реверс-инжиниринг</button>
                        </div>
                        <div className={classes.fbot2}>
                            <button className={classes.bot}>Криптография</button>
                        </div>

                    </div>
                </div>
                <div className={classes.badge}>
                        <div className={classes.vebadge}> Очень легкий </div>
                        <div className={classes.ebadge}>Легкий</div>
                        <div className={classes.abadge}>Средний</div>
                        <div className={classes.dbadge}>Сложный</div>
                </div>
                        <div className={classes.tasks}>
                            <a href='/'><div className={classes.task}></div></a>
                            <a href='/'><div className={classes.task}></div></a>
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
        </Wrapper>
         );
};

export default Alltask;
