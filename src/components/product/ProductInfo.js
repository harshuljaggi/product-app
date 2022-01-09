import { Fragment, useContext } from "react";
import ProductContext from "../../context/product-context";
import DeleteProduct from "./DeleteProduct";

const ProductInfo = (props) => {
  const prodCxt = useContext(ProductContext);
  const { products } = prodCxt;
  const { productId } = props;

  const selectedProduct = products.find(
    (product) => product.productId === String(props.productId)
  );

  if (selectedProduct && selectedProduct.productId) {
    return (
      <Fragment>
        <h3>{selectedProduct.productName}</h3>
        <p>Product id : {selectedProduct.productId}</p>
        <p>Price : {selectedProduct.productPrice}</p>
        <p>Description : {selectedProduct.productDesc}</p>
        <br />
        <DeleteProduct prodId={productId} />
      </Fragment>
    );
  }

  return <p>No Details found for Id : {productId}</p>;
};

export default ProductInfo;
