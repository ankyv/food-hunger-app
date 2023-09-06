import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Your Cart - {cartItems.length}</h2>
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
              {...item?.foodItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
