import React, {useEffect, useState} from 'react';
import {CategoriesService} from "../../../API/CategoriesService";
import classes from "./CategoriesList.module.css";
import CategoriesItem from "./CategoriesItem";

const CategoriesList = () => {
    const [categories, setCategories] = useState([{}]);
    const categories_active = React.useRef(null);
    const success = (res) => {
        setCategories([...res.data]);
    }

    useEffect(() => {
        async function getToken() {
            await CategoriesService.GetAllCategories(success);
        }
        getToken();
    }, []);

    const f = (position) => {
        setTimeout(() => {
            categories_active.current.style.transform = `translate(${(position-1)*100}%)`;
        }, 100)
    }

    return (
        <div className={classes.categories}>
            <div ref={categories_active} className={classes.categories_active}></div>
            {categories.map((cat) => <CategoriesItem onClick={() => {f(cat["id"])}} id={cat["id"]} name={cat["name"]}/>)}
        </div>
    );
};

export default CategoriesList;