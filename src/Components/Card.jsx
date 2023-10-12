function Card({ image, title, description, key }) {
  return (
    <div id={key}>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;
