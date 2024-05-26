import { useState } from "react";

function GaleriePage() {
  const [modalImage, setModalImage] = useState(null);

  const images_OW = [
    "src/assets/Galerie/Off-White/photo-1557418776-16baa07f1368 (1).jpeg",
    "src/assets/Galerie/Off-White/photo-1582451669266-71f7e1cca3dc (1).jpeg",
    "src/assets/Galerie/Off-White/photo-1606906136205-01323599ed51 (1).jpeg",
    "src/assets/Galerie/Off-White/photo-1622831617330-bc799d6236b4 (1).jpeg",
    "src/assets/Galerie/Off-White/photo-1623789196581-4843d54df4e2 (1).jpeg",
    "src/assets/Galerie/Off-White/photo-1628804482485-ba1865b176fe (1).jpeg",
  ];

  const images_AJ = [
    "src/assets/Galerie/Jordan/Gal_Jor_7 (1).jpeg",
    "src/assets/Galerie/Jordan/Gal_Jor_2.jpg",
    "src/assets/Galerie/Jordan/Gal_Jor_8 (1).jpeg",
    "src/assets/Galerie/Jordan/Gal_Jor_4 (1).jpg",
    "src/assets/Galerie/Jordan/Gal_Jor_5 (1).jpg",
    "src/assets/Galerie/Jordan/Gal_Jor_6 (1).jpg",
  ];

  const images_AD = [
    "src/assets/Galerie/Adidas/Gal_Adi_2.jpg",
    "src/assets/Galerie/Adidas/Gal_Adi_3.jpg",
    "src/assets/Galerie/Adidas/joel-muniz-9pehc2pT9qw-unsplash.jpg",
    "src/assets/Galerie/Adidas/liam-seskis-b5DSsceFdQw-unsplash.jpg",
    "src/assets/Galerie/Adidas/miltiadis-fragkidis-t9AmebKuFh4-unsplash.jpg",
    "src/assets/Galerie/Adidas/sara-kurfess-WM6Kyt_ndIw-unsplash.jpg",
  ];

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <>
      <div>
        <h1 className="title is-3 p-4">Collection Off-White</h1>
        <div className="columns is-multiline">
          {images_OW.map((image, index) => (
            <div className="column is-one-third" key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                onClick={() => openModal(image)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>

        <h1 className="title is-3 p-4">Collection Jordan</h1>
        <div className="columns is-multiline">
          {images_AJ.map((image, index) => (
            <div className="column is-one-third" key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                onClick={() => openModal(image)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>

        <h1 className="title is-3 p-4">Collection Adidas</h1>
        <div className="columns is-multiline">
          {images_AD.map((image, index) => (
            <div className="column is-one-third" key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                onClick={() => openModal(image)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>

        {modalImage && (
          <div className="modal is-active">
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
              <p className="image">
                <img src={modalImage} alt="Modal" />
              </p>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={closeModal}
            ></button>
          </div>
        )}
      </div>
    </>
  );
}

export default GaleriePage;
