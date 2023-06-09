import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import { useState } from "react";
import { RangeFilterCell } from "./RangeFilterCell";
import originalRecipes from "../assets/recipes.json";
const recipes = originalRecipes.slice(0, 100);

const initialFilter = {
  logic: "and",
  filters: [],
};

export const RecipesGridWithCustomCellFilter = () => {
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
        width="210px"
        filter="numeric"
        filterCell={RangeFilterCell}
      />
      <Column field="cuisine" title="Cuisine" width="260px" />
      <Column field="course" title="Course" width="260px" />
      <Column
        field="servings"
        title="Servings"
        width="210px"
        filter="numeric"
        filterCell={RangeFilterCell}
      />
      <Column
        field="cookTime"
        title="Cooking Time"
        width="210px"
        filter="numeric"
        format="{0} mins"
        filterCell={RangeFilterCell}
      />
      <Column
        field="prepTime"
        title="Prep Time"
        width="210px"
        filter="numeric"
        format="{0} mins"
        filterCell={RangeFilterCell}
      />
      <Column
        field="totalTime"
        title="Total Time"
        width="210px"
        filter="numeric"
        format="{0} mins"
        filterCell={RangeFilterCell}
      />
    </Grid>
  );
};

export default RecipesGridWithCustomCellFilter;
