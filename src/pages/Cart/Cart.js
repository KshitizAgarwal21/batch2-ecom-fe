import React from "react";
import logo from "../../../src/logo.svg";
import cart from "../../cart.jpg";
import product from "../../product/product.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Cart() {
  return (
    <div
      style={{ background: "#efefef", height: "100vh", position: "relative" }}
    >
      <header style={{ position: "static" }}>
        <img src={logo} className="app-logo" />
        <div style={{ color: "#fff" }}>Hello, Select your address</div>

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
                <label style={{ fontSize: "12px" }}>This will be a gift </label>
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
        <div style={{ width: "20%" }}>
          <div className="cart-product-pricing">
            ✅{" "}
            <span style={{ color: "green", fontSize: "12px" }}>
              Your order is eligible for FREE Delivery.
            </span>{" "}
            <span style={{ color: "grey", fontSize: "12px" }}>
              Select this option at checkout.
              <span style={{ color: "dodgerblue", fontSize: "12px" }}>
                Details
              </span>
            </span>
            <h3>Subtotal (1 item): 3,999.00</h3>
            <input type="checkbox"></input>
            <label style={{ fontSize: "14px" }}>
              This order contains a gift{" "}
            </label>
            <button className="cart-buy-btn">Proceed to buy</button>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>EMI Available</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up). Learn more
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="suggestions">
            <h3>
              Customers who shopped for Lifelong LLBC2001 20T Cycle (Yellow and
              Black) I I... also shopped for:
            </h3>
            <div className="suggested-products">
              <img src={product} />
              <div className="side-prod-desc">
                <span style={{ color: "dodgerblue", fontSize: "14px" }}>
                  Hero Blast 20T Kids Cycle with mudgaurds | Easy Self Assembly
                  | Cycle for Age 7 to 10 Years Boys and Girls 12 Inches
                </span>
                <br></br>
                <span>⭐️⭐️⭐️⭐️ 3.8 out of 5 stars 3,614</span>
                <br></br>
                <span style={{ color: "red" }}>₹4,299.00</span> 
                <button className="suggested-cart-btn">Add to cart</button>
              </div>
            </div>
            <div className="suggested-products">
              <img src={product} />
              <div className="side-prod-desc">
                <span style={{ color: "dodgerblue", fontSize: "14px" }}>
                  Hero Blast 20T Kids Cycle with mudgaurds | Easy Self Assembly
                  | Cycle for Age 7 to 10 Years Boys and Girls 12 Inches
                </span>
                <br></br>
                <span>⭐️⭐️⭐️⭐️ 3.8 out of 5 stars 3,614</span>
                <br></br>
                <span style={{ color: "red" }}>₹4,299.00</span> 
                <button className="suggested-cart-btn">Add to cart</button>
              </div>
            </div>
            <div className="suggested-products">
              <img src={product} />
              <div className="side-prod-desc">
                <span style={{ color: "dodgerblue", fontSize: "14px" }}>
                  Hero Blast 20T Kids Cycle with mudgaurds | Easy Self Assembly
                  | Cycle for Age 7 to 10 Years Boys and Girls 12 Inches
                </span>
                <br></br>
                <span>⭐️⭐️⭐️⭐️ 3.8 out of 5 stars 3,614</span>
                <br></br>
                <span style={{ color: "red" }}>₹4,299.00</span> 
                <button className="suggested-cart-btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
