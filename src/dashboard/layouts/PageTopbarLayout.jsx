import { Avatar, Box, Flex, Heading, Link, LinkBox, Text } from "@chakra-ui/react";

export default function PageTopbarLayout({ children }) {
    const email = localStorage.getItem("email")
    
    return (
        <Flex direction="row" alignItems="center" justifyContent="space-between" bg="inherit">
            <Heading as="h2" size="lg" color="whiteAlpha.800">
                { children }
            </Heading>

            <Flex alignItems="center" gap={2}>
                <Text as="b" color="whiteAlpha.800" fontSize="sm">{ email }</Text>

                <Avatar size="xs" />
            </Flex>
        </Flex>
    );
}
