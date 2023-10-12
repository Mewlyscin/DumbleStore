function Card({ image, title, description, key, price }) {
  return (
    <div className="card" id={key}>
      <span>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </span>
      <span>
        <p>{price}</p>
        <button>Ajouter au panier</button>
      </span>
    </div>
  );
}

export default Card;
