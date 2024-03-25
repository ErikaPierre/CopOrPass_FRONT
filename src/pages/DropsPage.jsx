import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CardDrop from "../components/CardDrop";

function DropsPage() {
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState(products);
  const [choiceBrand, setBrand] = useState("");

  const getAllProductDrop = () => {
    fetch("http://localhost:1234/all/drops").then(async (res) => {
      const data = await res.json();
      console.log(data.drops);
      setProducts(data.drops);
    });
  };

  useEffect(() => {
    getAllProductDrop();
  }, []);

  function filteredProduct(e) {
    e.preventDefault();
    setProductFilter(
      products.filter((product) =>
        product.brand
          .map((brand) => brand.toLowerCase())
          .includes(choiceBrand.toLowerCase())
      )
    );
    setBrand("");
  }

  return (
    <div className="drops is-flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="all-drops m-4">
        <div className="is-flex is-justify-content-space-between">
          <div className="top-bar">
            <h1 className="title is-4">Tous les derniers hot drops</h1>
          </div>
          <div className="div_filter_brand">
            <input
              type="text"
              placeholder="search ..."
              value={choiceBrand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <button className="button-filter" onClick={filteredProduct}>
              Chercher
            </button>
          </div>
        </div>
        <div className="wrapper columns is-flex-wrap-wrap	is-justify-content-center	m-3">
          {productFilter.map((product) => {
            return (
              <CardDrop
                key={product._id}
                image={product.image}
                date={product.date}
                brand={product.brand}
                modeleName={product.modeleName}
                color={product.color}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DropsPage;
