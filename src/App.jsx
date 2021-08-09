import React, { useState } from 'react'
import './App.css'
import { Heading,Stack} from "@chakra-ui/react"
import Lista from "./ListMenu"
import Filter from "./Filter"
function App() {
  const [filtro, setFiltro] = useState("")

  return (
    <div className="App">
      <Stack align="center" spacing="5" mt="5">
        <Heading>Our menu</Heading>
        <div className={"underline"}/>
        <Filter setFiltro={setFiltro}/>
        <Lista actual={filtro}/>
        </Stack>
 
    </div>
  )
}

export default App
