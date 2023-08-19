import { AiFillCloseCircle } from "react-icons/ai";

import { useState } from "react";

const Cartcard = (props) => {
  const { title, brand, price, image_url, count } = props.data;

  const [counttemp, setcounttemp] = useState(count);

  const addcount = () => {
    setcounttemp(counttemp + 1);
  };

  const reducecount = () => {
    if (counttemp > 1) {
      setcounttemp(counttemp - 1);
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
      <button type="button" className="closebtn">
        <AiFillCloseCircle />
      </button>
    </div>
  );
};

export default Cartcard;
