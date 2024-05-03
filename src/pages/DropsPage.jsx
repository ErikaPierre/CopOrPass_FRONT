import { useEffect, useState } from "react";
import CardDrop from "../components/CardDrop";
import FormDrop from "../components/FormDrop";

function DropsPage() {
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.payload.role === "admin" : userData;

  const itemsPerPage = 8;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productFilter.slice(indexOfFirstItem, indexOfLastItem);

  const getAllProductDrop = () => {
    fetch("http://localhost:1234/drops/all").then(async (res) => {
      const data = await res.json();
      console.log(data.drops);
      setProducts(data.drops);
      setProductFilter(data.drops);
    });
  };

  const filterProducts = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.color.toLowerCase().includes(searchInput.toLowerCase())
    );
    setProductFilter(filteredProducts);
  };

  useEffect(() => {
    getAllProductDrop();
  }, []);

  return (
    <div className="is-flex-direction-column">
      <div className="is-flex is-justify-content-space-between">
        <div className="top-bar">
          <h2 className="title is-3 is-size-5-mobile	">Derniers hot drops</h2>
        </div>
        <div className="div_filter_brand is-flex">
          <input
            className="input is-focused"
            type="text"
            placeholder="search ..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="button-filter" onClick={filterProducts}>
            Chercher
          </button>
        </div>
      </div>
      <div className="all-drops m-4">
        <div className="wrapper columns is-flex-wrap-wrap is-justify-content-center m-3">
          {currentItems.map((product) => (
            <CardDrop
              key={product._id}
              id={product._id}
              image={product.image}
              date={product.date}
              brand={product.brand}
              modeleName={product.modeleName}
              color={product.color}
              price={product.price}
              isLike={product.isLike}
              votes={product.votes}
            />
          ))}
        </div>
        {/* Pagination */}
        <nav className="pagination" role="navigation" aria-label="pagination">
          <button
            className="pagination-previous"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <button
            className="pagination-next"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= productFilter.length}
          >
            Suivant
          </button>
        </nav>
        <hr />
        {admin ? (
          <div className="form p-4" id="border-form">
            <FormDrop />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DropsPage;
