import React from 'react'
import { Heading,Stack, Spacer,Flex,Text,Divider,Image,Box,SimpleGrid } from "@chakra-ui/react"
function Menu({title,price,img,desc}) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} >
        <Image  boxSize="300px" src={img} borderRadius="lg" alt={"property.imageAlt"} />
        <Stack maxW="sm">
        <Flex align="center">
            <Heading as="h5" size="xs" color={"#102a42"}>{capitalizeFirstLetter(title)}</Heading>
            <Spacer/>
            <Text fontWeight="bold" color={"#c59d5f"} >${price}</Text>
          </Flex>
          <hr  color="#777da4"/>
          <Text color={"#777da4"}>{desc}</Text>
        </Stack>
        </SimpleGrid> 
    )
} 

export default Menu
