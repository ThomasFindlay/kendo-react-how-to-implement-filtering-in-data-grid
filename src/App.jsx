import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DefaultRecipesGrid from "./components/DefaultRecipesGrid.jsx";
import RecipesGridWithColumnFilters from "./components/RecipesGridWithColumnFilters.jsx";
import RecipesGridWithCustomCellFilter from "./components/RecipesGridWithCustomCellFilter.jsx";
import RecipesGridWithColumnMenuFilters from "./components/RecipesGridWithColumnMenuFilters";

function App() {
  return (
    <div className="App">
      <h1>Kendo React Grid Filtering</h1>
      {/* <h2>Default Grid</h2>
      <DefaultRecipesGrid />
      <h2>Grid with column filters</h2>
      <RecipesGridWithColumnFilters /> */}
      <h2>Grid with custom column cell filter</h2>
      <RecipesGridWithCustomCellFilter />
      {/* <h2>Grid with column menu filters</h2>
      <RecipesGridWithColumnMenuFilters /> */}
    </div>
  );
}

export default App;
