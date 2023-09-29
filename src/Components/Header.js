import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../redux/Cart/action";
import logo from "../logo.svg";
import cart from "../cart.jpg";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  const [cartQuant, setCartQuant] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    if (cartItems.length == 0) {
      dispatch(getCart());
    }
  }, []);
  const cartTotal = () => {
    let total = 0;
    cartItems.map((elem) => {
      total += elem.quant;
    });
    return total;
  };
  useEffect(() => {
    setCartQuant(cartTotal());
  }, [cartItems]);
  return (
    <header style={{ position: "static" }}>
      <img src={logo} className="app-logo" />
      <div style={{ color: "#fff" }}>Hello, Select your address</div>

      <input type="text" className="search" />
      <select>
        <option>En</option>
      </select>

      <Link to="/cart" style={{ color: "#fff" }}>
        <div className="cart">
          <img src={cart} className="cart-img" />
          <p className="overlay">{cartQuant}</p>
          Cart
        </div>
      </Link>
    </header>
  );
}
