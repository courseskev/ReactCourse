import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  let onAdd = (quantity) => {
    console.log(`Felicidades, compraste ${quantity} productos`);
  };
  return (
    <>
      <li style={{ listStyle: "none" }}>{props.product}</li>
      <br />
      <ItemCount stock={5} initial={-1} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
