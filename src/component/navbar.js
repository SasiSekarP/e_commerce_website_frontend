import Cookies from "js-cookie";
import { useEffect } from "react";
import { FaOpencart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = Cookies.get("token");

  const removetoken = () => {
    Cookies.remove("token");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);
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
        <button className="bluebtn links" type="button" onClick={removetoken}>
          Logout
        </button>
      </div>
    </div>
  );
}
