import React from 'react';
import Register from "../../pages/Register/Register";
import MainIcon from "../../../assets/icons/Main.svg";
import TasksIcon from "../../../assets/icons/Tasks.svg";
import CoopIcon from "../../../assets/icons/Coop.svg";
import StarIcon from "../../../assets/icons/Star.svg";
import InfoIcon from "../../../assets/icons/Info.svg";
import {Link, useNavigate} from "react-router-dom";
import cls from './Nav.module.css';

const routes = [
    {
        title: 'Главная',
        path: '/',
        component: <Register/>,
        icon: MainIcon
    },
    {
        title: 'Задания',
        path: '/tasks',
        component: <Register/>,
        icon: TasksIcon
    },
    {
        title: 'Мультиплеер',
        path: '/multiplayer',
        component: <Register/>,
        icon: CoopIcon
    },
    {
        title: 'Рейтинг',
        path: '/rating',
        component: <Register/>,
        icon: StarIcon
    },
    {
        title: 'О нас',
        path: '/about',
        component: <Register/>,
        icon: InfoIcon
    }
]

const Nav = () => {

    const navigate = useNavigate();

    return (
        <div style={{width: '312px', minWidth: '312px', display: 'block', height: 'calc(100vh - 120px)', backgroundColor: '#4E5C65'}}>
            <div style={{marginTop: '48px'}}>
                {
                    routes.map(r => (
                        <div key={r.path} className={cls.nav_item}>
                            <a onClick={() => navigate(r.path)}>
                                <img src={r.icon}/>
                                {r.title}
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
        // <div className={classes.nav}>
        //     <div className={classes.nav__logo}>
        //         Лого
        //     </div>
        // </div>
    );
};

export default Nav;