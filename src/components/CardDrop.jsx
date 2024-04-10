import { useState } from "react";
import { ImCross } from "react-icons/im";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ImPencil2 } from "react-icons/im";

function CardDrop({ id, image, brand, modeleName, color, price }) {
  const [counter, setCounter] = useState(0);
  const [discounter, setDiscounter] = useState(0);
  const [drops, setDrops] = useState([]);

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

  function editDrop(id) {
    fetch(`http://localhost:1234/drops/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setDrops(data.drops);
      window.location.reload();
    });
  }

  function deleteDrop(id) {
    fetch(`http://localhost:1234/drops/remove/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setDrops(data.drops);
      window.location.reload();
    });
  }

  // function likeDrop() {
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
                likeDrop();
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
                  editDrop(id);
                }}
                id="border-btn-release"
              >
                <ImPencil2 />
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  deleteDrop(id);
                }}
                id="border-btn-release"
              >
                <ImCross />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={`http://localhost:1234/${image}`} alt="" />
        </figure>
      </div>
      <div className="title-card is-size-5 p-3">
        <span class="tag is-warning is-medium">{brand}</span>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p
            className="subtitle is-5 has-text-weight-bold has-text-centered p-2"
            id="border-drop-card-name"
          >
            {modeleName}
          </p>
          <p className="subtitle is-5">
            <b>Colori -</b> {color}
          </p>
          <span className="price is-size-2 has-text-info has-text-weight-bold	">
            {price}€
          </span>
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

export default CardDrop;
