import data from "/src/data/data.json";
import Card from "./Card";

function CardList() {
  return (
    <div className="card-list">
      {data.map((animal) => (
        <Card
          image={animal.image}
          title={animal.title}
          description={animal.description}
          key={animal.key}
          price={animal.price}
        />
      ))}
    </div>
  );
}

export default CardList;
