import React, { useEffect, useState } from "react";
import { Showcategorywise } from "./Showcategorywise";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import { Loader } from "./Loader";

export const Category = () => {
  const [category, setCategory] = useState([]);
  const [meals, setMeals] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const getCategory = async () => {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategory(data.categories);
      };
      getCategory();
    } catch (error) {
      console.log("message is ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCategoryData = async (Category) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`
      );
      const data = await res.json();
      setMeals(data.meals);
    } catch (error) {
      console.log("error is", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isloading && <Loader></Loader>}
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
        {isloading && <Loader></Loader>}
        <Showcategorywise meals={meals}></Showcategorywise>
      </div>
    </>
  );
};
