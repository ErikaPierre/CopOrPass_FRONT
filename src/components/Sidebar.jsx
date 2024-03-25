function Sidebar() {

  return (
    <div class="box has-background-white">
      <aside class="menu">
        <p class="menu has-text-grey-dark has-text-weight-bold	is-size-5">
          Marques
        </p>
        <div className="marques is-flex-direction-column">
          <div className="marque-nike">
            <label class="checkbox">
              <input type="checkbox" /> Nike
            </label>
          </div>
          <div className="marque-adidas">
            <label class="checkbox">
              <input type="checkbox" /> Adidas
            </label>
          </div>
          <div className="marque-vans">
            <label class="checkbox">
              <input type="checkbox" /> Vans
            </label>
          </div>
          <div className="marque-yeezy">
            <label class="checkbox">
              <input type="checkbox" /> Yeezy
            </label>
          </div>
          <div className="marque-converse">
            <label class="checkbox">
              <input type="checkbox" /> Converse
            </label>
          </div>
        </div>

        <p class="menu has-text-grey-dark has-text-weight-bold is-size-5 mt-4">
          Couleurs
        </p>
        <div className="color is-flex-direction-column">
          <div className="color-black">
            <label class="checkbox">
              <input type="checkbox" /> Noir
            </label>
          </div>
          <div className="color-white">
            <label class="checkbox">
              <input type="checkbox" /> Blanche
            </label>
          </div>
          <div className="color-red">
            <label class="checkbox">
              <input type="checkbox" /> Rouge
            </label>
          </div>
          <div className="color-yellow">
            <label class="checkbox">
              <input type="checkbox" /> Jaune
            </label>
          </div>
          <div className="color-blue">
            <label class="checkbox">
              <input type="checkbox" /> Bleu
            </label>
          </div>
          <div className="color-multicolor">
            <label class="checkbox">
              <input type="checkbox" /> Multi-color
            </label>
          </div>
        </div>

        <p class="menu has-text-grey-dark has-text-weight-bold is-size-5 mt-4">
          Prix
        </p>
        <div className="price is-flex-direction-column">
          <div className="price-0-100">
            <label class="checkbox">
              <input type="checkbox" /> 0 - 100€
            </label>
          </div>
          <div className="price-100-200">
            <label class="checkbox">
              <input type="checkbox" /> 100 - 200€
            </label>
          </div>
          <div className="price-200">
            <label class="checkbox">
              <input type="checkbox" /> + 200€
            </label>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
