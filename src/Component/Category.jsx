import React, { useEffect, useState } from "react";

export const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      console.log(data.categories);
      setCategory(data.categories);
    };
    getCategory();
  }, []);
  return (
    <>
    <div className='max-w-11/12 mx-auto'>
        
    <h1 className="text-left font-bold mt-8">Category</h1>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8">
      {category.map((cate) => (
        <div
          key={cate.idCategory}
          className="rounded-lg shadow-2xl p-4 cursor-pointer"
        >
          <img src={cate.strCategoryThumb} alt="" />
          <h1 className="font-bold text-2xl">{cate.strCategory}</h1>
          <h1 className="line-clamp-3">{cate.strCategoryDescription}</h1>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};
