import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Comment() {
  const { productId } = useParams();

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createCommentInProduct = async (e) => {
    e.preventDefault();

    fetch(`http://localhost:1234/comments/create/${productId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userData.payload.userName,
        title: title,
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="Comment-list">
        <div>
          {userData || adminData ? (
            <form onSubmit={createCommentInProduct} className="comment-form">
              <div className="field">
                <label className="label">Titre</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                onClick={createCommentInProduct}
                type="submit"
                className="button is-info is-outlined"
              >
                Envoyer
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Comment;
