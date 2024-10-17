import { Flex } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import Menu from "./menu/Menu";
import Navbar from "./navbar/Navbar";

function App() {
    const isMobileScreen = useBreakpointValue(
        {base: true, lg: false}
    )

    return (
        <Flex
            width="100%" minHeight="100vh"
            flexDirection="column"
            bg="#303030"
        >
            <Navbar
                isMobileScreen={isMobileScreen}
            />

            <Menu isMobileScreen={isMobileScreen}/>

        </Flex>
    );
}

export default App;
