import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbarcontainer">
      <div className="logocontainer">
        <h1 className="dealsheading">Near</h1>

        <h1 className="logoblueheading">
          Buy
          <FaOpencart />
        </h1>
      </div>
      <div className="navlinkcontainer">
        <NavLink
          className={({ isActive }) => (isActive ? "links activetab" : "links")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "links activetab" : "links")}
          to="/product"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "links activetab" : "links")}
          to="/cart"
        >
          Cart
        </NavLink>
        <button className="bluebtn links">Logout</button>
      </div>
    </div>
  );
}
