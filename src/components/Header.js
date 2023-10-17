import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="container">
        <Link to={"/"}>
          <div className="title-container">
            <h1 className="title">Food Hunger</h1>
          </div>
        </Link>
        <div className="navbar">
          <ul className="nav-items">
            <li className="home-nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="cart-nav-item">
              <Link to="/cart">Cart</Link>
            </li>
            <li
              onClick={() => {
                dispatch(toggleMenu());
              }}
              className="menu-nav-item"
            >
              Menu
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
