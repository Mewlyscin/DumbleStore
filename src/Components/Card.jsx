function Card({ image, title, description, key }) {
  return (
    <div className="card" id={key}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

export default Card;
