import {Button, Flex, Heading, Input} from "@chakra-ui/react";
import {EmailValidation, PasswordValidation} from '../Utilities/LoginValidation'
import {useState} from "react";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])


    const handleOnClick = () => {
        setErrorMessage("")
        if(EmailValidation(email) && PasswordValidation(password)){
            window.location.pathname = "/"
        }else{
            setErrorMessage("Wrong Email or Password")
        }


    }

    return(
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column"  p={14} rounded={6}>
                <Heading >Log In
                    <form >
                        <Input type="text" placeholder="Email Address" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Input type="Password" placeholder="Password" variant="filled" mb="6px" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Button onClick={handleOnClick}  textAlign="center" colorScheme="teal" height="2.5rem" rounded="1vh" mr="4px">Log In</Button>
                        <Button textAlign="center" colorScheme="teal" height="2.5rem" rounded="1vh" onClick="ResetPassword" type="reset" mr="4px">reset</Button>
                        <p>{errorMessage}</p>
                    </form>
                </Heading>
            </Flex>
        </Flex>
    )
}
export default Login