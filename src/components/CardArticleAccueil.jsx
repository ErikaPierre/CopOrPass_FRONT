import { Link } from "react-router-dom";

function CardArticleAccueil({ imageUrl, category, name, content, date, url }) {
  return (
    <div className="card is-flex mb-4" id="card-border">
      <div className="section-article-img">
        <Link to="/product">
          <img className="" src={imageUrl} alt="Placeholder image" />
        </Link>
      </div>
      <div className="card-content">
        <div className="media-left mb-3">
          <span className="tag is-warning">{category}</span>
        </div>
        <div className="media-content mb-3">
          <p className="title is-4">{name}</p>
        </div>

        <div className="content">
          {content}
          <hr />
          <time>
            <b>{date}</b>
          </time>
        </div>
      </div>
    </div>
  );
}

export default CardArticleAccueil;
