import { Card, Flex } from "@chakra-ui/react";

export default function Menu({ isMobileScreen }) {
    

    return (
        <Flex direction="column" gap={20}
            paddingTop={isMobileScreen ? "5em" : "4em"}
            paddingX={isMobileScreen ? "1em" : "4em"}
        >
            
        </Flex>
    );
}
