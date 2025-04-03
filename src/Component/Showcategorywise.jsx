import React from 'react'

export const Showcategorywise = ({meals}) => {
    console.log(meals);
  return (
    <>
    <h1 className='font-bold text-4xl text-left my-4'>Meals</h1>
    <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 py-9'>
        {meals.length === 0 && <h1 className='text-center col-span-5'>Please Select a Category for listing meals.....!</h1> } 
        {
            meals.map(meal=>
                <div className='shadow-xl p-2'>
                    <img src= {meal.strMealThumb} alt={meal.strMeal} />
                    <h1>{meal.strMeal}</h1>
                </div>
            )
        }
    </div>
    </>
  )
}
