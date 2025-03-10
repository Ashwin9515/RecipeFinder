import { useState } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import DeleteRecipe from './components/DeleteRecipe';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [activeRecipe, setActiveRecipe] = useState(null);
    const [mode, setMode] = useState('view'); // 'view', 'edit', 'delete'

    const handleAddRecipe = (newRecipe) => setRecipes([...recipes, newRecipe]);
    const handleEditRecipe = (updatedRecipe) => {
        setRecipes(recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)));
        setMode('view');
    };
    const handleDeleteRecipe = (recipeId) => {
        setRecipes(recipes.filter((r) => r.id !== recipeId));
        setMode('view');
    };

    return (
        <div>
            {mode === 'view' && (
                <>
                    <RecipeList recipes={recipes} onEdit={(recipe) => { setActiveRecipe(recipe); setMode('edit'); }} onDelete={(recipe) => { setActiveRecipe(recipe); setMode('delete'); }} />
                    <AddRecipe onAdd={handleAddRecipe} />
                </>
            )}
            {mode === 'edit' && <EditRecipe recipe={activeRecipe} onSave={handleEditRecipe} />}
            {mode === 'delete' && <DeleteRecipe recipe={activeRecipe} onDelete={handleDeleteRecipe} />}
        </div>
    );
}

export default App;
