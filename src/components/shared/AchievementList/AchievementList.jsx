import React from 'react';
import classes from "./AchievementList.module.css";
import AchievementItem from "./AchievementItem";
import AchievementImage1 from "../../../assets/img/achiv1.png";
import AchievementImage2 from "../../../assets/img/achiv2.png";
import AchievementImage3 from "../../../assets/img/achiv3.png";
import AchievementImage4 from "../../../assets/img/achiv4.png";
import AchievementImage5 from "../../../assets/img/achiv5.png";
import AchievementImage6 from "../../../assets/img/achiv6.png";

const AchievementList = () => {
    return (
        <div className={classes.achievements}>
            <div className={classes.achievements__header}>Достижения</div>
            <div className={classes.achievements__body}>
                <AchievementItem progress={100} img={AchievementImage1}/>
                <AchievementItem progress={100} img={AchievementImage2}/>
                <AchievementItem progress={100} img={AchievementImage3}/>
                <AchievementItem progress={100} img={AchievementImage4}/>
                <AchievementItem progress={100} img={AchievementImage5}/>
                <AchievementItem progress={100} img={AchievementImage6}/>
            </div>
        </div>
    );
};

export default AchievementList;