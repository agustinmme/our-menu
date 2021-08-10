import React, { useState } from 'react'
import './App.css'
import { Heading,Stack} from "@chakra-ui/react"
import Lista from "./ListMenu"
import Filter from "./Filter"
import items from './data.js';

function App() {
  const [filtro, setFiltro] = useState(items)
  const allCate = ['all', ...new Set(items.map((item) => item.category))];
  const filterButtons = (cate) => {
    if (cate === "all") {
      console.log(filtro)
      return setFiltro(items);
    }
    const filtrado = items.filter((menu) =>
    menu.category === cate
    );
    setFiltro(filtrado);
  };
  return (
    <div className="App">
      <Stack align="center" spacing="5" mt="5">
        <Heading color={"#102a42"}>Our menu</Heading>
        <div className={"underline"}/>
        <Filter action={filterButtons} cate={allCate}/>
        <Lista data={filtro} actual={filtro}/>
        </Stack>
 
    </div>
  )
}

export default App
 