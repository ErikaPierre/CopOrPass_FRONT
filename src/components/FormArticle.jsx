// import { useEffect, useState } from "react";

function FormArticle() {
  // const [date, setDate] = useState("");
  // const [brand, setBrand] = useState("");
  // const [modeleName, setModeleName] = useState("");
  // const [color, setColor] = useState("");
  // const [price, setPrice] = useState(0);
  // const [image, setImage] = useState(null);

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  // };

  // useEffect();

  return (
    <>
      <form action="POST" className="article-form" >
        <div class="field">
          <label class="label">Date</label>
          <div class="control">
            <input
              class="input"
              type="text"
              // value={date}
              // onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Marque</label>
          <div class="control">
            <input
              class="input"
              type="text"
              // value={brand}
              // onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Modele</label>
          <div class="control">
            <input
              class="input"
              type="text"
              // value={modeleName}
              // onChange={(e) => setModeleName(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Colori</label>
          <div class="control">
            <input
              class="input"
              type="text"
              // value={color}
              // onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Prix</label>
          <div class="control">
            <input
              class="input"
              type="number"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div class="file is-info has-name mt-4 mb-4">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> select file</span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>

        <div class="field is-grouped is-pulled-right	">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormArticle;
