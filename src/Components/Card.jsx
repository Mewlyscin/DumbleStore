
function Card({
  image,
  title,
  description,
  key,
  gallions,
  mornilles,
  setTotalGallion,
  totalGallion,
  setTotalMornille,
  totalMornille,
  count,
  setCount,
}) {
  const handleClick = () => {
    setCount(count + 1);
    setTotalGallion(totalGallion + Number(gallions));
    setTotalMornille(totalMornille + Number(mornilles));
  };
  return (
    <div className="card" id={key}>
      <div>
        <img
          className="card-img"
          src={image}
          alt=""
          width="320px"
          height="300px"
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="shop-card">
        <span className="price">
          <img className="money" src="../src/Img/gallion.webp" />
          &nbsp;{gallions}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="money" src="../src/Img/mornille.webp" />
          &nbsp;{mornilles}

        </span>
        <button type="button" className="basket-button" onClick={handleClick}>

          <img
            src="https://img.icons8.com/ios-filled/50/shopping-basket.png"
            alt="shopping-basket"
            className="panier-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
