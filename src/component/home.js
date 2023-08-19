import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepagerow">
        <div className="homeparacontainer">
          <h1>Clothes That Get YOU Noticed</h1>
          <p className="homepagepara">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <Link to="/product" className="bluebtn2">
            Shop Now
          </Link>
        </div>
        <div className="homepageimg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
