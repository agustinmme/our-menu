import React from 'react'
import { HStack,Button } from "@chakra-ui/react"
function Filter() {
    return (
        <HStack align="center">
        <Button colorScheme="blue">All</Button>
        <Button colorScheme="blue">Breakfast</Button>
        <Button colorScheme="blue">Lunch</Button>
        <Button colorScheme="blue">Shakes</Button>
        </HStack>
    )
}

export default Filter
