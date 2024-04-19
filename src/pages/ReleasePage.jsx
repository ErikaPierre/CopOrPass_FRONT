// import CardRelease from "../components/CardRelease";
// import FormRelease from "../components/FormRelease";
// import { useEffect, useState } from "react";

// function ReleasePage() {
//   const userData = JSON.parse(sessionStorage.getItem("user"));
//   const adminData = JSON.parse(sessionStorage.getItem("admin"));
//   const admin = adminData ? adminData.user.role === "admin" : userData;
//   const user = userData ? userData.user.role === "user" : adminData;

//   const [releases, setReleases] = useState([]);
//   const [likeVotes, setLikeVotes] = useState(0);
//   const [dislikeVotes, setDislikeVotes] = useState(0);
//   const [hasVoted, setHasVoted] = useState(false);

//   const getAllReleases = () => {
//     fetch("http://localhost:1234/releases/all").then(async (res) => {
//       const data = await res.json();
//       console.log(data.releases);
//       setReleases(data.releases);
//     });
//   };

//   // const like = (id) => {
//   //   console.log("Card likée avec l'ID :", id);
//   //   if (!hasVoted) {
//   //     fetch(`http://localhost:1234/releases/votes/${id}`, {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //     })
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         setLikeVotes(likeVotes + 1);
//   //         console.log("voted");
//   //         setHasVoted(true);
//   //         // like(id);
//   //       })
//   //       .catch((error) =>
//   //         console.error("Erreur lors de l'envoi des votes :", error)
//   //       );
//   //   }
//   // };

//   const handleLike = (id) => {
//     // Mettre à jour le nombre total de votes dans l'état local
//     const updatedReleases = releases.map((release) => {
//       if (release._id === id) {
//         return { ...release, votes: release.votes + 1 };
//       }
//       return release;
//     });
//     setReleases(updatedReleases);
//   };
//   // const dislike = (votes) => {
//   //   if (!hasVoted) {
//   //     fetch(`http://localhost:1234/releases/votes/${id}`, {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //     })
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         setDislikeVotes(dislikeVotes + 1);
//   //         // setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
//   //         console.log("voted");
//   //         setHasVoted(true);
//   //       })
//   //       .catch((error) =>
//   //         console.error("Erreur lors de l'envoi des votes :", error)
//   //       );
//   //   }
//   // };

//   useEffect(() => {
//     getAllReleases();
//   }, []);

//   return (
//     <>
//       {user || admin ? (
//         <div className="releases  mb-4">
//           <div className="is-flex is-justify-content-center p-4 mt-4 mb-4">
//             <h1 className="title is-3 is-size-5-mobile">
//               &#129327; &#128680; Toutes les paires à venir &#128680; &#129327;
//             </h1>
//           </div>
//           <div className="wrapper columns is-flex-wrap-wrap	is-justify-content-center	">
//             {releases.map((release) => {
//               return (
//                 <CardRelease
//                   key={release._id}
//                   id={release._id}
//                   image={release.image}
//                   dateRelease={release.dateRelease}
//                   brand={release.brand}
//                   modeleName={release.modeleName}
//                   color={release.color}
//                   votes={release.votes}
//                   handleLike={handleLike}
//                 />
//               );
//             })}
//           </div>
//           <hr />
//           {admin ? (
//             <div className="form p-4 m-4" id="border-form">
//               <FormRelease />
//             </div>
//           ) : null}
//         </div>
//       ) : null}
//     </>
//   );
// }

// export default ReleasePage;

import CardRelease from "../components/CardRelease";
import FormRelease from "../components/FormRelease";
import { useEffect, useState } from "react";

function ReleasePage() {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.user.role === "admin" : userData;
  const user = userData ? userData.user.role === "user" : adminData;

  const [releases, setReleases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getAllReleases = () => {
    fetch("http://localhost:1234/releases/all").then(async (res) => {
      const data = await res.json();
      console.log(data.releases);
      setReleases(data.releases);
    });
  };

  const handleLike = (id) => {
    const updatedReleases = releases.map((release) => {
      if (release._id === id) {
        return { ...release, votes: release.votes + 1 };
      }
      return release;
    });
    setReleases(updatedReleases);
  };

  useEffect(() => {
    getAllReleases();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = releases.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
