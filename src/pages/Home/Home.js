import React, { useEffect, useState } from "react";
import logo from "../../../src/logo.svg";
import cart from "../../cart.jpg";
import car1 from "../../car1.jpg";
import car2 from "../../car2.jpg";
import car3 from "../../car3.jpg";
import a1 from "../../a1.jpg";
import a2 from "../../a2.jpg";
import a3 from "../../a3.jpg";
import a4 from "../../a4.jpg";
import d1 from "../../deals/d1.jpg";
import d2 from "../../deals/d2.jpg";
import d3 from "../../deals/d3.jpg";
import d4 from "../../deals/d4.jpg";
import d5 from "../../deals/d5.jpg";
import d6 from "../../deals/d6.jpg";
import d7 from "../../deals/d7.jpg";
import d8 from "../../deals/d8.jpg";
import d9 from "../../deals/d9.jpg";
import d10 from "../../deals/d10.jpg";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../redux/Home/action";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const arr = [car1, car2, car3];
  const [index, setIndex] = useState(0);
  const [media, setMedia] = useState();
  const handleLeft = () => {
    setIndex((prev) => prev - 1);
    setMedia(arr[index]);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(GetProducts());
  }, []);

  const products = useSelector((state) => state.data.products);

  console.log(products);
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

      <div className="carousel-container">
        <p className="nav left" onClick={handleLeft}>
          Left
        </p>
        <p className="nav right" onClick={handleRight}>
          Right
        </p>
        <img src={media}></img>
      </div>
      <div className="cards-container">
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
        <div className="card">
          <h3>Computer Accessories</h3>
          <div className="items">
            <div className="item">
              <img src={a1} />
              <p>Gaming Accessories</p>
            </div>
            <div className="item">
              <img src={a2} />
              <p>Keyboard and Mice</p>
            </div>
            <div className="item">
              <img src={a3} />
              <p>Stand Cables & More</p>
            </div>
            <div className="item">
              <img src={a4} />
              <p>Backpacks</p>
            </div>
          </div>
          <p className="offers">See All Offers</p>
        </div>
      </div>
      <div className="deals-container">
        <div className="deals">
          <span>Today's Deals</span>{" "}
          <span className="see-all">See all deals</span>
          <div className="deals-carousel">
            {products?.map((elem) => {
              return (
                <>
                  <div onClick={() => navigate(`/product/${elem._id}`)}>
                    <div className="deal-cards">
                      <img src={elem.images[0]} />
                    </div>
                    <p className="poff">Upto 46% off</p>
                    <span className="poff-span">Deal of the day</span>
                  </div>
                </>
              );
            })}

            {/* <div>
              <div className="deal-cards">
                <img src={d2} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div>
              <div className="deal-cards">
                <img src={d3} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div>
              <div className="deal-cards">
                <img src={d4} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div>
              <div className="deal-cards">
                <img src={d5} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div>
              <div className="deal-cards">
                <img src={d6} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div>
              <div className="deal-cards">
                <img src={d5} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div>
              <div className="deal-cards">
                <img src={d7} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div>
              <div className="deal-cards">
                <img src={d8} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div>
            <div> */}
            {/* <div className="deal-cards">
                <img src={d9} />
              </div>
              <p className="poff">Upto 46% off</p>
              <span className="poff-span">Deal of the day</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
