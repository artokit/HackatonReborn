import React from 'react';
import classes from "./ProgressList.module.css";

const ProgressItem = ({text}) => {
    return (
        <div className={classes.progress__item}>
            <div className={classes.item__dot}></div>
            <div className={classes.item__text}>{text}</div>
        </div>
    );
};

export default ProgressItem;