import React, { useEffect, useState } from "react";
import logo from "../../../src/logo.svg";
import cart from "../../cart.jpg";
import car1 from "../../car1.jpg";
import car2 from "../../car2.jpg";
import car3 from "../../car3.jpg";
export default function Home() {
  const arr = [car1, car2, car3];
  const [index, setIndex] = useState(0);
  const [media, setMedia] = useState();
  const handleLeft = () => {
    setIndex((prev) => prev - 1);
    setMedia(arr[index]);
  };
  const handleRight = () => {
    setIndex((prev) => prev + 1);
    setMedia(arr[index]);
  };
  useEffect(() => {
    setMedia(arr[index]);
  });

  return (
    <div>
      <header>
        <img src={logo} className="app-logo" />
        <div>Hello, Select your address</div>

        <input type="text" className="search" />
        <select>
          <option>En</option>
        </select>

        <div className="cart">
          <img src={cart} className="cart-img" />
          <p className="overlay">1</p>
          Cart
        </div>
      </header>

      <div className="carousel-container">
        <p className="nav left" onClick={handleLeft}>
          Left
        </p>
        <p className="nav right" onClick={handleRight}>
          Right
        </p>
        <img src={media}></img>
      </div>
    </div>
  );
}
