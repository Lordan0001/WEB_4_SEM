import React from "react";
import { SortTable } from "./SortTable";

function FirstPage() {
  return (
    <>
      <h1>Моя страница №1</h1>
      <h2>Белицкий В. Д.</h2>
      <h2>{new Date().toLocaleDateString()}</h2>
      <SortTable />
    </>
  );
}

export default FirstPage;
