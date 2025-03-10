function RecipeList({ recipes, onEdit, onDelete }) {
    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        {recipe.name}
                        <button onClick={() => onEdit(recipe)}>Edit</button>
                        <button onClick={() => onDelete(recipe)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
