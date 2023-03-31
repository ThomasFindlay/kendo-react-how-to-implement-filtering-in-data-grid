import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import { useState } from "react";
import recipes from "../assets/recipes.json";

const initialFilter = {
  logic: "and",
  filters: [
    {
      field: "recipe",
      operator: "contains",
      value: "Chicken",
    },
    {
      field: "cuisine",
      operator: "contains",
      value: "Asian",
    },
  ],
};

export const RecipesGridWithColumnFilters = () => {
  const [filter, setFilter] = useState(initialFilter);
  return (
    <Grid
      style={{
        height: "420px",
      }}
      data={filterBy(recipes, filter)}
      pageSize={20}
      filterable
      filter={filter}
      onFilterChange={e => setFilter(e.filter)}
    >
      <Column field="recipe" title="Recipe" width="250px" />
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
