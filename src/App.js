import {Button, Flex, Heading, Input, useColorMode, useColorModeValue} from "@chakra-ui/react"


function App() {

  const { toggleColorMode } = useColorMode()
  const darkMode = useColorModeValue("gray.100", "gray 60")

  return (

<Flex height="100vh" alignItems="center" justifyContent="center">
  <Flex direction="column" background="darkMode" p={14} rounded={6}>
    <Button onClick={toggleColorMode}>+</Button>
  <Heading>
    Log In
    <Input type="email" placeholder="Email Address" variant="filled" />
    <Input type="Password" placeholder="Password" variant="filled" mb="6px" />
    <Button colorScheme="teal" height="2.5rem" rounded="10vh" onClick="Submit">Confirm</Button>
  </Heading>
  </Flex>
</Flex>
  );
}

export default App;
