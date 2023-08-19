import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import Navbar from "./navbar";
import Cookies from "js-cookie";

const Singleproductcomponent = () => {
  const { _id } = useParams();

  const [productdata, setproductdata] = useState({
    brand: "",
    category: "",
    image_url: "",
    price: 0,
    rating: "",
    title: "",
    _id: 0,
  });

  const [count, setcount] = useState(1);

  const token = Cookies.get("token");

  const apicall = async () => {
    const url = `http://localhost:4000/singleproductdetails/${_id}`;
    const response = await fetch(url);
    const data = await response.json();
    setproductdata(data);
  };

  const addcount = () => {
    setcount(count + 1);
  };

  const reducecount = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  const [addcartstatus, setaddcartstatus] = useState(false);

  const addtocart = async () => {
    const url = `http://localhost:4000/addtocart`;
    const option = {
      headers: {
        authorization: token,

        "content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ ...productdata, count }),
    };
    const response = await fetch(url, option);
    const data = await response.json();
    if (data.status === "success") {
      setaddcartstatus(true);
    }
  };

  return (
    <div className="singleproductcontainer">
      <Navbar />
      <div className="singleproductdetailarea">
        <div className="homepageimg">
          <img className="" src={productdata.image_url} alt="cartimg" />
        </div>
        <div className="homeparacontainer">
          <h2 className="cardtitle">{productdata.title}</h2>
          <div className="cardlastrow">
            <div>
              Brand :<span className="brand"> {productdata.brand}</span>
            </div>
            <div>
              Available :<span className="brand"> In stock</span>
            </div>
          </div>
          <div className="pricetag">Rs {productdata.price} /-</div>
          <div className="reviewcount">
            <span className="bluebtn ratingbox">
              {productdata.rating} <AiFillStar />
            </span>
            1678 Reviews
          </div>
          <p className="homepagepara">
            A classic timepiece designed with integrated mechanical hands and an
            always-on read-out display shows curated information at a glance.
            This watch works with both iPhone and Android Phones. It tracks
            heart rate, activity, and sleep time with in-depth wellness stats.
            Enjoy battery life that lasts more than two weeks upon complete
            charge.
          </p>
          {addcartstatus || (
            <div className="cardlastrow">
              <button type="button" className="bluebtn2" onClick={addtocart}>
                Add to cart
              </button>
              <div className="countdiv">
                <button
                  type="button"
                  className="countchangingbtn"
                  onClick={addcount}
                >
                  +
                </button>
                <h3>{count}</h3>
                <button
                  onClick={reducecount}
                  type="button"
                  className="countchangingbtn"
                >
                  -
                </button>
              </div>
            </div>
          )}
          {addcartstatus && (
            <div className="cardlastrow">
              <div className="brand">Product is added to cart</div>
              <Link className="bluebtn2" to="/product">
                New items
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Singleproductcomponent;
