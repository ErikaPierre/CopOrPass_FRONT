import { useEffect, useState } from "react";
import TableNewsletter from "../components/TableNewsletter";

function NewsletterPage() {
  const [subscribers, setSubscribers] = useState([]);

  const getAllSubscribers = () => {
    fetch("http://localhost:1234/newsletter/all")
      .then((res) => res.json())
      .then((data) => {
        setSubscribers(data.emails);
        console.log(data.emails);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    getAllSubscribers();
  }, []);

  return (
    <div className="table-user p-4">
      <div className="is-flex is-justify-content-space-between mb-3">
        <div>
          <h2 className="title is-3">Tous les nouveaux inscris</h2>
        </div>
      </div>
      {Array.isArray(subscribers) &&
        subscribers.map((subscriber) => (
          <TableNewsletter
            key={subscriber._id}
            id={subscriber._id}
            email={subscriber.email}
          />
        ))}
    </div>
  );
}

export default NewsletterPage;
