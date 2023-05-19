import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <Button variant="contained"  color="warning"  onClick={sumar}>
        Sumar
      </Button>
      <h2>{counter}</h2>
      <Button variant="contained"  color="warning" onClick={restar}>
        Restar
      </Button>
      <Button variant="contained"  color="warning" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
