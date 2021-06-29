import {Button, Flex, Heading, Input} from "@chakra-ui/react";

const Login = () => {

    return(
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column"  p={14} rounded={6}>
                <Heading >Log In
                    <form >
                        <Input type="email" placeholder="Email Address" variant="filled" />
                            <Input type="Password" placeholder="Password" variant="filled" mb="6px" />
                            <Button textAlign="center" colorScheme="teal" height="2.5rem" rounded="1vh" onClick="Submit" mr="4px">Log In</Button>
                        <Button textAlign="center" colorScheme="teal" height="2.5rem" rounded="1vh" onClick="ResetPassword" type="reset" mr="4px">reset</Button>
                    </form>
                </Heading>
            </Flex>
        </Flex>
    )
}
export default Login