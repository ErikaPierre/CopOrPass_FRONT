import { useState } from "react";

function CardRelease({ image, dateRelease, brand, modeleName, color }) {
  const [counter, setCounter] = useState(0);
  const [discounter, setDiscounter] = useState(0);

  function likeCounter() {
    setCounter(counter + 1);
  }
  function dislikeCounter() {
    setDiscounter(discounter + 1);
  }

  return (
    <div className="card card-release p-3 m-2" id="card-border-release">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="title-card is-size-4 has-text-centered p-3">
        <strong>{brand}</strong>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-6">Modèle : {modeleName}</p>
          <p className="title is-6">Colori : {color}</p>
          <time dateTime="">Date de sortie : {dateRelease}</time>
        </div>
      </div>
      <div className="bouton-like-dislike is-flex is-justify-content-space-around	">
        <div className="Like is-flex">
          <button className="button-like mr-2" id="border-btn-release" onClick={likeCounter}>
            💜
          </button>
          <p>{counter}</p>
        </div>
        <div className="Dislike is-flex">
          <button className="button-dislike mr-2" id="border-btn-release" onClick={dislikeCounter}>
            👎🏾
          </button>
          <p>{discounter}</p>
        </div>
      </div>
    </div>
  );
}

export default CardRelease;
