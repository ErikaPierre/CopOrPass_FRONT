function CardArticleAccueil({ image, category, name, content, date }) {
  
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const user = userData ? userData.user.role === "user" : adminData;

  return (
    <>
      <div className="card-header" id="card-border">
        <div className="card-content">
          <div className="columns">
            <div className="column is-3">
              <figure className="image is-4by3">
                <img className="" src={image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="column">
              <div className="media-left is-flex is-justify-content-space-between	 mt-3 mb-3">
                <div>
                  <span className="tag is-warning">{category}</span>
                </div>
                {user ? (
                  <div className="like">
                    <button id="border-btn-release">❤️</button>
                  </div>
                ) : null}
              </div>
              <h1 className="title is-3 mt-5">{name}</h1>
              <p className="has-text-justified	">{content}</p>
              <hr />
              <p>
                <b>{date}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardArticleAccueil;
