import React, { useState } from "react";
import logo from "../../../src/logo.svg";
import cart from "../../cart.jpg";
import product from "../../product/product.jpg";
import style2 from "../../product/style2.jpg";
import style3 from "../../product/style3.jpg";
import p2 from "../../product/p2.jpg";
import p3 from "../../product/p3.jpg";
import p4 from "../../product/p4.jpg";
import p5 from "../../product/p5.jpg";
import guide from "../../product/guide.jpg";
export default function Product() {
  const arr = [1, 2, 3, 4];
  const [seemore, setseemore] = useState(false);
  const [img, setImg] = useState(product);
  const display = () => {
    setseemore(!seemore);
  };
  return (
    <div>
      <header style={{ position: "static" }}>
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

      <div className="product-main">
        <div className="route">
          Sports, Fitness & Outdoors›Cycling›Kids' Cycles & Accessories›Kids'
          Cycles
        </div>
        <div className="product-details">
          <div className="img-btns">
            <div onMouseOver={() => setImg(product)} className="thumbnail">
              <img src={product} />
            </div>

            <div onMouseOver={() => setImg(guide)} className="thumbnail">
              <img src={guide} />
            </div>
            <div onMouseOver={() => setImg(p2)} className="thumbnail">
              <img src={p2} />
            </div>
            <div onMouseOver={() => setImg(p3)} className="thumbnail">
              <img src={p3} />
            </div>
            <div onMouseOver={() => setImg(p4)} className="thumbnail">
              <img src={p4} />
            </div>
            <div onMouseOver={() => setImg(p5)} className="thumbnail">
              <img src={p5} />
            </div>
          </div>
          <div className="product-imgs">
            <img src={img} />
          </div>
          <div className="product-desc">
            <h2>
              Lifelong LLBC2001 20T Cycle (Yellow and Black) I Ideal for Kids
              (5-8 Years) I Frame Size 12 | Ideal Height 3 ft 10 inch+ I Unisex
              Cycle| 85% Assembled (Easy self-Assembly)
            </h2>
            <a href="#">Visit the Lifelong store</a>
            <div style={{ display: "flex" }}>
              <p className="hover">
                4.0{" "}
                {arr.map((elem) => (
                  <span>⭐️</span>
                ))}
                <div className="rating-desc">
                  <div style={{ padding: "10px" }}>
                    <div style={{ display: "flex" }}>
                      {arr.map((elem) => (
                        <span>★</span>
                      ))}
                      {Array.apply(0, Array(5 - arr.length)).map((elem) => (
                        <span>☆</span>
                      ))}
                      <span style={{ fontWeight: "700" }}>
                        {arr[arr.length - 1]} out of 5
                      </span>
                    </div>
                    <div className="percent-rating">
                      <span>5 star</span>{" "}
                      <div className="outer">
                        <div className="inner" style={{ width: "80px" }}></div>
                      </div>
                    </div>
                    <div className="percent-rating">
                      <span>4 star</span>{" "}
                      <div className="outer">
                        <div className="inner" style={{ width: "120px" }}></div>
                      </div>
                    </div>
                    <div className="percent-rating">
                      <span>3 star</span>{" "}
                      <div className="outer">
                        <div className="inner" style={{ width: "50px" }}></div>
                      </div>
                    </div>
                    <div className="percent-rating">
                      <span>2 star</span>{" "}
                      <div className="outer">
                        <div className="inner" style={{ width: "70px" }}></div>
                      </div>
                    </div>
                    <div className="percent-rating">
                      <span>1 star</span>{" "}
                      <div className="outer">
                        <div className="inner" style={{ width: "100px" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
              &nbsp;&nbsp;&nbsp;
              <p>2000 Ratings</p>
            </div>

            <span>400+ bought in past month | 10K+ viewed in past month</span>
            <hr></hr>
            <p className="deal">Deal</p>
            <p className="discount">
              -43% <span className="sp">Rs 3,999</span>{" "}
            </p>
            <p className="mrp">
              M.R.P <strike>Rs 6,999</strike>
            </p>
            <p>
              Inclusive of all taxes EMI starts at ₹194. No Cost EMI available
              EMI options{" "}
            </p>
            <hr></hr>
            <p>Offers</p>
            <div className="offer-carousel">
              <div className="offer">
                No Cost EMI Upto ₹180.07 EMI interest savings on Amazon Pay
                ICICI Bank Credit CardsUpto ₹180.07 EMI interest savings on
                Amazon Pay ICICI… 1 offer
              </div>
              <div className="offer">
                No Cost EMI Upto ₹180.07 EMI interest savings on Amazon Pay
                ICICI Bank Credit CardsUpto ₹180.07 EMI interest savings on
                Amazon Pay ICICI… 1 offer
              </div>
              <div className="offer">
                No Cost EMI Upto ₹180.07 EMI interest savings on Amazon Pay
                ICICI Bank Credit CardsUpto ₹180.07 EMI interest savings on
                Amazon Pay ICICI… 1 offer
              </div>
              <div className="offer">
                No Cost EMI Upto ₹180.07 EMI interest savings on Amazon Pay
                ICICI Bank Credit CardsUpto ₹180.07 EMI interest savings on
                Amazon Pay ICICI… 1 offer
              </div>
              <div className="offer">
                No Cost EMI Upto ₹180.07 EMI interest savings on Amazon Pay
                ICICI Bank Credit CardsUpto ₹180.07 EMI interest savings on
                Amazon Pay ICICI… 1 offer
              </div>
            </div>
            <hr></hr>
            <div className="extra-benefits">
              <div className="benefits">
                <p>Free delivery</p>
              </div>
              <div className="benefits">
                {" "}
                <p>Pay on delivery</p>
              </div>
              <div className="benefits">
                {" "}
                <p>10 days replacement</p>
              </div>
            </div>
            <hr></hr>
            <p>Style Name: LLBC2001</p>
            <div style={{ display: "flex" }}>
              <div className="styles" onMouseOver={() => setImg(product)}>
                Style 1
              </div>
              <div className="styles" onMouseOver={() => setImg(style2)}>
                Style 2
              </div>
              <div className="styles" onMouseOver={() => setImg(style3)}>
                Style 3
              </div>
            </div>
            <div className="buying-info">
              Pay INR 199+GST directly to brand technician for installation,
              book now pay during service Details Price:₹0.002.0 stars (36)
              <span onClick={display}>See more</span>
              <div
                className="further"
                style={{ display: seemore ? "block" : "none" }}
              >
                <ul>
                  <li>
                    Standard Installation Charges Rs.199/- (plus taxes) to be
                    paid to the technician after installation is completed
                    Installation request will be raised with the Brand by Amazon
                    once the order is delivered.
                  </li>
                  <li>
                    You will receive a call from the brand within 24 hours of
                    delivery along with a service request number.
                  </li>
                  <li>
                    Installation will be provided by the Brand within 72 hours
                    of delivery or a mutually agreed date. For assistance,
                    please contact brand tollfree @ 9711558877
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="buy">price</div>
        </div>
      </div>
    </div>
  );
}
