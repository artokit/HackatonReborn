import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import classes from './Profile.module.css';
import AvatarExample from '../../../assets/img/avatar_example.png';
import EditUserInput from "../../ui/EditUserInput/EditUserInput";
import AchievementPhoto from "../../../assets/img/achiv_photo_example.png";
import ProgressList from "../../shared/ProgressList/ProgressList";
import AchievementList from "../../shared/AchievementList/AchievementList";

const Profile = () => {
    return (
        <Wrapper>
            <div className={classes.my}>
                <div className={classes.my__info}>
                    <div className={`${classes.info__user} ${classes.opacityBlock}`}>
                            <div style={{position: "relative", top: "-80px"}}>
                                <div className={classes.user__avatar}>
                                    <img src={AvatarExample} style={{width: "258px", height: "258px"}} alt="avatar"/>
                                </div>
                                <EditUserInput placeholder={"@username"}/>
                                <EditUserInput placeholder={"ochendlinnayapochta@gmail.com"}/>
                                <div className="info__achivmienet" style={{marginTop: "28px", display: "flex"}}>
                                    <img src={AchievementPhoto} alt="" style={{width: "32px"}}/>
                                    <div style={{fontSize: "24px", color: "white"}}>Уровень «Тракторист 2»</div>
                                </div>
                            </div>
                        </div>
                    <div className={`${classes.info__progress} ${classes.opacityBlock}`}>
                        <div className={classes.progress__header}>Личный прогресс</div>
                        <ProgressList/>
                    </div>
                </div>

                <div className={`${classes.my__achievements} ${classes.opacityBlock}`}>
                    <AchievementList />
                </div>
            </div>
        </Wrapper>
    );
};

export default Profile;
