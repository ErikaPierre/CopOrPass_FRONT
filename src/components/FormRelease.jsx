import { useEffect, useState } from "react";

function FormRelease() {
  const [date, setDate] = useState("");
  const [brand, setBrand] = useState("");
  const [modeleName, setModeleName] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState(undefined);

  const createProduct = async (e) => {
    e.preventDefault();

    fetch("http://localhost:1234/releases/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: image,
        dateRelease: date,
        brand: brand,
        modeleName: modeleName,
        color: color,
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

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <form onSubmit={createProduct} className="article-form">
        <div className="field">
          <label className="label">Date</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Marque</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Modele</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={modeleName}
              onChange={(e) => setModeleName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Colori</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="file is-info has-name mt-4 mb-4">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="resume"
              value={image}
              onChange={handleImage}
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label"> select file</span>
            </span>
            <span className="file-name">
              {image ? image.name : "No file selected"}
            </span>
          </label>
        </div>

        <div className="field is-grouped is-pulled-right	">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormRelease;
