import TableUsers from "../components/TableUsers";

function UserPage() {
  return (
    <>
      <div className="table p-4">
        <h1 className="title is-3">Tous les utilisateurs</h1>
        <TableUsers />
      </div>
    </>
  );
}

export default UserPage;
