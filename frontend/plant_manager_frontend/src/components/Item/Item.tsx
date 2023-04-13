import CardData from "./IData";
import { ItemStyle } from "./ItemStyle";

interface Props {
  cardData: CardData;
}

const Item = ({ cardData }: Props) => {
  return (
    <ItemStyle>

    <div className="card">
      <img
        className="card-img-top"
        src={cardData.imageUrl}
        alt="Card image cap"  
      />
      <div className="card-body">
        <h5 className="card-title">{cardData.title}</h5>
        <p className="card-text">{cardData.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        <a href="#" className="btn btn-secondary">
          Go somewhere
        </a>
      </div>
      
    </div>
    </ItemStyle>

  );
};

export default Item;
