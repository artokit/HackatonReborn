import React from 'react';
import classes from "./ProgressList.module.css";
import ProgressItem from "./ProgressItem";

const ProgressList = () => {
    return (
        <div className={classes.progress__list}>
            <ProgressItem text={"22 задание выполнено"}/>
            <ProgressItem text={"Ачивка «Крик от боли» получена"}/>
            <ProgressItem text={"Уровень «Тракторист 2» получен"}/>
            <ProgressItem text={"10 заданий выполнено"}/>
            <ProgressItem text={"Уровень «Тракторист 1» получен "}/>
            <ProgressItem text={"5 заданий выполнено"}/>
            <ProgressItem text={"Аккаунт создан"}/>
        </div>
    );
};

export default ProgressList;