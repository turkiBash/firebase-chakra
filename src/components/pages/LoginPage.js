import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, IconButton, VStack} from "@chakra-ui/react";
import Login from "../Login";
import {FaSun, FaMoon} from "react-icons/fa";

const LoginPage = () => {

    return (
        <VStack p={4}>
            <Heading >
                <IconButton icon={<FaSun/>} isRound="true" size="md" alignSelf="flex-end"/>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#www.google.com">Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                        <BreadcrumbLink href="Login">Login</BreadcrumbLink>
                    </BreadcrumbItem>

                </Breadcrumb>
            </Heading>
            <Login/>
        </VStack>
    )
}
export default LoginPage