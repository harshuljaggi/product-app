import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../context/product-context";

const AddProductForm = () => {
  const prodCxt = useContext(ProductContext);
  const navigate = useNavigate();
  const [isAddBtnEnabled, setIsAddBtnEnabled] = useState(false);
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (
      prodName.trim() !== "" &&
      prodPrice.trim() !== "" &&
      prodDesc.trim() !== ""
    ) {
      setIsAddBtnEnabled(true);
    } else {
      setIsAddBtnEnabled(false);
    }
  }, [prodName, prodPrice, prodDesc]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    prodCxt.addProduct({
      productId: "",
      productName: prodName,
      productPrice: prodPrice,
      productDesc: prodDesc,
    });
    navigate("/products", {replace: true});
  };

  const nameChangeHandler = (event) => {
    setProdName(event.target.value.trim());
  };

  const priceChangeHandler = (event) => {
    setError(null);
    const price = event.target.value.trim();

    if (isNaN(price)) {
      setError("Price should be a number");
      return;
    }

    setProdPrice(price);
  };

  const descChangeHandler = (event) => {
    setProdDesc(event.target.value.trim());
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label labelfor="name">Product Name : </label>
      <br />
      <input type="text" id="name" name="name" onChange={nameChangeHandler} />
      <br />
      <br />
      <label labelfor="price">Product Price : </label>
      <br />
      <input
        type="text"
        id="price"
        name="price"
        onChange={priceChangeHandler}
      />
      <br />
      <br />
      <label labelfor="desc">Product Description :</label>
      <br />
      <input type="text" id="desc" name="desc" onChange={descChangeHandler} />
      {error && (
        <p>
          <br />
          <br />
          {error}
        </p>
      )}
      <br />
      <br />
      <button type="submit" disabled={!isAddBtnEnabled}>
        Add
      </button>
      &emsp;
      <button type="reset">
        Reset
      </button>
    </form>
  );
};

export default AddProductForm;
