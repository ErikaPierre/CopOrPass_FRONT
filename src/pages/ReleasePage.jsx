import { useEffect, useState } from "react";

function ReleasePage() {
  const [productsFutur, setProductsFutur] = useState([]);

  const getAllProducts = () => {
    // Accéder à tous les produits
    fetch("http://localhost:5173/products/all").then(async (res) => {
      const data = await res.json();
      console.log(data);
      setProductsFutur(data);
      setProductsFutur(data.title);
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="releases is-flex p-3 mb-3">
      <div className="filtre mr-3">
        <p>Barre de filtre</p>
      </div>
      <div className="all-releases">
        <h1 className="title is-3">Toutes les paires à venir</h1>
      </div>
    </div>
  );
}

export default ReleasePage;
