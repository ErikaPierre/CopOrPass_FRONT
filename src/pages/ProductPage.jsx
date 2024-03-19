import { useState } from "react";

function ProductPage() {
  const [progress, setProgress] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);

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

  return (
    <div className="product is-flex-direction-column mb-3" id="page_product">
      <div className="product_s">
        <div className="text-product is-size-4	has-text-weight-bold	mt-3 mb-3">
          <span>
            L’un des nombreux modèles imaginés par Tinker Hatfield renouvelle
            ses propositions à travers une Nike Air Max 1 Burgundy Crush.
          </span>
        </div>

        <div className="img-product">
          <img src="src/assets/Articles/Produit_1.jpeg" alt="" />
        </div>

        <div className="title-product mt-3 mb-6">
          <h2 className="title is-2 ">Nike Air Max 1 Burgundy Crush</h2>
        </div>

        <div className="content-product mt-3 mb-3">
          <p>
            Ce nouveau design dévoilé par Nike s’articule en trois phases. Tout
            d’abord, des empiècements en cuir orange recouvrent le upper alors
            que du daim bordeaux entoure l’ensemble. En guise de fond, on
            retrouve une base immaculée de façon à bien mettre en valeur la
            composition bicolore.
          </p>
        </div>

        <div className="img-product">
          <img src="src/assets/Articles/Produit_1_1.jpeg" alt="" />
        </div>

        <div className="content-product mt-3 mb-3">
          <p>
            La Nike Air Max 1 Burgundy Crush projette une sortie cette année
            auprès de différents revendeurs et bien évidement sur
            <a href="https://www.nike.com/fr/?CP=EUNS_AFF_AWIN_FR_13430_AffiliatePromotions_&utm_source=AffiliatePromotions&utm_medium=affiliate&utm_campaign=13430&utm_content=&sv1=affiliate&sv_campaign_id=13430&awc=16328_1710802448_129620fdc04d2c4385e3fb727f4148e6#038;awinaffid=163046&#038;clickref=&#038;p=https://www.nike.com/fr/w/nouveau-air-max-chaussures-3n82yza6d8hzy7ok">
              Nike.com.
            </a>
            Le tarif, quant à lui, sera autour de 160€.
          </p>
        </div>

        <div className="like-dislike is-flex-direction-column is-justify-content-space-around mt-6 mb-6">
          <p>👟 {totalVotes} votes </p>
          <progress
            class="progress is-info"
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
    </div>
  );
}

export default ProductPage;
