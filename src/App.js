import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "a83ed5b2";
  const APP_KEY = "233776a535565302e95b2597f1ae0a48";

  // calling a state to save the data which are coming from the api
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  // function for async
  // fetching the data and then calling it on useEffect

  // we are fetching and waitting for the data to response
  // then we are catching the data
  // we don't know how long will it take to get the response back
  // some data do not come intantly
  // so we are mentioning await to wait for the data
  // this is a promise and we are waiting with await

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits); // saving the recipes on the state
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
