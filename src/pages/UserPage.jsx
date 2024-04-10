import TableUsers from "../components/TableUsers";
import { useEffect, useState } from "react";

function UserPage() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const getAllUsers = () => {
    fetch("http://localhost:1234/user/all")
      .then((res) => res.json())
      .then((data) => {
        setUtilisateurs(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const createUser = (e) => {
    e.preventDefault();

    try {
      fetch("http://localhost:1234/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password,
          role: role,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(
            "Ajouter un utilisateur :",
            userName,
            email,
            password,
            role
          );
          setShowModal(false);
          setUserName("");
          setEmail("");
          setPassword("");
          setRole("");
          setUtilisateurs([...utilisateurs, data]);
          window.location.reload();
        });
    } catch (error) {
      console.error("Erreur lors du login: ", error.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="table-user p-4">
        <div className="is-flex is-justify-content-space-between mb-3">
          <div>
            <h1 className="title is-3">Tous les utilisateurs</h1>
          </div>
          <div>
            <button
              className="button is-light"
              onClick={() => setShowModal(true)}
            >
              Ajouter
            </button>
          </div>
        </div>
        {utilisateurs.map((utilisateur) => {
          return (
            <TableUsers
              key={utilisateur._id}
              id={utilisateur._id}
              userName={utilisateur.userName}
              password={utilisateur.password}
              email={utilisateur.email}
              role={utilisateur.role}
            />
          );
        })}
      </div>

      {showModal && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <h2 className="title is-4">Ajouter un utilisateur</h2>
              <div className="field">
                <label className="label">Nom d'utilisateur</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Entrez le nom d'utilisateur"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez l'email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Entrez le mot de passe"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Entrez le rôle"
                  />
                </div>
              </div>
              <button className="button is-primary" onClick={createUser}>
                Ajouter
              </button>
              <button
                className="button is-danger"
                onClick={() => setShowModal(false)}
              >
                Annuler
              </button>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
      )}
    </>
  );
}

export default UserPage;
