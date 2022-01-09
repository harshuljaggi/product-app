import { useParams } from "react-router-dom";
import ProductInfo from "../components/product/ProductInfo";

const ProductDetail = () => {
  const params = useParams();
  const { productId } = params;

  return (
    <section>
      <ProductInfo productId={productId} />
    </section>
  );
};

export default ProductDetail;
