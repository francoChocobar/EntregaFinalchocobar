import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h3>Precio final: {total}</h3>
          <h3>Descuento: </h3>

          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button
                variant="contained"
                color="warning"
                
              >
                Terminar la compra
              </Button>
              <Button onClick={clearCartWithAlert} variant="contained" color="warning">
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained" color="warning">Agrega productos</Button>
            </Link>
          )}

          <h1>El total del carrito es ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
