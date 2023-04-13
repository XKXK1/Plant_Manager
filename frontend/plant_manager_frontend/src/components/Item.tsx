import CardData from "./IData";

interface Props {
  cardData: CardData;
}

const Item = ({ cardData }: Props) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={cardData.imageUrl}
        alt="Card image cap"
        style={{ width: "18rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{cardData.title}</h5>
        <p className="card-text">{cardData.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Item;
