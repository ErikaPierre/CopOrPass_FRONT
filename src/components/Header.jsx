import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const name = userData ? userData.user.userName : "";

  const handleLogout = async () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("admin");
    navigate("/connexion");
  };


  return (
    <div>
      <div className="logo is-flex is-justify-content-center">
        <Link to="http://localhost:5173/">
          <img
            id="border-img"
            src="src/assets/Logo_Site/SneakyLogo.png"
            width="180"
          />
        </Link>
      </div>

      <nav
        className="navbar is-normal"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-size-4">
          <div className="navbar-start">
            <Link to="/" className="navbar-item has-text-white" id="menu-item">
              Accueil
            </Link>
            <Link
              to="/galerie"
              className="navbar-item has-text-white"
              id="menu-item"
            >
              Galerie
            </Link>
            <Link
              to="/releases"
              className="navbar-item has-text-white"
              id="menu-item"
            >
              Releases
            </Link>
            <Link
              to="/drops"
              className="navbar-item has-text-white"
              id="menu-item"
            >
              Drops
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                to="#"
                className="navbar-link has-text-white"
                id="menu-item"
              >
                A propos
              </Link>
              <div className="navbar-dropdown">
                <Link to="#" className="navbar-item">
                  Qui sommes-nous ?
                </Link>
                <Link to="#" className="navbar-item">
                  Opportunités
                </Link>
                <Link to="#" className="navbar-item">
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link to="" className="navbar-item">
                  Un problème ? Dis-le nous ici
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons mr-4">
                {adminData  && adminData.user.role === 'admin' ?(
                  <>
                    <p>{name}</p>
                    <button className="button is-rounded is-info is-danger is-dark ml-2 mr-2">
                      <Link to="/users">Utilisateurs</Link>
                    </button>
                    <button
                      className="button is-info is-light"
                      onClick={handleLogout}
                    >
                      Deconnexion
                    </button>
                  </>
                ):
                  (userData && userData.user.role ==='user' ? (
                    <>
                      <p>{name}</p>
                      <button className="button is-rounded is-info is-danger is-dark ml-2 mr-2">
                        <Link to="/like" id="btn-SnkLks">
                          Mes sneakyLikes
                        </Link>
                      </button>
                      <button
                        className="button is-info is-light"
                        onClick={handleLogout}
                      >
                        Deconnexion
                      </button>
                    </>
                  ):(
<>
                  <Link to="/connexion">
                    <button className="button is-info is-light">
                      <FaRegUser />
                    </button>
                  </Link>
                </>
                  ))}
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
