import "./App.css";
import RecipesTable from "./components/RecipesTable.jsx";
import RecipesGridWithColumnFilters from "./components/RecipesGridWithColumnFilters.jsx";
import RecipesGridWithCustomCellFilter from "./components/RecipesGridWithCustomCellFilter.jsx";
import RecipesGridWithColumnMenuFilters from "./components/RecipesGridWithColumnMenuFilters";

function App() {
  return (
    <div className="App">
      <h1>KendoReact Data Grid Filtering</h1>
      {/* <h2>Default Table</h2>
      <RecipesTable /> */}
      {/* <h2>Grid with column filters</h2>
      <RecipesGridWithColumnFilters /> */}
      {/* <h2>Grid with custom column cell filter</h2>
      <RecipesGridWithCustomCellFilter /> */}
      <h2>Grid with column menu filters</h2>
      <RecipesGridWithColumnMenuFilters />
    </div>
  );
}

export default App;
