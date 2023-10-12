function Card({ image, title, description, key }) {
  return (
    <div className="card" id={key}>
      <img className="card-img" src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>
        <img
          src="https://img.icons8.com/ios-filled/50/shopping-basket.png"
          alt="shopping-basket"
          className="panier-icon"
        />
      </button>
    </div>
  );
}

export default Card;
