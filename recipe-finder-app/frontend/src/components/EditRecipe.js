import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipe() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/recipes/${id}`).then((response) => {
      const recipe = response.data;
      setName(recipe.name);
      setIngredients(recipe.ingredients);
      setInstructions(recipe.instructions);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/recipes/${id}`, { name, ingredients, instructions })
      .then(() => navigate("/"));
  };

  const handleDelete = () => {
    axios.delete(`/api/recipes/${id}`).then(() => navigate("/"));
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Ingredients:
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
        <label>
          Instructions:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </label>
        <button type="submit">Update Recipe</button>
        <button type="button" onClick={handleDelete}>
          Delete Recipe
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;
