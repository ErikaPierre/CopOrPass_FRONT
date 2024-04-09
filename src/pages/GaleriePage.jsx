import { useState } from "react";

function GaleriePage() {
  const [modalImage, setModalImage] = useState(null);

  const images_OW = [
    "https://images.unsplash.com/photo-1606906136205-01323599ed51",
    "https://images.unsplash.com/photo-1623789196581-4843d54df4e2",
    "https://images.unsplash.com/photo-1622831617330-bc799d6236b4",
    "https://images.unsplash.com/photo-1582451669266-71f7e1cca3dc",
    "https://images.unsplash.com/photo-1557418776-16baa07f1368",
    "https://images.unsplash.com/photo-1628804482485-ba1865b176fe",
  ];

  const images_AJ = [
    "src/assets/Galerie/Jordan/Gal_Jor_7.jpeg",
    "src/assets/Galerie/Jordan/Gal_Jor_2.jpg",
    "src/assets/Galerie/Jordan/Gal_Jor_8.jpeg",
    "src/assets/Galerie/Jordan/Gal_Jor_4.jpg",
    "src/assets/Galerie/Jordan/Gal_Jor_5.jpg",
    "src/assets/Galerie/Jordan/Gal_Jor_6.jpg",
  ];

  const images_NK = [
    "https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1656164061663-3dc536192fcb?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1597316287067-7cf08010a9bd?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1641745900309-75ceed0153e1?q=80&w=2814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1634624943305-4c8f49ba7226?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const images_AD = [
    "https://images.unsplash.com/photo-1587270613476-a53af834a385?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "src/assets/Galerie/Adidas/Gal_Adi_2.jpg",
    "src/assets/Galerie/Adidas/Gal_Adi_3.jpg",
    "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574020462714-5451391cc336?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1572026174154-97194f1e3567?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

        <h1 className="title is-3 p-4">Collection Nike</h1>
        <div className="columns is-multiline">
          {images_NK.map((image, index) => (
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
