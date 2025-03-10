import { useState } from 'react';

function AddRecipe({ onAdd }) {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = { id: Date.now(), name, ingredients: ingredients.split(','), instructions };
        onAdd(newRecipe);
        setName('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients (comma-separated)"
                required
            />
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required />
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default AddRecipe;
