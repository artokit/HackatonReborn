import React from 'react';
import classes from "./LevelsList.module.css";

const LevelItem = ({active, notActive, blockIndex, activeIndex, onClick}) => {
    return (
        <div onClick={onClick} style={{backgroundColor: active, filter: (blockIndex === activeIndex) ? "" : notActive}} className={classes.levelItem}></div>
    );
};

export default LevelItem;