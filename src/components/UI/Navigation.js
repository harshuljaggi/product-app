import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <ul className={classes["navigation-list"]}>
        <li className={classes["navigation-list-item"]}>
          <NavLink to="/products" className={({isActive}) => isActive ? `${classes.link} ${classes.active}`  : `${classes.link}`}>Products</NavLink>
        </li>
        <li className={classes["navigation-list-item"]}>
          <NavLink to="/add-product" className={({isActive}) => isActive ? `${classes.link} ${classes.active}`  : `${classes.link}`}>Add Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
