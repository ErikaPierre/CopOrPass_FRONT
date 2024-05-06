import { useEffect, useState } from "react";
import CardArticleAccueil from "../components/CardArticleAccueil";
import CardDrop from "../components/CardDrop";
import CardRelease from "../components/CardRelease";

function LikePage() {
  const [articleLiked, setArticleLiked] = useState([]);
  const [releaseLiked, setReleaseLiked] = useState([]);
  const [dropLiked, setDropLiked] = useState([]);

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const userId = userData ? userData.payload.id : null;

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

  const removeArticleLiked = (id) => {
    const updatedArticleLiked = articleLiked.filter(
      (article) => article._id !== id
    );
    setArticleLiked(updatedArticleLiked);
  };

  const removeReleaseLiked = (id) => {
    const updatedReleaseLiked = releaseLiked.filter(
      (release) => release._id !== id
    );
    setReleaseLiked(updatedReleaseLiked);
  };

  const removeDropLiked = (id) => {
    const updatedDropLiked = dropLiked.filter((drop) => drop._id !== id);
    setDropLiked(updatedDropLiked);
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
          <h2 className="title is-1">SneakyLikes</h2>
        </div>

        <div className="articles">
          <h2 className=" title is-3 has-text-info mb-4">Articles</h2>
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
                      onRemove={removeArticleLiked}
                      isLikedPage={true}
                    />
                  </>
                );
              })}
          </div>
        </div>

        <div className="release ">
          <h2 className="title is-3 has-text-info mt-4 mb-4">Releases</h2>
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
                      onRemove={removeReleaseLiked}
                      isLikedPage={true}
                    />
                  </>
                );
              })}
          </div>
        </div>

        <div className="drops">
          <h2 className="title is-3 has-text-info mt-4 mb-4">Drops</h2>
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
                      onRemove={removeDropLiked}
                      isLikedPage={true}
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
