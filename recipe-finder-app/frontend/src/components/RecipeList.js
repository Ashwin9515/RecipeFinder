import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("/api/recipes").then((response) => setRecipes(response.data));
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Recipe</Link>
    </div>
  );
}

export default RecipeList;
