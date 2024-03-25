import React, {useState} from 'react';
import classes from "./Register.module.css";
import "../../../assets/css/auth.css";
import authImage from "../../../assets/img/background_auth.png"
import AuthInput from "../../ui/AuthInput/AuthInput";
import AuthButton from "../../ui/AuthButton/AuthButton";
import {RegisterRequest} from "../../../API/Auth";
import {useNavigate} from "react-router-dom";

const Register = ({text}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const successLogin = () => {
        navigate("/profile");
    }
    const errorLogin = () => {
        console.log(1);
    }

    return (
        <div className={classes.register}>
            <div className={classes.register__wrapper} style={{backgroundImage: `url(${authImage})`}}>
                <div className={classes.wrapper__modal} style={{paddingTop: "50px"}}>
                    <div className={classes.modal__header} style={{marginBottom: "40px"}}>
                        {text}
                    </div>

                    <div className={classes.inputs} style={{gap: "15px", marginBottom: "36px"}}>
                        <AuthInput onChange={setEmail} placeholder={"Почта"}/>
                        <AuthInput onChange={setUsername} placeholder={"Логин"}/>
                        <AuthInput onChange={setPassword} placeholder={"Пароль"}/>
                    </div>

                    <div className={classes.buttons}>
                        <AuthButton onClick={async () => await RegisterRequest(username, email, password, successLogin, errorLogin)} text="Зарегистрироваться"/>
                        <a style={{cursor: "pointer"}} onClick={() => {navigate("/login")}} className={classes.buttons__registered}>Вы уже зарегистрированы? Войти</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;