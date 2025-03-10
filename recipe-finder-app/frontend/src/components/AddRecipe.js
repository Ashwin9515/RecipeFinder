import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://fictional-space-rotary-phone-x55g44vvpw4vc9xpj-5000.app.github.dev/api/recipes", formData);
    navigate("/");
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <label key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              type={key === "name" ? "text" : "textarea"}
              name={key}
              value={value}
              onChange={handleChange}
            />
          </label>
        ))}
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
