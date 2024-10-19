import { Divider, Flex, Heading, Icon } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { FaQuestion } from "react-icons/fa6";

function MenuHeader({ isMobileScreen }) {
    return (
        <Flex>
            <Heading size="lg" color="#EEEEEE" paddingTop={isMobileScreen ? "0.5em" : "1em"}>
                Menu
            </Heading>
        </Flex>
    )
}

function MenuCategoryHeader({ name, icon }) {
    return (
        <Flex
            alignItems="center"
            gap={2}
        >
            <Divider orientation='horizontal' />

            <Icon as={icon || FaQuestion} color="#EEEEEE" />
            <Heading size="sm" color="#EEEEEE">{name || "Category"}</Heading>

            <Divider orientation='horizontal' />
        </Flex>
    )
}

export default function Menu({ isMobileScreen }) {
    
    return (
        <Flex direction="column" alignItems="stretch" gap={5}
            paddingTop={isMobileScreen ? "5em" : "4em"}
            paddingX={isMobileScreen ? "1em" : "4em"}
        >
            <MenuHeader isMobileScreen={isMobileScreen} />

            <MenuCategoryHeader isMobileScreen={isMobileScreen} />

            <ItemCard isMobileScreen={isMobileScreen} />
            
        </Flex>
    );
}
