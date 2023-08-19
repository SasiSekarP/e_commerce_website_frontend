import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { _id, rating, title, image_url, brand, price } = props.data;
  return (
    <Link to={`/singleproductcomponent/${_id}`}>
      <img className="productimg" alt={title} src={image_url}></img>
      <h2 className="cardtitle">{title}</h2>
      <div className="brand">by {brand}</div>
      <div className="cardlastrow">
        <div className="pricetag">Rs {price} /-</div>
        <div className="bluebtn ratingbox">
          {rating} <AiFillStar />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
