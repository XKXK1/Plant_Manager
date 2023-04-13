import CardData from "./Item/IData";
import Item from "./Item/Item";

const testData: CardData[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card.",
    imageUrl:
      "https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card.",
    imageUrl:
      "https://www.ikea.com/de/de/images/products/dypsis-lutescens-pflanze-goldfruchtpalme__0653973_pe708202_s5.jpg?f=xl",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card.",
    imageUrl:
      "https://www.ikea.com/de/de/images/products/dypsis-lutescens-pflanze-goldfruchtpalme__0653973_pe708202_s5.jpg?f=xl",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the second card.",
    imageUrl:
      "https://www.ikea.com/de/de/images/products/dypsis-lutescens-pflanze-goldfruchtpalme__0653973_pe708202_s5.jpg?f=xl",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the third card.",
    imageUrl:
      "https://www.ikea.com/de/de/images/products/dypsis-lutescens-pflanze-goldfruchtpalme__0653973_pe708202_s5.jpg?f=xl",
  },
];

const Items = () => {
  return (
    <div className="container">
      <div className="row">
        {testData.map((item) => (
          <div key={item.id} className="col-md-4">
            <Item cardData={item}></Item>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
