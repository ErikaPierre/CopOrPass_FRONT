import { useEffect, useState } from "react";
import CardRelease from "../components/CardRelease";
import Sidebar from "../components/Sidebar";

function ReleasePage() {
  const [productsRelease, setProductsRelease] = useState([]);

  const getAllProducts = () => {
    fetch("http://localhost:1234/products/all").then(async (res) => {
      const data = await res.json();
      console.log(data.products);
      setProductsRelease(data.products);
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="releases  mb-4">
      <div className="is-flex is-justify-content-center p-4 mt-4 mb-4">
        <h1 className="title is-3">
          &#129327; Toutes les paires à venir &#129327;
        </h1>
      </div>
      <div className="wrapper columns is-flex-wrap-wrap	is-justify-content-center	">
        {productsRelease.map((product) => {
          return (
            <CardRelease
              key={product._id}
              image={product.image}
              dateRelease={product.dateRelease}
              brand={product.brand}
              modeleName={product.modeleName}
              color={product.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReleasePage;
