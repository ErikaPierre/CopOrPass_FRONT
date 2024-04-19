import { useEffect, useState } from "react";
import CardArticleAccueil from "../components/CardArticleAccueil";
import CardDrop from "../components/CardDrop";
import CardRelease from "../components/CardRelease";

function LikePage() {
  const [articleLiked, setArticleLiked] = useState([]);
  const [releaseLiked, setReleaseLiked] = useState([]);
  const [dropLiked, setDropLiked] = useState([]);

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const userId = userData ? userData.user._id : null;

  const AllArticlesLiked = () => {
    fetch(`http://localhost:1234/products/get-all-likes/${userId}`).then(
      async (res) => {
        const data = await res.json();
        setArticleLiked(data.product.likedProduct);
      }
    );
  };

  const AllDropLiked = () => {
    fetch(`http://localhost:1234/drops/get-all-likes/${userId}`).then(
      async (res) => {
        const data = await res.json();
        setDropLiked(data.drop.likedDrop);
      }
    );
  };

  const AllReleaseLiked = () => {
    fetch(`http://localhost:1234/releases/get-all-likes/${userId}`).then(
      async (res) => {
        const data = await res.json();
        setReleaseLiked(data.release.likedRelease);
      }
    );
  };

  useEffect(() => {
    AllArticlesLiked();
    AllDropLiked();
    AllReleaseLiked();
  }, []);

  return (
    <>
      <div className="likes p-4">
        <div className="is-flex is-justify-content-center	mb-5">
          <h2 className="title is-3">SneakyLikes</h2>
        </div>

        <div className="articles">
          <h2 className=" title is-4 mb-4">Articles</h2>
          <div className="articles-like">
            {Array.isArray(articleLiked) &&
              articleLiked.map((article) => {
                return (
                  <>
                    <CardArticleAccueil
                      key={article._id}
                      id={article._id}
                      image={article.image}
                      category={article.category}
                      url={article.url}
                      name={article.name}
                      content={article.content}
                      date={article.date}
                      isLike={article.isLike}
                    />
                  </>
                );
              })}
          </div>
        </div>

        <div className="release ">
          <h2 className=" title is-4 mt-4 mb-4">Releases</h2>
          <div className="release-like is-flex">
            {Array.isArray(releaseLiked) &&
              releaseLiked.map((release) => {
                return (
                  <>
                    <CardRelease
                      key={release._id}
                      id={release._id}
                      image={release.image}
                      dateRelease={release.dateRelease}
                      brand={release.brand}
                      modeleName={release.modeleName}
                      color={release.color}
                      isLike={release.isLike}
                    />
                  </>
                );
              })}
          </div>
        </div>

        <div className="drops">
          <h2 className="title is-4 mt-4 mb-4">Drops</h2>
          <div className="drop-like is-flex">
            {Array.isArray(dropLiked) &&
              dropLiked.map((drop) => {
                return (
                  <>
                    <CardDrop
                      key={drop._id}
                      id={drop._id}
                      image={drop.image}
                      date={drop.date}
                      brand={drop.brand}
                      modeleName={drop.modeleName}
                      color={drop.color}
                      price={drop.price}
                      isLike={drop.isLike}
                    />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LikePage;
