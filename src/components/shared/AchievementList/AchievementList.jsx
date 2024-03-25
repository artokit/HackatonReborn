import React from 'react';
import classes from "./AchievementList.module.css";
import AchievementItem from "./AchievementItem";
import AchievementImage from "../../../assets/img/achiv_example.png";

const AchievementList = () => {
    return (
        <div className={classes.achievements}>
            <div className={classes.achievements__header}>Достижения</div>
            <div className={classes.achievements__body}>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
                <AchievementItem progress={100} img={AchievementImage}/>
            </div>
        </div>
    );
};

export default AchievementList;