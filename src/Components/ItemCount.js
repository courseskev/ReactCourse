import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(() => {
    if (initial < 0) return 0;
    else return initial;
  });

  const aumentarContador = () => {
    if (stock > contador) setContador(contador + 1);
    else alert("Se ha superado el stock");
  };

  const reducirContador = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          style={{ marginRight: 6, width: 25, height: 50 }}
          onClick={reducirContador}
        >
          -
        </button>
        <h1>{contador}</h1>
        <button
          style={{ marginLeft: 6, width: 25, height: 50 }}
          onClick={aumentarContador}
        >
          +
        </button>
      </div>

      <button onClick={onAdd(contador)}>COMPRAR</button>
    </>
  );
};

export default ItemCount;
