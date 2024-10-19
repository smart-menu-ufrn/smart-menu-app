import { Card, CardBody, CardFooter, CardHeader, Collapse, LinkBox, Stat, StatNumber, Text, useDisclosure } from "@chakra-ui/react";
import { BiSolidDrink } from "react-icons/bi";

export default function ItemCard({ isMobileScreen, id, name, description, price, category }) {
    const {isOpen, onToggle} = useDisclosure();

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt metus a massa aliquam, sed tempor diam consequat. Phasellus commodo venenatis ipsum vitae tempus."

    return (
        <LinkBox onClick={onToggle}>
            <Card
                size="md"
                direction="row"
                color="#EEEEEE" bg="#353535"
                variant="elevated"
            >
                <CardHeader alignContent="center">
                    <BiSolidDrink fontSize="1.5em" color="#49C7FF" />
                </CardHeader>
                
                <CardBody>
                    <Text as="b">{name || "Lorem ipsum dolor"}</Text>
                    <Text color="#AAAAAA">
                        <Collapse in={isMobileScreen ? isOpen : !isOpen}>
                            {description || loremIpsum}
                        </Collapse>
                    </Text>
                </CardBody>

                <CardFooter alignItems="center">
                    <Stat>
                        <StatNumber fontSize="lg">£ {price || 0.00}</StatNumber>
                    </Stat>
                </CardFooter>
            </Card>
        </LinkBox>
    )
}
