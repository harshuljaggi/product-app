import { Fragment, useContext } from "react";
import Table from "../UI/Table";
import ProductContext from "../../context/product-context";
import { useNavigate } from "react-router-dom";

const ProductList = (props) => {
  const prodCxt = useContext(ProductContext);
  const navigate = useNavigate();
  const { products } = prodCxt;

  const handleDetailBtnClick = (productId) => {
    navigate(productId, { replace: false });
  };

  if (products && products.length === 0) {
    return <p>No Product Found, Please add a Product.</p>;
  }

  return (
    <Fragment>
      <Table rows={products} onDetailBtnClick={handleDetailBtnClick} />
    </Fragment>
  );
};

export default ProductList;
