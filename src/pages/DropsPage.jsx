import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CardDrop from "../components/CardDrop";

function DropsPage() {
  const [productDrop, setProductDrop] = useState([]);

  const getAllProductDrop = () => {
    fetch("http://localhost:1234/products/all-drops").then(async (res) => {
      const data = await res.json();
      console.log(data.products);
      setProductDrop(data.products);
    });
  };

  useEffect(() => {
    getAllProductDrop();
  }, []);

  return (
    <div className="drops is-flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="all-drops m-4">
        <div>
          <h1 className="title is-4">Tous les derniers hotdrops</h1>
        </div>
        <div>
          {productDrop.map((product) => {
            return (
              <CardDrop
                key={product._id}
                image={product.image}
                dateRelease={product.dateRelease}
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
