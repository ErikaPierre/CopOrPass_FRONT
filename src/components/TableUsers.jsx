import { useState } from "react";

function TableUsers({ id, userName, email, role }) {
  const [user, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({
    id: id,
    userName: userName,
    email: email,
    role: role,
    newPassword: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  function deleteUser(id) {
    fetch(`http://localhost:1234/user/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data.users);
      setUtilisateur(data.users);
      window.location.reload();
    });
  }

  function editUser(id) {
    fetch(`http://localhost:1234/user/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedUser),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.users);
        setUser(data.users);
        toggleModal();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th className="is-info">Id</th>
            <th className="is-info">Nom</th>
            <th className="is-info">Email</th>
            <th className="is-info">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{role}</td>
          </tr>
          <div className="btn-tab mt-1">
            <button
              onClick={() => deleteUser(id)}
              className="button is-danger mr-2"
            >
              Supprimer
            </button>
            <button onClick={toggleModal} className="button is-warning">
              Modifier
            </button>
          </div>
        </tbody>
        <tfoot></tfoot>
      </table>

      {isOpen && (
        <div className="modal is-active">
          <div className="modal-background" onClick={toggleModal}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modifier l'utilisateur</p>
              <button
                className="delete"
                aria-label="close"
                onClick={toggleModal}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Nom d'utilisateur</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="userName"
                    value={editedUser.userName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="role"
                    value={editedUser.role}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nouveau mot de passe</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="newPassword"
                    value={editedUser.newPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={() => {
                  editUser(id);
                }}
              >
                Confirmer
              </button>
              <button className="button" onClick={toggleModal}>
                Annuler
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default TableUsers;
