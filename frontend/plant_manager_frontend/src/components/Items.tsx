import CardData from "./Item/IData";
import Item from "./Item/Item";
import { Box, Grid } from "@mui/material";

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
    description: "This is the fourth card.",
    imageUrl:
      "https://www.ikea.com/de/de/images/products/dypsis-lutescens-pflanze-goldfruchtpalme__0653973_pe708202_s5.jpg?f=xl",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the fifth card.",
    imageUrl:
      "https://www.ikea.com/de/de/images/products/dypsis-lutescens-pflanze-goldfruchtpalme__0653973_pe708202_s5.jpg?f=xl",
  },
];

const Items = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ pt: 4, justifyContent: "center", alignItems: "center" }}
      >
        {testData.map((item) => (
          <Grid item xs={10} md={6} lg={4} key={item.id}>
            <Item cardData={item}></Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Items;
