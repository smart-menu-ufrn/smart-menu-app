import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function AuthenticationLayout() {

    return (
        <Flex
            width="100vw" height="100vh"
            justifyContent="center" alignItems="center"
            color="white.main" bg="black.bg"
        >
            <Outlet />
        </Flex>
    )
}
