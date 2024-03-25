import React from 'react';
import classes from "./CategoriesList.module.css";

const CategoriesItem = ({id, name, onClick}) => {
    return (
        <div onClick={onClick} className={classes.categoriesItem} style={{width: '50%', cursor: "pointer", color: "white", display: "flex", fontSize: "24px", justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(141, 156, 166, 1)'}}>
            {name}
        </div>
    );
};

export default CategoriesItem;