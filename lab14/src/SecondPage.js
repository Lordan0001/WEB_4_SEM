import React from 'react'
import {Catalog} from "./Catalog"
function SecondPage() {
    return (
        <>
            <h1>Моя страница №2</h1>
            <h2>Буранко В. Д.</h2>
            <h2>{`${(new Date().getDate()-1).toLocaleString()}.${(new Date().getMonth()).toLocaleString()}.${new Date().getFullYear()-1}`}</h2>
            <Catalog />
        </>
    );
  }
  export default SecondPage;