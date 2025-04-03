import React, { useState } from "react";

export const ShowSearchResult = ({ meals }) => {
  console.log(meals);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-4 w-11/12 mx-auto">
        {meals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="border p-4 rounded shadow-lg">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover"
                />
                <h2 className="text-lg font-extrabold mt-2">{meal.strMeal}</h2>
                <h2 className="text-lg font-semibold mt-2 line-clamp-3">
                  {meal.strInstructions}
                </h2>
                <div className="flex justify-between items-center ">
                  <h1>Category: {meal.strCategory}</h1>
                  <h1>Area: {meal.strArea}</h1>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={() => setIsOpen(true)}
                >
                  Watch Recipe
                </button>
                {isOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-[400px] relative">
                      <button
                        className="absolute top-2 right-2 text-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        ✖
                      </button>
                      <h2 className="text-lg font-bold mb-2">{meal.strMeal}</h2>

                      {/* YouTube Video */}
                      <iframe
                        width="100%"
                        height="200"
                        src={meal.strYoutube.replace("watch?v=", "embed/")}
                        title={meal.strMeal}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">
            No matching results found. Try searching for something else!
          </p>
        )}
      </div>
    </>
  );
};
