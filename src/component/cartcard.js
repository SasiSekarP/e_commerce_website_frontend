import { AiFillCloseCircle } from "react-icons/ai";

import { useState } from "react";
import Cookies from "js-cookie";

const Cartcard = (props) => {
  const { title, brand, price, image_url, count, _id } = props.data;

  const [counttemp, setcounttemp] = useState(count);

  const token = Cookies.get("token");

  const addcount = () => {
    setcounttemp(counttemp + 1);
  };

  const reducecount = () => {
    if (counttemp > 1) {
      setcounttemp(counttemp - 1);
    }
  };

  const removefromcart = async () => {
    const url = `http://localhost:4000/removefromcart/${_id}`;
    const option = {
      headers: {
        authorization: token,
        "content-type": "application/json",
      },
      method: "DELETE",
    };
    const response = await fetch(url, option);
    const data = await response.json();
    console.log(data);
    if (data.status === "success") {
      window.location.reload();
    }
  };

  return (
    <div className="cardcard">
      <div>
        <img className="cartcardimg" alt="cartimg" src={image_url} />
      </div>
      <div className="productdetailsofcartcard productdetailsofcartcardheading">
        <div className="cartcardtitle">{title}</div>
        <div className="brand brand2">by{brand}</div>
      </div>
      <div className=" productdetailsofcartcard font1point2">
        <button type="button" className="countchangingbtn" onClick={addcount}>
          +
        </button>
        <h3>{counttemp}</h3>
        <button
          onClick={reducecount}
          type="button"
          className="countchangingbtn"
        >
          -
        </button>
      </div>
      <div className="font1point2 cartprice">Rs.{counttemp * price}/-</div>
      <button onClick={removefromcart} type="button" className="closebtn">
        <AiFillCloseCircle />
      </button>
    </div>
  );
};

export default Cartcard;
