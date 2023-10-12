function Navbar({ count, totalGallion, totalMornille }) {
  return (
    <navbar>
      <img src="./src/img/logo.jpg" alt="logo" />
      <h1>DumbleStore</h1>
      <div className="shop">
        <span className="achat">
          <p>🧺 {count} éléments dans le panier</p>
        </span>
        <span className="total">
          <p>
            🧾{"  "}
            {totalGallion}{" "}
          </p>
          &nbsp;&nbsp;
          <img className="money" src="../src/Img/gallion.webp" />
          &nbsp;&nbsp;&nbsp;
          <p>{totalMornille} </p>
          &nbsp;&nbsp;
          <img className="money" src="../src/Img/mornille.webp" />
        </span>
      </div>
    </navbar>
  );
}

export default Navbar;
