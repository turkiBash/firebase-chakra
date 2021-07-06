import React, { useContext } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode("");
  const { isLoggedIn } = useContext(ProfileContext);

  // const statusSwitch = () => {
  //   let isLoggedIn = false;

  // }

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
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
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
          // onChange
          >
          {isLoggedIn ? 
            <Link to="/">Logout</Link>
           : 
            <Link to="/Login">Login</Link>
}
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
      </Box>
    </Flex>
  );
};

export default Navbar;
