import { useState } from 'react';

function EditRecipe({ recipe, onSave }) {
    const [name, setName] = useState(recipe.name);
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(','));
    const [instructions, setInstructions] = useState(recipe.instructions);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRecipe = { ...recipe, name, ingredients: ingredients.split(','), instructions };
        onSave(updatedRecipe);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditRecipe;
