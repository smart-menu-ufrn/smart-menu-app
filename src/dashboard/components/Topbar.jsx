import { Avatar, AvatarGroup, Flex, Text } from "@chakra-ui/react";

export default function Topbar() {
    const email = localStorage.getItem("email")

    return (
        <Flex
            justifyContent="end" alignItems="center"
            height="100%"
            gap={2} paddingX={3}
            color="white.5"
        >
            <Text>
                {email}
            </Text>

            <Avatar size="sm" bg="teal.500" />
        </Flex>
    );
}
