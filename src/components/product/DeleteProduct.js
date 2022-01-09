import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../context/product-context";

const DeleteProduct = (props) => {
  const productCxt = useContext(ProductContext);
  const navigate = useNavigate();

  const { prodId: productId } = props;

  const handleDeleteBtnClick = () => {
    productCxt.removeProduct(productId);
    navigate("/products", {replace: true});
  };

  return (
    <button type="button" onClick={handleDeleteBtnClick}>
      Delete Product
    </button>
  );
};

export default DeleteProduct;
