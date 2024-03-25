import React, {useState} from 'react';
import classes from "./EditUserInput.module.css";
import PenImage from "../../../assets/img/pen.png"
const EditUserInput = (props) => {
    const [value, setValue] = useState("");
    const [opacity, setOpacity] = useState(0.5);

    const changeStatusPen = (e) => {
        setValue(e.target.value);
        if (e.target.value) {
            setOpacity(1);
        } else {
            setOpacity(.5);
        }
    }
    return (
        <div className={classes.userInput}>
            <input onChange={(e)=> {changeStatusPen(e)}} {...props} className={classes.userInput_input} type="text"/>
            <img src={PenImage} style={{width: "28px", height: "28px", opacity: opacity, cursor: (value) ? "pointer":""}}/>
        </div>
    );
};

export default EditUserInput;