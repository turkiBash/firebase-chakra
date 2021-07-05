import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  EmailValidation,
  PasswordValidation,
} from "../Utilities/LoginValidation";
import { useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleOnClick = () => {
    setErrorMessage("");
    if (EmailValidation(email) && PasswordValidation(password)) {
    //   console.log(window.location.pathname)
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
          <Button
            onClick={handleOnClick}
            textAlign="center"
            colorScheme="teal"
            height="2.5rem"
            rounded="1vh"
            mr="4px"
          >
            Log In
          </Button>
          <Button
            textAlign="center"
            colorScheme="teal"
            height="2.5rem"
            rounded="1vh"
            onClick={() => setPassword("")}
            type="reset"
            mr="4px"
          >
            reset
          </Button>
          <Text>{errorMessage}</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default Login;
