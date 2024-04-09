import { useEffect, useState } from "react";

function Comment() {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const adminData = JSON.parse(sessionStorage.getItem("admin"));

  const [comments, setComments] = useState([]);

  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getAllComments = () => {
    fetch("http://localhost:1234/comments/all").then(async (res) => {
      const data = await res.json();
      console.log(data.comments);
      setComments(data.comments);
    });
  };

  const createComment = async (e) => {
    e.preventDefault();

    fetch("http://localhost:1234/comments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userName,
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

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <div className="Comment-list">
        <div>
          {userData || adminData ? (
            <form onSubmit={createComment} className="comment-form">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>

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

              <button type="submit" className="button is-info is-outlined">
                Envoyer
              </button>
            </form>
          ) : null}
        </div>

        <div className="list ">
          {comments.map((comment) => {
            return (
              <div key={comment._id} className="box ">
                <p className="title is-4 ">{comment.userName}</p>
                <p className="title is-5 ">{comment.title}</p>
                <p className="title is-6 ">{comment.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Comment;
