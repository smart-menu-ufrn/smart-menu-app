import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Box, Container, Divider, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";

export default function DashboardLayout() {

    return (
        <Grid
            gap={1}
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            width="100%" maxWidth="100vw"
            height="100vh" maxHeight="100vh"
            color="whiteAlpha.900" bg="blackAlpha.50"
        >

            <GridItem
                rowSpan={10}
                colSpan={2}
            >
                <Navbar />
            </GridItem>

            <GridItem
                rowSpan={10}
                colSpan={8}
                bg="blackAlpha.100"
                maxHeight="100vh"
                overflow="auto"
                paddingTop={3} paddingX={5} paddingBottom={5}
            >
                <Outlet />
            </GridItem>
        </Grid>
    )
}
