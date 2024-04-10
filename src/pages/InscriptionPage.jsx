import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function InscriptionPage() {
  const [userNameRegister, setUserNameRegister] = useState("");
  const [userEmailRegister, setUserEmailRegister] = useState("");
  const [userPasswordRegister, setUserPasswordRegister] = useState("");

  const registerUser = (event) => {
    event.preventDefault();

    try {
      fetch("http://localhost:1234/user/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userNameRegister,
          email: userEmailRegister,
          password: userPasswordRegister,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload();
        });
    } catch (error) {
      console.error("Erreur lors du login: ", error.message);
    }
  };

  return (
    <div className="login is-flex-direction-column " id="connexion">
      <h1 className="title is-4">Inscription</h1>
      <form method="post" onSubmit={registerUser}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Nom utilisateur"
              value={userNameRegister}
              onChange={(e) => setUserNameRegister(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={userEmailRegister}
              onChange={(e) => setUserEmailRegister(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Mot de passe"
              value={userPasswordRegister}
              onChange={(e) => setUserPasswordRegister(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <label class="checkbox">
          <input type="checkbox" /> Se souvenir de moi
        </label>
        <br />
        <div className="field is-flex is-justify-content-center mt-3">
          <p className="control">
            <button className="button is-info">Inscription</button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default InscriptionPage;
