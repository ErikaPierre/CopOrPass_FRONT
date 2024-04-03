import { useState } from "react";

function CardDrop({ image, brand, modeleName, color, price }) {
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
      <div className="title-card is-size-5 p-3">
        <span class="tag is-warning is-medium">{brand}</span>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p
            className="subtitle is-5 has-text-weight-bold has-text-centered p-2"
            id="border-drop-card-name"
          >
            {modeleName}
          </p>
          <p className="subtitle is-5">
            <b>Colori -</b> {color}
          </p>
          <span className="price is-size-2 has-text-info has-text-weight-bold	">
            {price}€
          </span>
        </div>
      </div>
      <div className="bouton-like-dislike is-flex is-justify-content-space-around	">
        <div className="Like is-flex">
          <button
            className="button-like mr-2"
            id="border-btn-release"
            onClick={likeCounter}
          >
            💜
          </button>
          <p>{counter}</p>
        </div>
        <div className="Dislike is-flex">
          <button
            className="button-dislike mr-2"
            id="border-btn-release"
            onClick={dislikeCounter}
          >
            👎🏾
          </button>
          <p>{discounter}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDrop;
