import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <Flex
            width="100%" minHeight="100vh"
            flexDirection="column"
            bg="black.main"
        >
            <Outlet />
        </Flex>
    );
}
