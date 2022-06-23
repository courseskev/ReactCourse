import React from "react";

const ItemListContainer = (props) => {
  return (
    <>
      <li style={{ "list-style": "none" }}>{props.product}</li>
    </>
  );
};

export default ItemListContainer;
