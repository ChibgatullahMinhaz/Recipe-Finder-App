import React from 'react'

export const Showcategorywise = ({meals}) => {
    console.log(meals);
  return (
    <>
    <h1 className='font-bold text-4xl text-left my-4'>Meals</h1>
    <div className='grid grid-cols-2 grid-cols-5 gap-4'>
        {
            meals.map(meal=>
                <div>
                    <img src= {meal.strMealThumb} alt="" />
                   
                    <h1>{meal.strMeal}</h1>
                </div>
            )
        }
    </div>
    </>
  )
}
