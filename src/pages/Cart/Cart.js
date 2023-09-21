import React from "react";
import product from "../../product/product.jpg";
export default function Cart() {
  return (
    <div
      style={{ background: "#efefef", height: "100vh", position: "relative" }}
    >
      <div className="cart-container">
        <div className="cart-product">
          <h1>Shopping Cart</h1>
          <hr></hr>
          <div>
            <div className="sub-cart-prod">
              <div>
                <img src={product}></img>
              </div>
              <div className="sub-cart-details">
                <h3>
                  Lifelong LLBC2001 Tribe 20T Cycle (Yellow and Black) I Ideal
                  for: Kids (5-8 Years) I Frame Size: 12" | Ideal Height : 3 ft
                  10 inch+ I Unisex Cycle| 85% Asse
                </h3>
                <p className="deal">Deal</p>
                <p className="discount">
                  -43% <span className="sp">Rs 3,999</span>{" "}
                </p>
                <p className="mrp">
                  M.R.P <strike>Rs 6,999</strike>
                </p>
                <span style={{ fontSize: "12px", color: "green" }}>
                  In stock
                </span>
                <br></br>
                <span style={{ fontSize: "14px", color: "gray" }}>
                  Eligible for FREE Shipping
                </span>
                <br></br>
                <input type="checkbox"></input>
                <label style={{ fontSize: "12px" }}></label>This will be a gift{" "}
                <span style={{ fontSize: "12px" }}>
                  <a href="#">Learn More</a>
                </span>
                <br></br>
                <p>
                  <b>Style Name:</b> <span>LLBC2001</span>
                </p>
                <div style={{ display: "flex" }}>
                  <select>
                    <option>Qty: 1</option>
                  </select>
                  <div className="cart-action">Delete</div>
                  <div className="cart-action">Save for later</div>
                  <div className="cart-action">See more like this</div>
                  <div className="cart-action">Share</div>
                </div>
              </div>
            </div>
            <hr></hr>

            <h3 style={{ textAlign: "right" }}>
              Subtotal (3 items): 11,997.00
            </h3>
          </div>
        </div>
        <div className="cart-product-pricing"> Product Pricing details</div>
      </div>
    </div>
  );
}
