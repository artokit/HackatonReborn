import React, {useEffect, useState} from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import classes from "./Main.module.css";
import award_image from '../../../assets/img/award.png';
import photo1 from './photo1.svg';
import photo2 from './photo2.svg';
import photo3 from './photo3.svg';
import photo4 from './photo4.svg';
import photo5 from './photo5.svg';
import photo6 from './photo6.svg';
import photo7 from './photo7.svg';
import photo8 from './photo8.svg';
import photo9 from './photo9.svg';
import photo10 from './photo10.svg';
import index1 from "../../../assets/img/index1.png";
import index2 from "../../../assets/img/index2.png";

import {UserService} from "../../../API/UserService";

const Main = () => {
    const [top, setTop] = useState([{}]);
    const success = (res) => {
        setTop(res.data);
    }
    // useEffect(() => {
    //     async function f() {
    //         await UserService.GetTop10(success);
    //     }
    //     f();
    // }, []);
    return (
        <Wrapper>
            <div className={classes.content_container}>
                <div className={classes.content}>
                    <div className={classes.raiting}>
                        <div className={classes.rang_and_text}>
                            <div className={classes.text}>
                                <p>Информационная безопасность — </p>это командный спорт,
                                в котором каждый должен играть на своей позиции в любую минуту.
                                Дополнительные инструменты могут быть чрезвычайно полезными;
                                но только когда люди, программы, процедуры,
                                регулярные проверки и другие факторы работают вместе,
                                они образуют эффективную защиту.
                            </div>
                            <div className={classes.rang_card}>
                                <div>
                                    <div>Ваш ранг:</div>
                                </div>
                                <div className={classes.award_container}>
                                    <img src={award_image}/>
                                    <p>Герой</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.raiting_card}>
                            <div className={classes.rating_text}>
                                <div>Рейтинг <span>ТОП-10</span></div>
                            </div>
                            <div className={classes.rating_photos}>
                                <div className={classes.photos}>
                                    <img style={{height: '90%'}} src={photo2}/>
                                    <img src={photo1}/>
                                    <img style={{height: '90%'}} src={photo3}/>
                                </div>
                                <div className={classes.usernames}>
                                    <div>@destmi</div>
                                    <div>@remsleep</div>
                                    <div>@artokit1</div>
                                </div>
                            </div>
                            <div className={classes.users}>
                                <div><img src={photo4}/></div>
                                <div><img src={photo5}/></div>
                                <div><img src={photo6}/></div>
                                <div><img src={photo7}/></div>
                                <div><img src={photo8}/></div>
                                <div><img src={photo9}/></div>
                                <div><img src={photo10}/></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.modes}>
                        <div className={classes.mode}>
                            <div><img style={{width: "714px", height: "612px"}} src={index2} alt=""/></div>
                        </div>
                        <div className={classes.description} style={{backgroundColor: "transparent", color: "white", fontSize: "32px", border: "none", lineHeight: "50px"}}>
                            <div>
                                <span style={{color: "#5FB357"}}>Реверс-инжиниринг, криптография 4-х уровней сложности -</span> <span style={{color: "#8D9CA6"}}>всё это находится в собранной нами коллекции</span> индивидуальных заданий <span style={{color: "#8D9CA6FF"}}>к решению которых вы можете приступить уже сейчас!</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.modes} style={{flexDirection: 'row-reverse'}}>
                        <div className={classes.mode}>
                            <div><img style={{width: "714px", height: "612px"}} src={index1} alt=""/></div>
                        </div>
                        <div style={{backgroundColor: "transparent", color: "white", fontSize: "32px", border: "none", lineHeight: "50px"}} className={classes.description}>
                            <div>
                                <span style={{color: "#8D9CA6"}}>Здесь вы можете </span>
                                <span style={{color: "white"}}>соревноваться с другими пользователями</span> в решении выбранных вами заданий. <span style={{color: "#5FB357"}}>Кто быстрее даст правильный ответ, тот и победил!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Main;