import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";

function ProductPage() {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const { productId } = useParams();

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const getOneProduct = () => {
    fetch(`http://localhost:1234/products/get-one/${productId}`).then(
      async (res) => {
        const data = await res.json();
        setArticle(data.product);
        setComments(data.product.comments);
      }
    );
  };

  function deleteComment(id) {
    fetch(`http://localhost:1234/comments/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const data = await res.json();
        setComments(data.comments);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  }

  const handleVote = (votes) => {
    if (!hasVoted) {
      fetch(`http://localhost:1234/products/votes/${productId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
          setHasVoted(true);
        })
        .catch((error) =>
          console.error("Erreur lors de l'envoi des votes :", error)
        );
    }
  };

  // const fetchVote = () => {
  //   fetch(`http://localhost:1234/products/votes/${productId}`)
  //     .then((res) => res.json())
  //     .then((data) => setTotalVotes(data.product.votes))
  //     .catch((error) =>
  //       console.error("Erreur lors de la récupération des votes :", error)
  //     );
  // };

  useEffect(() => {
    // fetchVote();
    getOneProduct();
  }, [productId]);

  return (
    <div className="product is-flex is-flex-direction-column" id="page_product">
      {article && article.title && (
        <div className="product_s">
          <div className="text-product is-size-3 has-text-weight-bold mt-3 mb-3">
            <span>{article.title}</span>
          </div>

          <div className="img-product">
            <img src={article.image} alt="" />
          </div>

          <div className="title-product mt-3 mb-6">
            <h2 className="title is-2 ">{article.name}</h2>
          </div>

          <div className="content-product mt-3 mb-3">
            <p>{article.content}</p>
          </div>

          <div className="img-product">
            <img src={`http://localhost:5173/${article.image}`} alt="" />
          </div>

          <div className="content-product mt-3 mb-3">
            <p>{article.text}</p>
          </div>

          <hr />

          <div className="like-dislike is-flex-direction-column is-justify-content-space-around mt-6 mb-6">
            <p>👟 {article.votes} votes </p>
            <progress
              className="progress is-info"
              value={article.votes}
              min="0"
              max="100"
            ></progress>

            {userData || adminData ? (
              <div className="vote-like-dislike is-flex is-justify-content-space-around mt-6 mb-6">
                <div className="Cop is-flex is-align-items-center is-size-4 ">
                  <button
                    className="button is-info is-size-4 mr-3"
                    onClick={() => {
                      handleVote(1);
                    }}
                  >
                    <p className="is-size-4">COP 🔥</p>
                  </button>
                </div>
                <div className="Drop is-flex is-align-items-center is-size-4 ">
                  <button
                    className="button is-danger is-size-4 mr-3"
                    onClick={() => {
                      handleVote(-1);
                    }}
                  >
                    <p className="is-size-4">DROP 🗑️</p>
                  </button>
                </div>
              </div>
            ) : (
              <p>Pour pouvoir voter, connecte toi champion &#128527;</p>
            )}
          </div>
        </div>
      )}

      <hr />

      <div className="comment p-4 is-flex">
        <div className="form mr-4">
          <Comment />
        </div>
        <div className="list-of-comments ">
          {comments.map((comment) => {
            return (
              <div key={comment._id} className="box ">
                <div className="btn-comm-del is-flex is-justify-content-space-between	">
                  <p className="title is-4 has-text-info mb-3">
                    {comment.userName}
                  </p>
                  {adminData && adminData.payload.role === "admin" ? (
                    <button
                      onClick={() => {
                        deleteComment(comment._id);
                      }}
                      className="delete"
                    ></button>
                  ) : null}
                </div>
                <p className="title is-5 mb-5"> {comment.title}</p>
                <p className="subtitle" id="border-drop-card-name">
                  Message : <br /> {comment.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
