import React, { useContext } from "react";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value="products context">
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
