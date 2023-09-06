import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h2>Your Cart - {cartItems.length}</h2>
      <div>
        {cartItems?.map((foodItem) => {
          return <FoodItem {...foodItem?.card?.info} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
