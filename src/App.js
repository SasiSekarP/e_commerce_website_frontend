import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/navbar.css";
import "./style/product.css";
import "./style/pagenotfound.css";
import "./style/home.css";
import "./style/cart.css";
import "./style/cartcard.css";
import "./style/singleproductconainer.css";
import "./style/login.css";

import Home from "./component/home";
import Product from "./component/product";
import PageNotFound from "./component/pagenotfount";
import Cart from "./component/cart";
import Singleproductcomponent from "./component/singleproductcomponent";
import Signup from "./component/signup";
import Login from "./component/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/product" Component={Product} />
        <Route path="/cart" Component={Cart} />
        <Route
          path="/singleproductcomponent/:_id"
          Component={Singleproductcomponent}
        />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
