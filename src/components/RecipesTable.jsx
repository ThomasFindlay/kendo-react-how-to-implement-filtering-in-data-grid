import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import originalRecipes from "../assets/recipes.json";
const recipes = originalRecipes.slice(0, 100);

export const RecipesTable = () => {
  return (
    <Grid
      style={{
        height: "420px",
      }}
      data={recipes}
      pageSize={20}
    >
      <Column field="recipe" title="Recipe" width="250px" />
      <Column field="numIngredients" title="Ingredients" width="150px" />
      <Column field="cuisine" title="Cuisine" width="120px" />
      <Column field="course" title="Course" width="120px" />
      <Column field="servings" title="Servings" width="120px" />
      <Column field="cookTime" title="Cooking Time" width="150px" />
      <Column field="prepTime" title="Prep Time" width="120px" />
      <Column field="totalTime" title="Total Time" width="120px" />
    </Grid>
  );
};

export default RecipesTable;
