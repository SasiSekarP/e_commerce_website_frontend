import { Link } from "react-router-dom";

import Navbar from "./navbar";
import Cartcard from "./cartcard";

const Cart = () => {
  const data = {
    title: "Wide Bowknot Hat",
    brand: "MAJIK",
    price: 288,
    id: 1,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
    count: 1,
  };
  //   return (
  //     <div className="cartparentcontainer">
  //       <Navbar />
  //       <div className="cartContainer">
  //         <img
  //           className="cartimg"
  //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
  //           alt="img"
  //         />
  //         <Link to="/product" className="bluebtn2">
  //           shop now
  //         </Link>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="cartparentcontainer">
      <Navbar />
      <div className="cartarea">
        <Cartcard data={data} />
        <Cartcard data={data} />
      </div>
    </div>
  );
};

export default Cart;
