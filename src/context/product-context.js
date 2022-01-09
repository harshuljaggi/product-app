import React from "react";

const ProductContext = React.createContext({
  products: [],
  addProduct: () => {},
  removeProduct: () => {}
});

export default ProductContext;