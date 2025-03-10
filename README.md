# Recipe Finder

## Input
The Recipe Finder application allows the user to enter his required recipe immediately. Users can enter the recipe name, ingredients as a comma-separated list, and cooking steps. The application fetches the inputs through form input and stores them in the app state.

## Process
When the recipe data is entered, the application computes it. React's `useState manages the application's state changes,` and the list of recipes is displayed. Recipes are objects with an ID, name, ingredients, and instructions. The application can add, update, and delete recipes. The update can modify any field, while the delete will delete the recipe from the list.

## Output
The Output is a real-time list of recipes returned to the user. A recipe can be clicked to obtain details, and the list can be erased or refreshed in real real-time