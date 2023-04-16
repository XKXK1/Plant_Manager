import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import CardData from "./IData";
import { useState } from "react";

interface Props {
  cardData: CardData;
}

const Item = ({ cardData }: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            component="img"
            sx={{
              maxWidth: 320,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            image={cardData.imageUrl}
            title={cardData.title}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardData.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setSelected(!selected);
            }}
          >
            {selected === true ? "LOL thanks" : "pls press"}
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Item;
