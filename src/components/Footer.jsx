import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="columns has-background-black has-text-white p-3">
      <div className="column logo">
        <a href="http://localhost:5173/">
          <img src="src/assets/Logo_Site/SneakyLogo.png" width="180" />
        </a>
      </div>

      <div className="column pages">
        <a class="navbar-item has-text-white" id="menu-item">
          <p>Accueil</p>
        </a>
        <a class="navbar-item has-text-white" id="menu-item">
          <p>Galerie &#128095;</p>
        </a>
        <a class="navbar-item has-text-white" id="menu-item">
          <p>Releases &#129327;</p>
        </a>
        <a class="navbar-item has-text-white" id="menu-item">
          <p>Hot drop &#128293;</p>
        </a>
      </div>

      <div className="column infos">
        <a class="navbar-item has-text-white">
          <p>Mentions légales</p>
        </a>
        <a class="navbar-item has-text-white">
          <p>A propos</p>
        </a>
        <a class="navbar-item has-text-white">
          <p>Contactez-nous</p>
        </a>
      </div>

      <div className="column form">
        <form method="post" onSubmit={handleSubmit}>
          <div className="title-form title is-size-3 has-text-weight-bold	has-text-info	">
            <h1>NEWSLETTER</h1>
          </div>
          <span>Pour rester au courant de tout ce qu'il se passe </span>
          <div class="control has-icons-left has-icons-right mt-3 mb-5">
            <input
              class="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <button class="button is-info is-rounded">Envoyer</button>
        </form>
      </div>

      <div className="column contacts">
        <div>
          <a href="https://twitter.com/">
            <img src="src/assets/RS/twitter.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/">
            <img src="src/assets/RS/insta.png" alt="" />
          </a>
        </div>
        <div>
          <a href="https://discord.com/">
            <img src="src/assets/RS/discord.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
