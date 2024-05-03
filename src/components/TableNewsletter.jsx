function TableNewsletter({ id, email }) {
  return (
    <>
      <div>TableNewsletter</div>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th className="is-info">Id</th>
            <th className="is-info">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{email}</td>
          </tr>
          <div className="btn-tab mt-1">
            <button
              onClick={() => deleteUser(id)}
              className="button is-danger mr-2"
            >
              Supprimer
            </button>
          </div>
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}

export default TableNewsletter;
