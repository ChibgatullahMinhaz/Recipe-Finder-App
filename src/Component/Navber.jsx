import React, { useState, useEffect } from "react";
import { ShowSearchResult } from "./ShowSearchResult";
import { Loader } from "./Loader";
export const Navber = () => {
  const [theme, setTheme] = useState(false);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleQuery = async (e) => {
    setIsLoading(true)
   try {
    const query = e.target.value.trim();
    const searchApi = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await searchApi.json();
    setResult(data.meals || []);
   } catch (error) {
    console.error('error is', error);
   }finally{
    setIsLoading(false)
   }
  };

  return (
    <>
      <div className="p-4 shadow-2xl">
        <header className={theme ? "dark" : "light"}>
          <nav className="flex justify-between items-center">
            <h1 className="font-bold text-3xl ">Recipe Finder</h1>
            <div>
              <input
                type="search"
                className="input w-full text-black"
                placeholder=" Search Recipe Video......"
                onChange={handleQuery}
              />
            </div>
            <button onClick={handleTheme}>
              {theme ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </header>
      </div>
      {isLoading && <Loader></Loader> }
      <ShowSearchResult meals={result}></ShowSearchResult>
    </>
  );
};
