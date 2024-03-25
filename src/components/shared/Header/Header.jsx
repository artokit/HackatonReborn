import React from 'react';
import classes from "./Header.module.css";
import logo from "../../../assets/img/logo.png";
import photo from "../../../assets/img/photo.png";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div style={{height: '120px', backgroundColor: 'rgba(141, 156, 166, 0.3)', display: 'flex', alignItems: 'center', padding: '0 68px', justifyContent: 'space-between'}}>
            <div>
                <img src={logo}/>
            </div>
            <a onClick={() => navigate("/profile")} style={{cursor: "pointer", width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={photo}/>
            </a>
        </div>
    );
};

export default Header;