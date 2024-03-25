import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import Footer from '../../shared/Footer/Footer';
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

const Main = () => {
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
                            <div>КООП</div>
                        </div>
                        <div className={classes.description}>
                            <div>описание</div>
                        </div>
                    </div>
                    <div className={classes.modes} style={{flexDirection: 'row-reverse'}}>
                        <div className={classes.mode}>
                            <div>КООП</div>
                        </div>
                        <div className={classes.description}>
                            <div>описание</div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Main;