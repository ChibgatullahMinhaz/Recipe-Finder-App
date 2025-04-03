import React, { useEffect, useState } from "react";
import { Showcategorywise } from "./Showcategorywise";

export const Category = () => {
  const [category, setCategory] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      setCategory(data.categories);
    };
    getCategory();
  }, []);

  const handleCategoryData = async (Category) => {
    console.log(Category);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`
    );
    const data = await res.json();
    setMeals(data.meals);
  };

  return (
    <>
      <div className="max-w-11/12 mx-auto">
        <h1 className="text-left font-bold mt-8">Category</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-8">
          {category.map((cate) => (
            <div
              onClick={() => handleCategoryData(`${cate.strCategory}`)}
              key={cate.idCategory}
              className="rounded-lg shadow-2xl p-4 cursor-pointer"
            >
              <img src={cate.strCategoryThumb} alt="" />
              <h1 className="font-bold text-2xl">{cate.strCategory}</h1>
              <h1 className="line-clamp-3">{cate.strCategoryDescription}</h1>
            </div>
          ))}
        </div>
        <Showcategorywise meals={meals}></Showcategorywise>
      </div>
    </>
  );
};
