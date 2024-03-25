import React from 'react';
import classes from "./AuthInput.module.css";

const AuthInput = ({placeholder, onChange}) => {
    return (
        <input onChange={(e) => onChange(e.target.value)} className={classes.AuthInput} placeholder={placeholder} type="text"/>
    );
};

export default AuthInput;