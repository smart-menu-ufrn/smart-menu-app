import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import Menu from "./menu/Menu";
import Navbar from "./navbar/Navbar";
import LeftNavbar from "./navbar/LeftNavbar";

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
            
            <Grid
                width="100%" height="100vh" gap={2}
                paddingX={isMobileScreen ? "1em" : "6em"}
                templateColumns="repeat(4, 1fr)"
            >
                <GridItem
                    colSpan={isMobileScreen ? 0 : 1}
                    hidden={isMobileScreen}
                >
                    <LeftNavbar />
                </GridItem>
                <GridItem
                    colSpan={isMobileScreen ? 4 : 3}
                >
                    <Menu isMobileScreen={isMobileScreen}/>
                </GridItem>
            </Grid>


        </Flex>
    );
}

export default App;
