import { useEffect, useState } from "react";
import Navbar from "./navbar";
import ProductCard from "./productcard";

export default function Product() {
  const [products, setproducts] = useState([]);

  const [offer, setoffer] = useState([]);

  const apicall = async () => {
    const url = "http://localhost:4000/product";
    const response = await fetch(url);
    const data = await response.json();
    setproducts(data.alldata);
    setoffer(data.offer);
  };

  useEffect(() => {
    apicall();
  }, []);
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="productscrolearea">
        <h1 className="dealsheading automarigin marginofnavbar">
          Exclusive Prime Deals
        </h1>
        <div className="homecardcontainer">
          {offer.length === 0 && <h1 className="loadingmessage">Loading...</h1>}
          {offer.length > 0 &&
            offer.map((data) => {
              return (
                <div key={data._id} className="cardparentcontainer">
                  <ProductCard data={data} />
                </div>
              );
            })}
        </div>
        <h1 className="dealsheading automarigin">All Products</h1>
        <div className="homecardcontainer">
          {products.length > 0 &&
            products.map((data) => {
              return (
                <div key={data._id} className="cardparentcontainer">
                  <ProductCard data={data} />
                </div>
              );
            })}
          {products.length === 0 && (
            <h1 className="loadingmessage">Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}
