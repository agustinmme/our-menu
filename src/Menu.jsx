import React from 'react'
import { Heading,Stack, Spacer,Flex,Text,Divider,Image,Box,SimpleGrid } from "@chakra-ui/react"
function Menu() {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} >
        <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={"https://bit.ly/2Z4KKcF"} alt={"property.imageAlt"} />
        </Box>
        <Stack maxW="sm">
        <Flex align="center">
            <Heading as="h5" size="xs">Soy un menu</Heading>
            <Spacer/>
            <Text>$10</Text>
          </Flex>
          <Divider  colorScheme={"blue"}/>
          <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti tempore cumque doloremque! Consectetur at, tempora corporis nulla repudiandae laborum culpa molestiae ullam, doloribus veniam, dicta neque in autem facilis!</Text>
        </Stack>
        </SimpleGrid> 
    )
}

export default Menu
