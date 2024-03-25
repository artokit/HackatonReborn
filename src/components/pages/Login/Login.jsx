import React, {useRef, useState} from 'react';
import classes from "../Register/Register.module.css";
import "../../../assets/css/auth.css";
import authImage from "../../../assets/img/background_auth.png"
import AuthInput from "../../ui/AuthInput/AuthInput";
import AuthButton from "../../ui/AuthButton/AuthButton";
import {LoginRequest} from "../../../API/Auth";
import {useNavigate} from "react-router-dom";
import closeLogo from "../../../assets/img/close.svg";


const Login = ({text}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState("текст ошибки");
    const ref = useRef();
    const successLogin = () => {
        navigate("/profile");
    }
    const errorLogin = (res) => {
        setErrorText(res.response.data);
        ref.current.style.transform = "translateY(-350px)";
        setTimeout(() => {
            ref.current.style.transform = "translateY(-600px)";
        }, 3000)
    }

    return (
        <div className={classes.register}>
            <div ref={ref} style={{transition: ".2s", transform: "translateY(-600px)", margin: "auto", top: "0", bottom: "0", right: "0", left: "0", position: "absolute", display: "flex", padding: "20px 30px", gap: "10px", justifyContent: "center", alignItems: "center", borderRadius: "18px", backgroundColor: "#2E3F47", width: "400px", height: "65px", color: "white"}} className="errorMessageBox">
                <div className="errorMessageBox__logo">
                    <img src={closeLogo} style={{transform: "translateY(2px)", width: "30px", height: "30px"}} alt=""/>
                </div>
                <div className="errorMessageBox__text" style={{fontSize: "15px"}}>{errorText}</div>
            </div>
            <div className={classes.register__wrapper} style={{backgroundImage: `url(${authImage})`}}>
                <div className={classes.wrapper__modal} style={{paddingTop: "62px"}}>
                    <div className={classes.modal__header} style={{marginBottom: "48px", fontSize: "32px"}}>
                        {text}
                    </div>

                    <div className={classes.inputs} style={{gap: "24px", marginBottom: "38px"}}>
                        <AuthInput onChange={setUsername} placeholder={"Почта/Логин"}/>
                        <AuthInput onChange={setPassword} placeholder={"Пароль"}/>
                    </div>

                    <div className={classes.buttons}>
                        <AuthButton text={"Вход"} onClick={async () => await LoginRequest(username, password, successLogin, errorLogin)}/>
                        <AuthButton onClick={() => {navigate("/register")}} text="Зарегистрироваться" bordered={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;