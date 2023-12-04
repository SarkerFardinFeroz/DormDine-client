import React from 'react';
import useMeals from '../../hooks/useMeals';
import MealsTab from '../Home/MealsByCat/MealsTab';
import Cover from '../../components/Cover/Cover';

const UpComingMeals = () => {
    const image = `https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
    const [meals,loading] = useMeals()
    const upcomingMeals = meals.filter((meal) => meal.upcoming === true);
// console.log(upcomingMeals); 
    return (
        <div>
           <div className='my-5'>
           <Cover img={image} title="Upcoming Meals" />
           </div>
             <MealsTab items={upcomingMeals} loading={loading} />
        </div>
    );
};

export default UpComingMeals;