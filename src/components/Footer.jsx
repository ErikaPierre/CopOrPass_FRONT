import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));
  const admin = adminData ? adminData.payload.role === "admin" : userData;
  const user = userData ? userData.payload.role === "user" : adminData;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="columns has-background-black has-text-white p-3 mt-5">
      <div className="column logo is-flex is-justify-content-center	is-align-items-center	">
        <a href="http://localhost:5173/">
          <img src="src/assets/Logo_Site/SneakyLogo.png" width="180" />
        </a>
      </div>

      <div className="column pages is-flex is-justify-content-center is-align-items-center">
        <div>
          <a className="navbar-item has-text-white " id="menu-item">
            <p>Accueil</p>
          </a>
          <a className="navbar-item has-text-white" id="menu-item">
            <p>Galerie &#128095;</p>
          </a>
          {user || admin ? (
            <a className="navbar-item has-text-white" id="menu-item">
              <p>Releases &#129327;</p>
            </a>
          ) : null}
          <a className="navbar-item has-text-white" id="menu-item">
            <p>Drop &#128293;</p>
          </a>
        </div>
      </div>

      <div className="column infos is-flex is-justify-content-center is-align-items-center">
        <div>
          <a className="navbar-item has-text-white" id="menu-item">
            <p>Mentions légales</p>
          </a>
          <a className="navbar-item has-text-white" id="menu-item">
            <p>A propos</p>
          </a>
          <a className="navbar-item has-text-white" id="menu-item">
            <p>Contactez-nous</p>
          </a>
        </div>
      </div>

      <div className="column form is-hidden-mobile	">
        <form method="post" onSubmit={handleSubmit}>
          <div className="title-form title is-size-3 has-text-weight-bold	has-text-info	">
            <h1 className="is-size-4-touch">NEWSLETTER</h1>
          </div>
          <span>Pour rester au courant de tout ce qu'il se passe </span>
          <div className="control has-icons-left has-icons-right mt-3 mb-5">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <button className="button is-info is-rounded">Envoyer</button>
        </form>
      </div>

      <div className="column contacts is-flex is-justify-content-center is-align-items-center">
        <div className="is-flex-mobile	">
          <div className="twitter">
            <a href="https://twitter.com/">
              <img src="src/assets/RS/twitter.png" alt="" />
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/">
              <img src="src/assets/RS/insta.png" alt="" />
            </a>
          </div>
          <div className="discord">
            <a href="https://discord.com/">
              <img src="src/assets/RS/discord.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
