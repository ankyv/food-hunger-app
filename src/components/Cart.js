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
    <div className="cart">
      <div className="container">
        <div className="cart-container">
          <div className="cart-details">
            <div className="cart-info">
              <h2>Cart Items : {cartItems.length}</h2>
              {/* <h2>Total Price : {cartTotal / 100}</h2> */}
            </div>
            <div className="cart-buttons">
              <button
                className="clear-cart-btn"
                onClick={() => {
                  handleClearCart();
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="cart-items">
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
        {cartItems.length > 0 && (
          <div className="checkout">
            <h2>Bill Details</h2>
            <div className="bill-details">
              <div className="bill-detail">
                <p>Item Total</p>
                <p>&#8377; {(cartTotal / 100).toFixed(2)}</p>
              </div>
              <div className="bill-detail">
                <p>Delivery Fee</p>
                <p>&#8377; 50</p>
              </div>
              <div className="bill-detail">
                <p>GST and Restaurant Charges</p>
                <p>&#8377; 100</p>
              </div>
            </div>
            <div className="total">
              <p>To Pay</p>
              <p>&#8377; {(cartTotal / 100 + 150).toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
