import React, {useEffect, useState} from 'react';
import Register from "../../pages/Register/Register";
import MainIcon from "../../../assets/icons/Main.svg";
import TasksIcon from "../../../assets/icons/Tasks.svg";
import CoopIcon from "../../../assets/icons/Coop.svg";
import StarIcon from "../../../assets/icons/Star.svg";
import InfoIcon from "../../../assets/icons/Info.svg";
import editAchiv from "../../../assets/icons/editAchiv.svg";
import {Link, useNavigate} from "react-router-dom";
import cls from './Nav.module.css';
import {UserService} from "../../../API/UserService";
import {CategoriesService} from "../../../API/CategoriesService";
import Editingtask from "../../pages/Editingtask/Editingtask";
import Main from "../../pages/Main/Main";

const routesUser = [
    {
        title: 'Главная',
        path: '/main',
        component: <Main/>,
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
        title: 'О нас',
        path: '/about',
        component: <Register/>,
        icon: InfoIcon
    }
]
const routerAdmin = [
    {
        title: 'Главная',
        path: '/main',
        component: <Main/>,
        icon: MainIcon
    },
    {
        title: 'Ред. задан.',
        path: '/edit',
        component: <Editingtask/>,
        icon: TasksIcon
    },
    {
        title: 'Ред. достиж.',
        path: '/multiplayer',
        component: <Register/>,
        icon: CoopIcon
    },
    {
        title: 'Ред. мультипл.',
        path: '/multiplayer',
        component: <Register/>,
        icon: editAchiv
    }
]
const Nav = () => {

    const navigate = useNavigate();
    const [routers, setRouters] = useState([{}]);

    const success = (res) => {
        if (res.data["role"] === "admin") {
            setRouters(routerAdmin);
        }
        else{
            setRouters(routesUser)
        }
    }
    useEffect(() => {
        async function f() {
            await UserService.my(success);
        }
        f();
    }, []);


    return (
        <div style={{width: '312px', minWidth: '312px', display: 'block', height: 'calc(100vh - 120px)', backgroundColor: '#4E5C65'}}>
            <div style={{marginTop: '48px'}}>
                {
                    routers.map(r => (
                        <div onClick={() => navigate(r.path)} key={r.path} className={cls.nav_item}>
                            <a>
                                <img src={r.icon}/>
                                {r.title}
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Nav;