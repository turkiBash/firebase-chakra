import React, { useContext } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useColorMode,
  Image
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../Pictures/turki.png"
import { ProfileContext } from "../context/useContext";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode("");
    const {setIsLoggedIn, isLoggedIn} = useContext(ProfileContext)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"normal"}>
          Yousef Al jehani the Legend
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}></Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "block", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>

      <Box display={{ base: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          mr="6px"
        >
          <Link exact to="/">
            Home
          </Link>
        </Button>

        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          mr="6px"
        >
          Create account
        </Button>

        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          onClick={setIsLoggedIn}
        
        >
          {!isLoggedIn ? (
           <Link to="/">Logout</Link> ) : (
            
          
           <Link to="/Login">Login</Link>
           )}
        </Button>

        <Button
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          variant="solid"
          bgColor="inherit"
          onClick={toggleColorMode}
          ml="6px"
        >
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
          {!isLoggedIn ? <Image display="inline-block" boxSize="50px" mr="4px" src={logo} /> : "" }
            
      </Box>
    </Flex>
  );
};

export default Navbar;
