import { useEffect, useState } from "react";
import CardArticleAccueil from "../components/CardArticleAccueil";

function LikePage() {
  const [articleLiked, setArticleLiked] = useState([]);
  const [releaseLiked, setReleaseLiked] = useState([]);
  const [dropLiked, setDropLiked] = useState([]);

  const isLiked = "true";

  const AllArticlesLiked = () => {
    if (isLiked === "true") {
      fetch("http://localhost:1234/likes/all-articles").then(async (res) => {
        const data = await res.json();
        console.log(data.likes);
        setArticleLiked(data.likes);
      });
    }
  };

  const AllReleasesLiked = () => {
    if (isLiked === true) {
      fetch("http://localhost:1234/likes/all-releases").then(async (res) => {
        const data = await res.json();
        console.log(data.likes);
        setReleaseLiked(data.likes);
      });
    }
  };

  const AllDropLiked = () => {
    if (isLiked === true) {
      fetch("http://localhost:1234/likes/all-drops").then(async (res) => {
        const data = await res.json();
        console.log(data.likes);
        setDropLiked(data.likes);
      });
    }
  };

  useEffect(() => {
    AllArticlesLiked();
    AllReleasesLiked();
    AllDropLiked();
  }, []);

  return (
    <>
      <div className="likes p-4">
        <h1 className="title is-3">SneakyLike</h1>

        <div className="drops">
          <h2 className="title is-4 mb-4">Articles</h2>
          {articleLiked.map((article) => {
            return (
              <>
                <CardArticleAccueil
                  key={article.name}
                  id={article._id}
                  image={article.image}
                  category={article.category}
                  url={article.url}
                  name={article.name}
                  content={article.content}
                  date={article.date}
                />
              </>
            );
          })}
        </div>

        <div className="release">
          <h2 className="title is-4 mb-4">Releases</h2>
          {releaseLiked.map((release) => {
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
                />
              </>
            );
          })}
        </div>

        <div className="article">
          <h2 className="title is-4 mb-4">Drops</h2>
          {dropLiked.map((drop) => {
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
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LikePage;
