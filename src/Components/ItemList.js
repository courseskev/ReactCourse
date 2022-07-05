import React, { useState, useEffect } from "react";

const ItemList = ({ initialProducts }) => {
  const promesa = new Promise((res, rej) => {
    setTimeout(() => {}, 2000);
    res(initialProducts);
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    promesa
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch(() => {
        console.log("Revisar la promesa en ItemListContainer");
      });
  }, []);

  return (
    <>
      {products.map((p) => (
        <h2 key={p.id}> {p.name}</h2>
      ))}
    </>
  );
};

export default ItemList;
