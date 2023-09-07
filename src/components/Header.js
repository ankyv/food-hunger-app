import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="container">
        <div>
          <h1 className="title">Food Hunger</h1>
        </div>
        <div>
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart - {cartItems.length}</Link>
            </li>
            <li
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
