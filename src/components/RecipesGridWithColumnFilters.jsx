import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import { useState } from "react";
import originalRecipes from "../assets/recipes.json";

const recipes = originalRecipes.slice(0, 100);
const initialFilter = {
  logic: "and",
  filters: [
    {
      field: "recipe",
      operator: "contains",
      value: "Chicken",
    },
  ],
};

const gridStyle = {
  height: "420px",
};

export const RecipesGridWithColumnFilters = () => {
  const [filter, setFilter] = useState(initialFilter);

  return (
    <Grid
      style={gridStyle}
      data={filterBy(recipes, filter)}
      pageSize={20}
      filterable
      filter={filter}
      onFilterChange={e => setFilter(e.filter)}
    >
      <Column field="recipe" title="Recipe" width="250px" filterable />
      <Column
        field="numIngredients"
        title="Ingredients"
        width="240px"
        filter="numeric"
      />
      <Column field="cuisine" title="Cuisine" width="240px" />
      <Column field="course" title="Course" width="240px" />
      <Column
        field="servings"
        title="Servings"
        width="240px"
        filter="numeric"
      />
      <Column
        field="cookTime"
        title="Cooking Time"
        width="240px"
        filter="numeric"
        format="{0} mins"
      />
      <Column
        field="prepTime"
        title="Prep Time"
        width="240px"
        filter="numeric"
        format="{0} mins"
      />
      <Column
        field="totalTime"
        title="Total Time"
        width="240px"
        filter="numeric"
        format="{0} mins"
      />
    </Grid>
  );
};

export default RecipesGridWithColumnFilters;
