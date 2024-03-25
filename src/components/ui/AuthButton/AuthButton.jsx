import React from 'react';
import classes from "./AuthButton.module.css";

const AuthButton = ({text, onClick, bordered}) => {
    return (
        <button onClick={() => (onClick)? onClick() : null} className={classes.button_auth} style={(bordered) ? {border: "2px solid white"} : {}}>{text}</button>
    );
};

export default AuthButton;