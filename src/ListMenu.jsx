import React from 'react'
import { SimpleGrid } from "@chakra-ui/react"
import Menu from "./Menu"
function ListMenu() {
    return (
        <>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={3}>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
        </SimpleGrid>
        </>
    )
}

export default ListMenu
