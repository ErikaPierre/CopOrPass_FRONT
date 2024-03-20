import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className="Logo is-flex is-justify-content-center">
        <Link to="http://localhost:5173/">
          <img
            id="border-img"
            src="src/assets/Logo_Site/SneakyLogo.png"
            width="180"
          />
        </Link>
      </div>

      <nav
        class="navbar is-normal"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu is-size-4">
          <div class="navbar-start">
            <Link to="/" class="navbar-item has-text-white" id="menu-item">
              Accueil
            </Link>
            <Link
              to="/galerie"
              class="navbar-item has-text-white"
              id="menu-item"
            >
              Galerie
            </Link>
            <Link
              to="/releases"
              class="navbar-item has-text-white"
              id="menu-item"
            >
              Releases
            </Link>
            <Link to="/drops" class="navbar-item has-text-white" id="menu-item">
              Hot drop
            </Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <Link to="#" class="navbar-link has-text-white" id="menu-item">
                A propos
              </Link>
              <div class="navbar-dropdown">
                <Link to="#" class="navbar-item">
                  Qui sommes-nous ?
                </Link>
                <Link to="#" class="navbar-item">
                  Opportunités
                </Link>
                <Link to="#" class="navbar-item">
                  Contact
                </Link>
                <hr class="navbar-divider" />
                <Link to="" class="navbar-item">
                  Un problème ? Dis-le nous ici
                </Link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons mr-4">
                <Link to="/inscription">
                  <button class="button is-info">Inscription</button>
                </Link>
                <Link to="/connexion">
                  <button class="button is-info is-light">
                    <FaRegUser />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
