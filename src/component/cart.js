import Navbar from "./navbar";
import Cartcard from "./cartcard";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartitem, setcartitem] = useState([]);

  const token = Cookies.get("token");

  const apicall = async () => {
    const url = "http://localhost:4000/cartdata";
    const option = {
      headers: {
        authorization: token,
        "content-type": "application/json",
      },
      method: "GET",
    };

    const response = await fetch(url, option);
    const data = await response.json();
    setcartitem(data);
  };

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div className="cartparentcontainer">
      <Navbar />
      {cartitem.length > 0 && (
        <div className="cartarea">
          {cartitem.map((data) => {
            return (
              <div key={data._id}>
                <Cartcard data={data} />
              </div>
            );
          })}
        </div>
      )}
      {cartitem.length === 0 && (
        <div className="cartarea2">
          <img
            className="cartnodataimage"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            alt="nodata"
          />
          <Link to="/product" className="bluebtn2">
            Shop now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
