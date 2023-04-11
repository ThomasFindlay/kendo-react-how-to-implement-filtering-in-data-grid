import {
  GridColumnMenuFilter,
  GridColumnMenuCheckboxFilter,
} from "@progress/kendo-react-grid";
import recipes from "../assets/recipes.json";

export const ColumnMenu = props => {
  return (
    <div>
      <GridColumnMenuFilter {...props} expanded={true} />
    </div>
  );
};

export const ColumnMenuCheckboxFilter = props => {
  return (
    <div>
      <GridColumnMenuCheckboxFilter {...props} data={recipes} expanded={true} />
    </div>
  );
};
