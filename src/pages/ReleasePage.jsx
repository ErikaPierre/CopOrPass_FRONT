import CardRelease from "../components/CardRelease";
import FormRelease from "../components/FormRelease";
import { useEffect, useState } from "react";

function ReleasePage() {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.payload.role === "admin" : userData;
  const user = userData ? userData.payload.role === "user" : adminData;

  const [releases, setReleases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = releases.slice(indexOfFirstItem, indexOfLastItem);

  const getAllReleases = () => {
    fetch("http://localhost:1234/releases/all").then(async (res) => {
      const data = await res.json();
      console.log(data.releases);
      setReleases(data.releases);
    });
  };

  const handleLike = (id) => {
    console.log("ID de la carte likée :", id);
  };

  const handleDislike = (id) => {
    console.log("ID de la carte dislikée :", id);
  };

  useEffect(() => {
    getAllReleases();
  }, []);

  return (
    <>
      {user || admin ? (
        <div className="releases  mb-4">
          <div className="is-flex is-justify-content-center p-4 mt-4 mb-4">
            <h1 className="title is-3 is-size-5-mobile">
              &#129327; &#128680; Toutes les paires à venir &#128680; &#129327;
            </h1>
          </div>
          <div className="wrapper columns is-flex-wrap-wrap is-justify-content-center">
            {currentItems.map((release) => (
              <CardRelease
                key={release._id}
                id={release._id}
                image={release.image}
                dateRelease={release.dateRelease}
                brand={release.brand}
                modeleName={release.modeleName}
                color={release.color}
                votes={release.votes}
                handleLike={handleLike}
                handleDislike={handleDislike}
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
              disabled={indexOfLastItem >= releases.length}
            >
              Suivant
            </button>
          </nav>
          <hr />
          {admin ? (
            <div className="form p-4 m-4" id="border-form">
              <FormRelease />
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default ReleasePage;
