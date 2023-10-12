import data from "/src/data/data.json";
import Card from "./Card";

function CardList({
  setTotalGallion,
  totalGallion,
  setTotalMornille,
  totalMornille,
  count,
  setCount,
}) {
  return (
    <div className="card-list">
      {data.map((animal) => (
        <Card
          image={animal.image}
          title={animal.title}
          description={animal.description}
          gallions={animal.gallions}
          mornilles={animal.mornilles}
          key={animal.key}
          price={animal.price}
          setTotalGallion={setTotalGallion}
          totalGallion={totalGallion}
          setTotalMornille={setTotalMornille}
          totalMornille={totalMornille}
          setCount={setCount}
          count={count}
        />
      ))}
    </div>
  );
}

export default CardList;
