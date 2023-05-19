import React from "react";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";
export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div className={styles.containerItemDetail}>
        <div className={styles.containerImage}>
          <img src={product.img} alt="" />
        </div>

        <div className={styles.containerDetail}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "18px" }}>Nombre:</span> {product.tittle}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "18px" }}>Descripcion:</span>{" "}
            {product.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "18px" }}>Precio:</span> ${product.price}.-
          </h2>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CounterContainer
          stock={product.stock}
          onAdd={onAdd}
          initial={cantidadTotal}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <Button variant="contained" color="warning">
            Regresar
          </Button>
        </Link>
      </div>
    </div>
  );
};