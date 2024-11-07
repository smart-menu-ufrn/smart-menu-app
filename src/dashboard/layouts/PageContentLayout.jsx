import { Flex } from "@chakra-ui/react";

export default function PageContentLayout({ children }) {
    return (
        <Flex direction="column" gap={5} alignItems="center">
            { children }
        </Flex>
    );
}
