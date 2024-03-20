import { jwtDecode } from "jwt-decode";
import { useState } from "react";

function ConnexionPage() {
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPasswordLogin, setUserPasswordLogin] = useState("");

  const loginUser = (event) => {
    event.preventDefault();

    fetch("http://localhost:1234/auth/connexion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmailLogin,
        password: userPasswordLogin,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { token } = data;
        const decodedUser = jwtDecode(token);
        localStorage.setItem("user", JSON.stringify(decodedUser));
        localStorage.setItem("token", JSON.stringify(token));
        console.log(token);
        window.location.reload();
      })
      .catch((error) => console.error("Erreur lors de la connexion :", error));
  };

  return (
    <div className="login is-flex-direction-column " id="connexion">
      <h1 className="title is-4">Connexion</h1>

      <form method="post" onSubmit={loginUser}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={userEmailLogin}
              onChange={(e) => setUserEmailLogin(e.target.value)}
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
              placeholder="Password"
              value={userPasswordLogin}
              onChange={(e) => setUserPasswordLogin(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <label className="checkbox">
          <input type="checkbox" /> Se souvenir de moi
        </label>
        <br />
        <label className="checkbox">
          <input type="checkbox" /> J'accepte
          <a href="#"> les termes et conditions</a>
        </label>
        <div className="field is-flex is-justify-content-center mt-3">
          <p className="control">
            <button className="button is-info">Connexion</button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ConnexionPage;
