import React from 'react';
import classes from "./AchievementList.module.css"

const AchievementItem = ({img, progress}) => {
    let gradientDeg = 0;
    if (progress > 50) {
        gradientDeg = 90 +  180*(progress - 50)/100;
    }

    return (
        <div className={classes.achievements__item} style={{background: `url(${img})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>

        </div>
    );
};

export default AchievementItem;