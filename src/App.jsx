import React, { useState } from 'react'
import './App.css'
import { Heading,Stack,HStack,Button, Spacer,Flex,Text,Divider,Image,Box } from "@chakra-ui/react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Stack align="center" spacing="5" mt="5">
        <Heading>Our menu</Heading>
        <div className={"underline"}/>
        <HStack align="center">
        <Button colorScheme="blue">All</Button>
        <Button colorScheme="blue">Breakfast</Button>
        <Button colorScheme="blue">Lunch</Button>
        <Button colorScheme="blue">Shakes</Button>
        </HStack>
        <HStack p="5">
        <HStack >
        <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={"https://bit.ly/2Z4KKcF"} alt={"property.imageAlt"} />
        </Box>
        <Stack maxW="sm">
        <Flex align="center">
            <Heading as="h5" size="xs">Soy un menu</Heading>
            <Spacer/>
            <Text>$10</Text>
          </Flex>
          <Divider orientation="horizontal"/>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti tempore cumque doloremque! Consectetur at, tempora corporis nulla repudiandae laborum culpa molestiae ullam, doloribus veniam, dicta neque in autem facilis!</Text>
        </Stack>
        </HStack>
        <HStack >
        <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={"https://bit.ly/2Z4KKcF"} alt={"property.imageAlt"} />
        </Box>
        <Stack maxW="sm">
        <Flex align="center">
            <Heading as="h5" size="xs">Soy un menu</Heading>
            <Spacer/>
            <Text>$10</Text>
          </Flex>
          <Divider orientation="horizontal"/>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti tempore cumque doloremque! Consectetur at, tempora corporis nulla repudiandae laborum culpa molestiae ullam, doloribus veniam, dicta neque in autem facilis!</Text>
        </Stack>
        </HStack>
        </HStack>
        </Stack>
 
    </div>
  )
}

export default App
