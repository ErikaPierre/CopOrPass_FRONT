import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";

function ProductPage() {
  const [article, setArticle] = useState([]);
  const [progress, setProgress] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const { productId } = useParams();

  function incrementProgress() {
    if (progress < 100) {
      setProgress((prevProgress) => prevProgress + 1);
      setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
    }
  }

  function decrementProgress() {
    if (progress > 0) {
      setProgress((prevProgress) => prevProgress - 1);
      setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
    }
  }

  const getOneProduct = () => {
    fetch(`http://localhost:1234/products/get-one/${productId}`).then(
      async (res) => {
        const data = await res.json();
        console.log(data.product);
        setArticle(data.product);
      }
    );
  };
  useEffect(() => {
    getOneProduct();
  });

  return (
    <div className="product is-flex is-flex-direction-column" id="page_product">
      <div className="product_s ">
        <div className="text-product is-size-3	has-text-weight-bold	mt-3 mb-3">
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
          <img src={article.image} alt="" />
        </div>

        <div className="content-product mt-3 mb-3">
          <p>{article.text}</p>
        </div>

        <div className="like-dislike is-flex-direction-column is-justify-content-space-around mt-6 mb-6">
          <p>👟 {totalVotes} votes </p>
          <progress
            className="progress is-info"
            value={progress}
            min="0"
            max="100"
          ></progress>

          <div className="vote-like-dislike is-flex is-justify-content-space-around mt-6 mb-6">
            <div className="Cop is-flex is-align-items-center is-size-4	">
              <button
                className="button is-info is-size-4 mr-3"
                onClick={incrementProgress}
              >
                <p className="is-size-4">COP 🔥</p>
              </button>
            </div>
            <div className="Drop is-flex is-align-items-center is-size-4	">
              <button
                className="button is-danger is-size-4 mr-3"
                onClick={decrementProgress}
              >
                <p className="is-size-4">DROP 🗑️</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="comment ">
        <Comment />
      </div>
    </div>
  );
}

export default ProductPage;
