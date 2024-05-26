import { useState } from "react";
import { ImCross } from "react-icons/im";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ImPencil2 } from "react-icons/im";

function CardRelease({
  id,
  image,
  dateRelease,
  brand,
  modeleName,
  color,
  votes,
  handleLike,
  handleDislike,
  onRemove,
  isLikedPage,
}) {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.payload.role === "admin" : userData;
  const user = userData ? userData.payload.role === "user" : adminData;
  const userId = userData ? userData.payload.id : null;

  const [releases, setReleases] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);
  // const [totalVotes, setTotalVotes] = useState(0);

  // const [image, setImage] = useState([]);
  const [formData, setFormData] = useState({
    // image: image,
    dateRelease: dateRelease,
    brand: brand,
    modeleName: modeleName,
    color: color,
  });

  function updateRelease(id) {
    fetch(`http://localhost:1234/releases/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.releases);
        setReleases(data.releases);
        setShowModal(false);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  }

  function deleteRelease(id) {
    fetch(`http://localhost:1234/releases/remove/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.releases);
        setReleases(data.releases);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files);
  };

  const handleLikeClick = async (e) => {
    e.preventDefault();

    try {
      fetch(`http://localhost:1234/releases/${id}/insert-to-like/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // window.location.reload();
        });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du like :", error);
    }
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();

    try {
      fetch(`http://localhost:1234/releases/${id}/delete-to-like/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du like :", error);
    }
  };

  const like = async () => {
    try {
      const response = await fetch(
        `http://localhost:1234/releases/votes/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setLiked(true);
        handleLike(id);
      } else {
        console.error("Erreur lors de l'enregistrement du like");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du like :", error);
    }
  };

  const dislike = async () => {
    try {
      const response = await fetch(
        `http://localhost:1234/releases/devotes/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setLiked(true);
        handleDislike(id);
      } else {
        console.error("Erreur lors de l'enregistrement du like");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du like :", error);
    }
  };

  return (
    <div className="card card-release p-3 m-2" id="card-border-release">
      <div className="btn is-flex is-justify-content-space-between	mb-1">
        {user && (
          <div>
            {!isLikedPage && (
              <button onClick={handleLikeClick} id="border-btn-release">
                <BsFillBookmarkHeartFill />
              </button>
            )}
          </div>
        )}

        {admin && (
          <>
            <div>
              <button
                onClick={() => setShowModal(true)}
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
            {showModal && (
              <div className="modal is-active">
                <div
                  className="modal-background"
                  onClick={() => setShowModal(false)}
                ></div>
                <div className="modal-content">
                  <div className="box">
                    <h2 className="title is-4">Modifier le produit</h2>

                    <div className="field">
                      <label className="label">Date</label>
                      <div className="control">
                        <input
                          className="input"
                          type="date"
                          name="dateRelease"
                          value={formData.dateRelease}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Image</label>
                      <div className="control">
                        <input
                          className="input"
                          type="file"
                          name="price"
                          value={formData.image}
                          onChange={handleImage}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Marque</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Modèle</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="modeleName"
                          value={formData.modeleName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Colori</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="color"
                          value={formData.color}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button
                      className="button is-primary"
                      onClick={() => {
                        updateRelease(id);
                      }}
                    >
                      Confirmer
                    </button>
                  </div>
                </div>
                <button
                  className="modal-close is-large"
                  aria-label="close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
            )}
          </>
        )}
        <div>
          {onRemove && (
            <button id="border-btn-release" onClick={handleDeleteClick}>
              ❌
            </button>
          )}
        </div>
      </div>

      <span className="is-size-3 is-size-4-touch has-text-weight-bold">
        {dateRelease}
      </span>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={`http://localhost:1234/${image}`} alt="" />
        </figure>
      </div>
      <div className="title-card is-size-4 has-text-centered p-3">
        <strong>{brand}</strong>
      </div>

      <div className="media-content p-3">
        <p className="title is-5 is-size-6-touch">{modeleName}</p>
        <p className="title is-5 is-size-6-touch"> Colori : {color}</p>
      </div>

      <div className="bouton-like-dislike is-flex is-justify-content-space-around	">
        <div className="Like is-flex">
          <button
            className="button-like mr-2"
            id="border-btn-release"
            onClick={like}
          >
            &#x1F525;
          </button>
        </div>
        <p className="is-size-5-mobile">{votes}</p>
        <div className="Dislike is-flex">
          <button
            className="button-dislike mr-2"
            id="border-btn-release"
            onClick={dislike}
          >
            &#x1F5D1;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRelease;
