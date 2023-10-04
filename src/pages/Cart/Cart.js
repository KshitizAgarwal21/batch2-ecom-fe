import React, { useEffect, useMemo, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import product from "../../product/product.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getCart, checkout } from "../../redux/Cart/action";
import Header from "../../Components/Header";
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const loading = useSelector((state) => state.cart.loading);
  const dispatch = useDispatch();
  const [cartStatus, setCartStatus] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  useEffect(() => {
    if (cartItems.length == 0) {
      dispatch(getCart());
    }
  }, []);
  const orderStatus = useSelector((state) => state.cart.orderStatus);
  const buynow = () => {
    dispatch(
      checkout({
        payload: {},
        cb: (result) => {
          if (result.status == 200) {
            setOpen(true);
            setCartStatus(!cartStatus);
          }
        },
      })
    );
  };
  useEffect(() => {
    dispatch(getCart());
  }, [cartStatus]);
  function getSubTotal() {
    let total = 0;
    cartItems.map((elem) => {
      total = total + elem.prm.price * elem.quant;
    });
    console.log(total);
    return total;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);

  const subTotal = useMemo(() => {
    return getSubTotal();
  }, [cartItems]);

  return (
    <div
      style={{ background: "#efefef", height: "100vh", position: "relative" }}
    >
      {/* <header style={{ position: "static" }}>
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
      </header> */}
      <Header />
      <div className="cart-container">
        <div className="cart-product">
          <h1>Shopping Cart</h1>
          <hr></hr>
          {loading && <>Loading...</>}
          {!loading && (
            <>
              {" "}
              <div>
                {cartItems?.map((elem) => {
                  return (
                    <>
                      {" "}
                      <div className="sub-cart-prod">
                        <div>
                          <img src={elem.prm.images[0]}></img>
                        </div>
                        <div className="sub-cart-details">
                          <h3>
                            {elem.prm.name} {elem.prm.desc}
                          </h3>
                          <p className="deal">Deal</p>
                          <p className="discount">
                            -43% <span className="sp">Rs {elem.prm.price}</span>{" "}
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
                          <label style={{ fontSize: "12px" }}>
                            This will be a gift{" "}
                          </label>
                          <span style={{ fontSize: "12px" }}>
                            <a href="#">Learn More</a>
                          </span>
                          <br></br>
                          <p>
                            <b>Style Name:</b> <span>LLBC2001</span>
                          </p>
                          <div style={{ display: "flex" }}>
                            <select>
                              <option>Qty: {elem.quant}</option>
                            </select>
                            <div className="cart-action">Delete</div>
                            <div className="cart-action">Save for later</div>
                            <div className="cart-action">
                              See more like this
                            </div>
                            <div className="cart-action">Share</div>
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                    </>
                  );
                })}

                <h3 style={{ textAlign: "right" }}>
                  Subtotal ({cartItems?.length} items): {subTotal}
                </h3>
              </div>
            </>
          )}
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
            <h3>
              Subtotal ({cartItems?.length} item): {subTotal}
            </h3>
            <input type="checkbox"></input>
            <label style={{ fontSize: "14px" }}>
              This order contains a gift{" "}
            </label>
            <button className="cart-buy-btn" onClick={buynow}>
              Proceed to buy
            </button>
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Order Placed successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
