import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 300, height: 350 }}>
      <CardMedia sx={{ height: 180 }} image={item.img} title="tarjeta" />
      <CardContent sx={{ height: 100 }}>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          textAlign={"center"}
        >
          {item.title}
        </Typography>
        <Typography variant="h7" color="black" textAlign={"center"}>
          {item.description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${item.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
            color="warning"
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
