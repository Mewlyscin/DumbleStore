<<<<<<< HEAD
function Card({ image, title, description, key, price }) {
  return (
    <div className="card" id={key}>
      <span>
        <img src={image} alt="" />
=======
function Card({ image, title, description, key, gallions, mornilles }) {
  return (
    <div className="card" id={key}>
      <span>
        <img className="card-img" src={image} alt="" />
>>>>>>> 0eee6c81a42194970368aa26a7461ec019a66e3e
        <h2>{title}</h2>
        <p>{description}</p>
      </span>
      <span>
<<<<<<< HEAD
        <p>{price}</p>
        <button>Ajouter au panier</button>
=======
        <p className="price">
          <img className="money" src="../src/Img/gallion.webp" />
          &nbsp;{gallions}
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="money" src="../src/Img/mornille.webp" />
          &nbsp;{mornilles}
        </p>
        <button>
          <img
            src="https://img.icons8.com/ios-filled/50/shopping-basket.png"
            alt="shopping-basket"
            className="panier-icon"
          />
        </button>
>>>>>>> 0eee6c81a42194970368aa26a7461ec019a66e3e
      </span>
    </div>
  );
}

export default Card;
