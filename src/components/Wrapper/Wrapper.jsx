import React from 'react';
import Nav from "../shared/Nav/Nav";
import Header from "../shared/Header/Header";
import cls from "./wrapper.module.css";
import {useNavigate} from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Wrapper = ({children, ...props}) => {
    const navigate = useNavigate();
    if (localStorage.getItem("accessToken") === null) {
        navigate("/login");
    }
    return (
        <div {...props}>
            <Header/>
            <div>
                <div style={{display: 'flex'}}>
                    <Nav/>
                    <div style={{width: '100%', height: 'calc(100vh - 120px)', overflow: 'auto'}} className={cls.bg}>
                        <div>{children}</div>
                        <Footer/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Wrapper;