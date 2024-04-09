import { useState } from "react";
import { ImCross } from "react-icons/im";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ImPencil2 } from "react-icons/im";

function CardRelease({ id, image, dateRelease, brand, modeleName, color }) {
  const [counter, setCounter] = useState(0);
  const [discounter, setDiscounter] = useState(0);
  const [releases, setReleases] = useState([]);

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.user.role === "admin" : userData;
  const user = userData ? userData.user.role === "user" : adminData;

  function likeCounter() {
    setCounter(counter + 1);
  }
  function dislikeCounter() {
    setDiscounter(discounter + 1);
  }

  function deleteRelease(id) {
    fetch(`http://localhost:1234/releases/remove/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data.releases);
      setReleases(data.releases);
      window.location.reload();
    });
  }

  function updateRelease() {
    fetch(`http://localhost:1234/releases/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data.releases);
      setReleases(data.releases);
      window.location.reload();
    });
  }

  // function likeRelease() {
  //   fetch(`http://localhost:1234/releases/${id}/insert-to-like/:id_like`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   }).then(async (res) => {
  //     const data = await res.json();
  //     console.log(data.releases);
  //     setReleases(data.releases);
  //     window.location.reload();
  //   });
  // }

  return (
    <div className="card card-release p-3 m-2" id="card-border-release">
      <div className="btn is-flex is-justify-content-space-between	mb-1">
        {user && (
          <div>
            <button
              onClick={() => {
                likeRelease(id);
              }}
              id="border-btn-release"
            >
              <BsFillBookmarkHeartFill />
            </button>
          </div>
        )}

        {admin && (
          <>
            <div>
              <button
                onClick={() => {
                  updateRelease(id);
                }}
                id="border-btn-release"
              >
                <ImPencil2 />
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  deleteRelease(id);
                }}
                id="border-btn-release"
              >
                <ImCross />
              </button>
            </div>
          </>
        )}
      </div>
      <span className="is-size-3 has-text-weight-bold">{dateRelease}</span>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="" />
        </figure>
      </div>
      {/* <div className="title-card is-size-4 has-text-centered p-3">
        <strong>{brand}</strong>
      </div> */}
      <div className="card-content">
        <div className="media-content">
          <p className="title is-5">{modeleName}</p>
          <p className="title is-5"> Colori : {color}</p>
        </div>
      </div>
      <div className="bouton-like-dislike is-flex is-justify-content-space-around	">
        <div className="Like is-flex">
          <button
            className="button-like mr-2"
            id="border-btn-release"
            onClick={likeCounter}
          >
            &#x1F525;
          </button>
          <p>{counter}</p>
        </div>
        <div className="Dislike is-flex">
          <button
            className="button-dislike mr-2"
            id="border-btn-release"
            onClick={dislikeCounter}
          >
            &#x1F5D1;
          </button>
          <p>{discounter}</p>
        </div>
      </div>
    </div>
  );
}

export default CardRelease;
