import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h2>Your Cart - {cartItems.length}</h2>
    </div>
  );
};

export default Cart;
