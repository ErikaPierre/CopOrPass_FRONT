import CardRelease from "../components/CardRelease";
import FormRelease from "../components/FormRelease";
import { useEffect, useState } from "react";

function ReleasePage() {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.user.role === "admin" : userData;
  const [releases, setReleases] = useState([]);

  const getAllReleases = () => {
    fetch("http://localhost:1234/releases/all").then(async (res) => {
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
          &#129327; &#128680; Toutes les paires à venir &#128680; &#129327;
        </h1>
      </div>
      <div className="wrapper columns is-flex-wrap-wrap	is-justify-content-center	">
        {releases.map((release) => {
          return (
            <CardRelease
              key={release._id}
              id={release._id}
              image={release.image}
              dateRelease={release.dateRelease}
              brand={release.brand}
              modeleName={release.modeleName}
              color={release.color}
            />
          );
        })}
      </div>
      <hr />
      {admin ? (
        <div className="form p-4 m-4" id="border-form">
          <FormRelease />
        </div>
      ) : null}
    </div>
  );
}

export default ReleasePage;
