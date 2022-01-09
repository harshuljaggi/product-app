import React, { useState } from "react";
import ProductContext from "./product-context";

const Provider = (props) => {
  const [products, setProducts] = useState([]);

  const addProductHandler = (productObj) => {
    setProducts((prevState) => {
      const productList = [...prevState];
      const product = {
        ...productObj,
        productId: String(productList.length + 1)
      };
      productList.push(product);
      return productList;
    });
  };

  const removeProductHandler = (prodId) => {
    console.log(prodId);
    setProducts((prevState) => {
      const productList = [...prevState]; 
      const productIndex = productList.findIndex(product => product.productId === prodId);

      // Remove the product from product list
      productList.splice(productIndex, 1);

      // rearrange the product ids in product List
      for(let index = productIndex; index < productList.length; index++ ) {
        productList[index].productId = String(Number(productList[index].productId) - 1);
      }

      return productList;
    });
  };

  const productValue = {
    products,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <ProductContext.Provider value={productValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Provider;
