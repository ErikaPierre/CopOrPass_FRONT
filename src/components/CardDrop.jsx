import { useState } from "react";
import { ImCross } from "react-icons/im";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ImPencil2 } from "react-icons/im";

function CardDrop({
  id,
  image,
  brand,
  modeleName,
  color,
  price,
  votes,
  onRemove,
  isLikedPage,
}) {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.payload.role === "admin" : userData;
  const user = userData ? userData.payload.role === "user" : adminData;

  const [drops, setDrops] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const userId = userData ? userData.payload._id : null;

  // const [image, setImage] = useState([]);
  const [formData, setFormData] = useState({
    // image: image,
    brand: brand,
    modeleName: modeleName,
    color: color,
    price: price,
  });

  function editDrop(id) {
    fetch(`http://localhost:1234/drops/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.drops);
        setDrops(data.drops);
        setShowModal(false);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  }

  function deleteDrop(id) {
    fetch(`http://localhost:1234/drops/remove/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.drops);
        setDrops(data.drops);
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
      console.log(id);
      fetch(`http://localhost:1234/drops/${id}/insert-to-like/${userId}`, {
        method: "POST",
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

  const handleDeleteClick = async (e) => {
    e.preventDefault();

    try {
      console.log(id);
      fetch(`http://localhost:1234/drops/${id}/delete-to-like/${userId}`, {
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

  const handleVote = (votes) => {
    if (!hasVoted) {
      fetch(`http://localhost:1234/drops/votes/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
          console.log("voted");
          setHasVoted(true);
        })
        .catch((error) =>
          console.error("Erreur lors de l'envoi des votes :", error)
        );
    }
  };

  return (
    <>
      <div className="card card-release p-3 m-2" id="card-border-release">
        <div className="btn is-flex is-justify-content-space-between mb-1">
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
                <button onClick={() => deleteDrop(id)} id="border-btn-release">
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
                      <div className="field">
                        <label className="label">Prix</label>
                        <div className="control">
                          <input
                            className="input"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <button
                        className="button is-primary"
                        onClick={() => {
                          editDrop(id);
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
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={`http://localhost:1234/${image}`} alt="" />
          </figure>
        </div>
        <div className="title-card is-size-5 p-3">
          <span className="tag is-warning is-medium">{brand}</span>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p
              className="subtitle is-5 is-size-6-mobile has-text-weight-bold has-text-centered p-2"
              id="border-drop-card-name"
            >
              {modeleName}
            </p>
            <p className="subtitle is-5 is-size-6-mobile">
              <b>Colori -</b> {color}
            </p>
            <span className="price is-size-2 is-size-3-touch has-text-info has-text-weight-bold">
              {price}€
            </span>
          </div>
        </div>

        {user ? (
          <div className="bouton-like-dislike is-flex is-justify-content-space-around">
            <div className="Like is-flex">
              <button
                className="button-like mr-2"
                id="border-btn-release"
                onClick={() => {
                  handleVote(1);
                }}
              >
                &#x1F525;
              </button>
              <p>{votes}</p>
            </div>
            <div className="Dislike is-flex">
              <button
                className="button-dislike mr-2"
                id="border-btn-release"
                onClick={() => {
                  handleVote(1);
                }}
              >
                &#x1F5D1;
              </button>
              <p>{votes}</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default CardDrop;
