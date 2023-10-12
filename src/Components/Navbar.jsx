function Navbar() {
  return (
    <navbar>
      <div className="logo">
        <img src="./src/img/logo.jpg" alt="logo" />
      </div>
      <>
        <h1>DumbleStore</h1>
      </>

      <div className="shop">
        <button>
          <span className="total">
            <img
              className="caddy"
              src="https://img.icons8.com/pulsar-line/48/shopping-basket.png"
              alt="shopping-basket"
            />
          </span>
        </button>
      </div>
    </navbar>
  );
}

export default Navbar;
