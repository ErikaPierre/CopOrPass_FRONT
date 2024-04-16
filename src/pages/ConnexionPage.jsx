import { jwtDecode } from "jwt-decode";
import { enqueueSnackbar, useSnackbar } from "notistack";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ConnexionPage() {
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPasswordLogin, setUserPasswordLogin] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:1234/user/connexion", {
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
        sessionStorage.setItem("user", JSON.stringify(decodedUser));
        sessionStorage.setItem("admin", JSON.stringify(decodedUser));
        sessionStorage.setItem("token", JSON.stringify(token));
        console.log(token);

        enqueueSnackbar("Vous êtes bien connecté", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la connexion :",
          enqueueSnackbar("Votre email ou mot de passe semble incorrect", {
            variant: "error",
          })
        )
      );
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
        <div className="field is-flex is-justify-content-center mt-3 mb-6">
          <p className="control">
            <button className="button is-info">Connexion</button>
          </p>
        </div>
        <div className="register is-flex is-justify-content-center">
          Pas de compte ? <Link to="/inscription"> Je m'inscris</Link>
        </div>
      </form>
    </div>
  );
}

export default ConnexionPage;
