import React, { useEffect, useState } from "react";
import logo from "../../../src/logo.svg";
import cart from "../../cart.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import product from "../../product/product.jpg";
import addon from "../../product/addon.jpg";
import style2 from "../../product/style2.jpg";
import style3 from "../../product/style3.jpg";
import p2 from "../../product/p2.jpg";
import p3 from "../../product/p3.jpg";
import p4 from "../../product/p4.jpg";
import p5 from "../../product/p5.jpg";
import guide from "../../product/guide.jpg";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/Products/action";
import { AddToCart } from "../../redux/Cart/action";
export default function Product() {
  const arr = [1, 2, 3, 4];
  const [seemore, setseemore] = useState(false);
  const [img, setImg] = useState();
  const [quantity, setQuantity] = useState(1);
  const [cartQuant, setCartQuant] = useState(0);
  const display = () => {
    setseemore(!seemore);
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const addToCart = () => {
    const payload = {
      product_id: productDetails.productExist._id,
      quantity: quantity,
    };
    dispatch(AddToCart(payload));
    if (
      cartMessage == "data added successfully" ||
      cartMessage == "cart and shopping session updated successfully"
    ) {
      setCartQuant(quantity);
    }
  };

  const cartMessage = useSelector((state) => state.cart.message);

  const productDetails = useSelector((state) => state.product.details);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);
  useEffect(() => {
    setImg(productDetails?.productExist?.images[0]);
  }, [productDetails]);
  console.log(productDetails);
  return (
    <div>
      <header style={{ position: "static" }}>
        <img src={logo} className="app-logo" />
        <div style={{ color: "#fff" }}>Hello, Select your address</div>

        <input type="text" className="search" />
        <select>
          <option>En</option>
        </select>

        <div className="cart">
          <img src={cart} className="cart-img" />
          <p className="overlay">{cartQuant}</p>
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
            {productDetails?.productExist?.images.map((elem) => {
              return (
                <>
                  <div onMouseOver={() => setImg(elem)} className="thumbnail">
                    <img src={elem} />
                  </div>
                </>
              );
            })}
          </div>
          <div className="product-imgs">
            <img src={img} />
          </div>
          <div className="product-desc">
            <h2>
              {productDetails?.productExist?.name}{" "}
              {productDetails?.productExist?.desc}
            </h2>
            <a href="#">Visit the {productDetails?.productExist?.name} store</a>
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
              -43%{" "}
              <span className="sp">
                Rs {productDetails?.productExist?.price}
              </span>{" "}
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
            <p style={{ fontWeight: "700" }}>Purchase options and add-ons</p>
            <hr></hr>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Accessories
                  <p style={{ fontSize: "12px", color: "grey" }}>
                    Accessories and add-ons
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="add-ons">
                    <div className="add-on">
                      <img src={addon} height="90" width="90" />
                      <p>Title of Product</p>
                    </div>
                    <div className="add-on">
                      <img src={addon} height="90" width="90" />
                      <p>Title of Product</p>
                    </div>
                    <div className="add-on">
                      <img src={addon} height="90" width="90" />
                      <p>Title of Product</p>
                    </div>
                    <div className="add-on">
                      <img src={addon} height="90" width="90" />
                      <p>Title of Product</p>
                    </div>
                    <div className="add-on">
                      <img src={addon} height="90" width="90" />
                      <p>Title of Product</p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <hr></hr>
            <div>
              <p style={{ fontWeight: "700" }}>
                Bike Type{" "}
                <span style={{ marginLeft: "50px", fontWeight: "normal" }}>
                  Kids Bike
                </span>
              </p>
              <p style={{ fontWeight: "700" }}>
                Bike Type{" "}
                <span style={{ marginLeft: "50px", fontWeight: "normal" }}>
                  Kids Bike
                </span>
              </p>
              <p style={{ fontWeight: "700" }}>
                Bike Type{" "}
                <span style={{ marginLeft: "50px", fontWeight: "normal" }}>
                  Kids Bike
                </span>
              </p>
            </div>
            <hr></hr>
            <div>
              <p style={{ fontWeight: "700" }}>About this item</p>
              <ul>
                <li>
                  Lifelong Cycle Tribe 20T is designed for children of the age
                  group of 5-8 years with height of 3feet 10inches, who like to
                  ride in style
                </li>
                <li>
                  Design: Tribe cycle offers a fresh look with the stylish
                  design. The high handlebar complete styling. | Tyre size: 20
                  inches
                </li>
                <li>
                  Quality: The robust frame, highest quality components and
                  top-notch paint quality will ensure that the bike runs for
                  many years. More than 50 quality test ensure highest standards
                  of performance. The bike is shipped in 85% assembled state and
                  requires assembly on delivery.
                </li>
              </ul>
            </div>
          </div>
          <div className="buy">
            <div className="centered">
              <p style={{ fontSize: "24px" }}>₹3,999.00</p>
              <span style={{ width: "75%", display: "block" }}>
                FREE delivery Saturday, 23 September. Details Or fastest
                delivery Tomorrow, 22 September. Order within 3 hrs 27 mins.
                <br></br> Details Select delivery location
                <br></br>
                <br></br> In stock Sold by RetailEZ Pvt Ltd and Fulfilled by
                Amazon. Shows what is inside. Item often ships in manufacturer
                container to reduce packaging. If this is a gift, consider
                shipping to a different address.
              </span>
              <p>Add a Protection Plan:</p>
              <input type="checkbox"></input>
              <label>
                Extended Warranty by ONSITEGO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for
                ₹205.00
              </label>
              <br></br>
              <input type="checkbox"></input>
              <label>
                Extended Warranty by ONSITEGO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for
                ₹205.00
              </label>
              <br></br>
              <br></br>
              <br></br>
              <span>Quantity:</span>{" "}
              <select onChange={(e) => handleChange(e)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="actions cart-btn" onClick={addToCart}>
                Add to Cart
              </button>
              <button className="actions buy-btn">Buy Now</button>
              <p style={{ color: "dodgerblue", fontSize: "12px" }}>
                {" "}
                Secure transaction
              </p>
              <input type="checkbox"></input>
              <label>Add gift options</label>
              <hr></hr>
              <button className="wishlist">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
