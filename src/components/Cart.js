import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  let totalCartPrice = 0;

  cartItems.forEach((item) => {
    totalCartPrice += item.count * item.foodItem.price;
  });

  const [cartTotal, setCartTotal] = useState(totalCartPrice);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Your Cart - {cartItems.length}</h2>
      <h2>Total Price: {cartTotal / 100}</h2>
      <button
        className="clear-btn"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      <div>
        {cartItems?.map((item) => {
          return (
            <FoodItem
              key={item?.foodItem?.id}
              count={item?.count}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              {...item?.foodItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
