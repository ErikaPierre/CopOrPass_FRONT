import { enqueueSnackbar, useSnackbar } from "notistack";

function CardArticleAccueil({
  id,
  image,
  category,
  name,
  content,
  date,
  onRemove,
  isLikedPage,
}) {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const user = userData ? userData.payload.role === "user" : adminData;
  const userId = userData ? userData.payload.id : null;
  const { enqueueSnackbar } = useSnackbar();

  const handleLikeClick = async (e) => {
    e.preventDefault();

    try {
      fetch(`http://localhost:1234/products/${id}/insert-to-like/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (res.ok) {
            window.location.reload();
            enqueueSnackbar("Ce produit à bien été ajouté dans vos likes", {
              variant: "success",
            });
          }
        });
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du like :",
        error,
        enqueueSnackbar(
          "Une erreur est survenue lors de la mise à jour du like.",
          {
            variant: "error",
          }
        )
      );
    }
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();

    try {
      fetch(`http://localhost:1234/products/${id}/delete-to-like/${userId}`, {
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

  return (
    <>
      <div className="card-header" id="card-border">
        <div className="card-content">
          <div className="columns">
            <div className="column is-3">
              <figure className="image is-4by3">
                <img className="" src={image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="column">
              <div className="media-left is-flex is-justify-content-space-between	 mt-3 mb-3">
                <div>
                  <span className="tag is-warning">{category}</span>
                </div>
                {user ? (
                  <>
                    <div className="like">
                      {!isLikedPage && (
                        <button
                          onClick={handleLikeClick}
                          id="border-btn-release"
                        >
                          ❤️
                        </button>
                      )}
                      {onRemove && (
                        <button
                          id="border-btn-release"
                          onClick={handleDeleteClick}
                        >
                          ❌
                        </button>
                      )}
                    </div>
                  </>
                ) : null}
              </div>
              <h1 className="title is-3 mt-5 is-size-6-mobile is-size-4-touch">
                {name}
              </h1>
              <p className="has-text-justified is-size-6-touch">{content}</p>
              <hr />
              <p className="is-size-7-touch">
                <b>{date}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardArticleAccueil;
