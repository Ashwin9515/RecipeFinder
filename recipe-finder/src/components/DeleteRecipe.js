function DeleteRecipe({ recipe, onDelete }) {
    return (
        <div>
            <h2>Are you sure you want to delete the recipe: {recipe.name}?</h2>
            <button onClick={() => onDelete(recipe.id)}>Delete</button>
        </div>
    );
}

export default DeleteRecipe;
