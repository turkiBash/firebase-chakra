import {Button, Flex, Heading, Input, Stack} from "@chakra-ui/react";
import {EmailValidation, PasswordValidation} from '../Utilities/LoginValidation'
import {useState} from "react";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])


    const handleOnClick = () => {
        setErrorMessage("")
        if(EmailValidation(email) || PasswordValidation(password)){
            // console.log(window.location.pathname)
            window.location.pathname = "./"
        }else{
            setErrorMessage("Wrong Email or Password")
        }


    }

    return(
        
        <Flex height="100vh" alignItems="center" justifyContent="center"  direction="column">
            <Flex p={14} rounded={6}>
                <Heading as="h3" textAlign="center">Log In
                    <form >
                        <Stack>
                            <Input type="text" placeholder="Email Address" variant="filled" maxW="100%" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="Password" placeholder="Password" variant="filled" mb="6px" maxW="1000%" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Button onClick={handleOnClick}  textAlign="center" colorScheme="teal" height="2.5rem" rounded="1vh" mr="4px">Log In</Button>
                            <Button textAlign="center" colorScheme="teal" height="2.5rem" rounded="1vh" onClick="ResetPassword" type="reset" mr="4px">reset</Button>
                        </Stack>
                    </form>
                </Heading>
                        <span>{errorMessage}</span>
            </Flex>
        </Flex>
        
    )
}
export default Login