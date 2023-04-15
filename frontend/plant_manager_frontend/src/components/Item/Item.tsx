import CardData from "./IData";
import { ItemStyle } from "./ItemStyle";
import { useState } from "react";


interface Props {
  cardData: CardData;
}

const Item = ({ cardData }: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <ItemStyle variant={selected}>
      <div className="card">
        <img
          className="card-img-top"
          src={cardData.imageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{cardData.title}</h5>
          <p className="card-text">{cardData.description}</p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => {
              setSelected(!selected);
            }}
          >
            {selected===true ? 'LOL thanks' : 'pls press'}
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
