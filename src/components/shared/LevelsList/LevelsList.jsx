import React, {useState} from 'react';
import classes from "./LevelsList.module.css";
import LevelItem from "./LevelItem";

const LEVELS = [
    {id: 1, activeColor: 'rgba(146, 208, 141, 1)', notActiveColor: "brightness(0.6) grayscale(.6)"},
    {id: 2, activeColor: 'rgba(95, 179, 87, 1)', notActiveColor: "brightness(0.6) grayscale(.6)"},
    {id: 3, activeColor: 'rgba(179, 137, 87, 1)', notActiveColor: "brightness(0.6) grayscale(.6)"},
    {id: 4, activeColor: 'rgba(179, 87, 87, 1)', notActiveColor: "brightness(0.7) grayscale(.6)"},
]

const LevelsList = ({setLevel}) => {
    let [indexActiveElement, setIndexActiveElement] = useState(1);

    return (
        <div className={classes.levels}>
            {LEVELS.map((level) => <LevelItem onClick={() => {setLevel(level.id); setIndexActiveElement(level.id)}} activeIndex={indexActiveElement} blockIndex={level.id} active={level.activeColor} notActive={level.notActiveColor} />)}
        </div>
    );
};

export default LevelsList;