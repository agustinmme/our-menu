import React from 'react'
import { SimpleGrid } from "@chakra-ui/react"
import Menu from "./Menu"
function ListMenu({data}) {
    return (
        <>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={3}>
        {data.map((menu)=>{return (
            <Menu key={menu.id} title={menu.title} price={menu.price} img={menu.img} desc={menu.desc}/>
        )})}
        
        </SimpleGrid>
        </>
    )
}

export default ListMenu
