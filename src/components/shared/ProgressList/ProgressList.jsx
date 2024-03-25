import React from 'react';
import classes from "./ProgressList.module.css";
import ProgressItem from "./ProgressItem";

const ProgressList = () => {
    return (
        <div className={classes.progress__list}>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
            <ProgressItem text={"Ачивка"}/>
        </div>
    );
};

export default ProgressList;