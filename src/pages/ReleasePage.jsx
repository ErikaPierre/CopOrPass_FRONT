import { useEffect, useState } from "react";
import CardRelease from "../components/CardRelease";

function ReleasePage() {
  const [releases, setReleases] = useState([]);

  const getAllReleases = () => {
    fetch("http://localhost:1234/all/releases").then(async (res) => {
      const data = await res.json();
      console.log(data.releases);
      setReleases(data.releases);
    });
  };

  useEffect(() => {
    getAllReleases();
  }, []);

  return (
    <div className="releases  mb-4">
      <div className="is-flex is-justify-content-center p-4 mt-4 mb-4">
        <h1 className="title is-3">
          &#129327; Toutes les paires à venir &#129327;
        </h1>
      </div>
      <div className="wrapper columns is-flex-wrap-wrap	is-justify-content-center	">
        {releases.map((release) => {
          return (
            <CardRelease
              key={release._id}
              image={release.image}
              dateRelease={release.dateRelease}
              brand={release.brand}
              modeleName={release.modeleName}
              color={release.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReleasePage;
