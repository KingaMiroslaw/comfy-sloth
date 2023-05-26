import React, { useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";

const initialState = {
  filtered_products: [],
  all_products: [],
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
