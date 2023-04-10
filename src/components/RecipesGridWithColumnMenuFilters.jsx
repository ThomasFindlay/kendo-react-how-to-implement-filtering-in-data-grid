import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import { useState } from "react";
import { ColumnMenu, ColumnMenuCheckboxFilter } from "./columnMenu";
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

export const RecipesGridWithColumnMenuFilters = () => {
  const [filter, setFilter] = useState(initialFilter);
  return (
    <Grid
      style={{
        height: "420px",
      }}
      data={filterBy(recipes, filter)}
      pageSize={20}
      filter={filter}
      onFilterChange={e => setFilter(e.filter)}
    >
      <Column
        field="recipe"
        title="Recipe"
        width="250px"
        columnMenu={ColumnMenu}
      />
      <Column
        field="numIngredients"
        title="Ingredients"
        width="240px"
        filter="numeric"
        columnMenu={ColumnMenu}
      />
      <Column
        field="cuisine"
        title="Cuisine"
        width="240px"
        columnMenu={ColumnMenu}
      />
      <Column
        field="course"
        title="Course"
        width="240px"
        columnMenu={ColumnMenu}
      />
      <Column
        field="servings"
        title="Servings"
        width="240px"
        filter="numeric"
        columnMenu={ColumnMenu}
      />
      <Column
        field="cookTime"
        title="Cooking Time"
        width="240px"
        filter="numeric"
        format="{0} mins"
        columnMenu={ColumnMenu}
      />
      <Column
        field="prepTime"
        title="Prep Time"
        width="240px"
        filter="numeric"
        format="{0} mins"
        columnMenu={ColumnMenu}
      />
      <Column
        field="totalTime"
        title="Total Time"
        width="240px"
        filter="numeric"
        format="{0} mins"
        columnMenu={ColumnMenu}
      />
    </Grid>
  );
};

export default RecipesGridWithColumnMenuFilters;
