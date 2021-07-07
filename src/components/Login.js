import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  EmailValidation,
  PasswordValidation,
} from "../Utilities/LoginValidation";
import { useState, useContext } from "react";
import { ProfileContext } from "../context/useContext";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const { setIsLoggedIn} = useContext(ProfileContext)

  const handleOnClick = () => {
    setErrorMessage("");
    if (EmailValidation(email) && PasswordValidation(password)) {
      //   console.log(window.location.pathname)
      setIsLoggedIn((prev) => !prev)
      window.location.pathname = "/";
    } else {
      setErrorMessage("Wrong Email or Password");
    }
    setTimeout(() => setErrorMessage(""), [3000]);
  };

  // const requiredHandler = () => {
  //     let isRequired = false;
  //     if (!setEmail(email)){
  //      isRequired = true
  //     }else{
  //         return isRequired
  //     }
  // }

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Flex p={14} rounded={6}>
        <Stack>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              variant="flushed"
              maxW="100%"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="Password">
            <FormLabel>Password</FormLabel>
            <Input
              type="Password"
              variant="flushed"
              mb="6px"
              maxW="100%"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <ButtonGroup
            textAlign="center"
            colorScheme="teal"
            height="2rem"
            rounded="1vh"
            spacing="6"
          >
            <Button size="md" onClick={handleOnClick}>
              Log In
            </Button>
            <Button size="md" onClick={() => setPassword("")} type="reset">
              reset
            </Button>
          </ButtonGroup>
          <Text>{errorMessage}</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default Login;
