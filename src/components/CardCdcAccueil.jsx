function CardCdcAccueil({ imageUrl, name, logo, date, brand }) {
  return (
    <div className="card card-accueil" id="card-border">
      <div className="title-card has-text-centered mt-3 mb-3">
        <span>
          <strong>{name}</strong>
        </span>
      </div>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageUrl} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media is-flex is-justify-content-center">
          <div className="media-left">
            <figure className="image is-48x48">
              <img id="border-img" src={logo} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4 is-size-6-mobile is-size-5-touch">{brand}</p>
            <p className="subtitle is-6">@{brand}</p>
          </div>
        </div>

        <div className="content">
          {/* <time dateTime="">Date de sortie : {date}</time> */}
        </div>
      </div>
    </div>
  );
}

export default CardCdcAccueil;
