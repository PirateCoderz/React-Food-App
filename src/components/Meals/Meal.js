import React, { Fragment } from 'react';
import MealSummary from './MealSummary/MealSummary';
import AvailableMeals from './DummyMeals/AvailableMeals';


const Meals = () => {
    return ( 
        <Fragment>
            <MealSummary />
            <AvailableMeals />
        </Fragment>
     );
}
 
export default Meals;