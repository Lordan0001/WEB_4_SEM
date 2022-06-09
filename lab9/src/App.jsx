import React, {useState} from 'react'
import SortTable from "./Components/SortTable/SortTable"
import './App.css'
import Catalog from "./Components/Catalog";

const App = () => {
    const [productsList, setProductsList] = useState([])

    return (
        <div>
            <Catalog productsList={productsList} setProductsList={setProductsList}/>
            <SortTable setProductsList={setProductsList}/>
        </div>
    )
}

export default App
