import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import { useState } from "react";
import recipesOriginal from "../assets/recipes.json";
import { useEffect } from "react";

const recipes = recipesOriginal.slice(0, 100);
const initialFilter = {
  logic: "and",
  filters: [
    // {
    //   field: "recipe",
    //   operator: "contains",
    //   value: "Chicken",
    // },
    // {
    //   field: "cuisine",
    //   operator: "contains",
    //   value: "Asian",
    // },
  ],
};

const gridStyle = {
  height: "420px",
};
const pageSize = 25;

export const RecipesGridWithVirtualScroll = () => {
  const [filter, setFilter] = useState(initialFilter);
  const [filteredRecipes, setFilteredRecipes] = useState(
    filterBy(recipes, filter)
  );
  const [skip, setSkip] = useState(0);
  const pageChange = event => {
    setSkip(event.page.skip);
  };

  useEffect(() => {
    setFilteredRecipes(filterBy(recipes, filter));
  }, [filter]);

  return (
    <Grid
      style={gridStyle}
      data={filteredRecipes}
      pageSize={pageSize}
      filterable
      filter={filter}
      onFilterChange={e => setFilter(e.filter)}
      total={recipes.length}
      skip={skip}
      scrollable={"virtual"}
      onPageChange={pageChange}
      rowHeight={75}
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

export default RecipesGridWithVirtualScroll;
