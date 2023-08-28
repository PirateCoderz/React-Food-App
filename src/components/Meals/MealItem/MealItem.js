import React from 'react';
import classes from './MealItem.module.css';
import MealForm from './MealForm';


const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.heading}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
                <div><MealForm id={props.id} /></div>
        </li>
    );
}

export default MealItem;