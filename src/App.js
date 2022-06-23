import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer";
import { useState } from "react";

function App() {
  const catalog = ["product 1", "product 2", "product 3"];
  return (
    <>
      <NavBar />
      <ItemListContainer product={catalog} />
    </>
  );
}

export default App;
