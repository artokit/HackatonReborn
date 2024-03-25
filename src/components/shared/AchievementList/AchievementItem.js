import React from 'react';
import classes from "./AchievementList.module.css"

const AchievementItem = ({img, progress}) => {
    let gradientDeg = 0;
    if (progress > 50) {
        gradientDeg = 90 +  180*(progress - 50)/100;
    }

    return (
        <div className={classes.achievements__item} style={{background: `url(${img})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {(progress > 50) ?
                <div className={classes.item__progressCircle} style={{backgroundImage: `linear-gradient(${gradientDeg}deg, transparent 50%, white 50%), linear-gradient(90deg, transparent 50%, white 50%)`}}></div> :
                <div></div>
            }
        </div>
    );
};

export default AchievementItem;