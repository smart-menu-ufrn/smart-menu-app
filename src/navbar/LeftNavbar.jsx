import { Button, Flex, IconButton, Link, Stack, Text } from "@chakra-ui/react"
import { BiFoodMenu } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FaGithub } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { RiDraftLine } from "react-icons/ri"

function LeftNavbarContent() {
    return (
        <Stack
            width="100%" gap={1}
            paddingTop="4em"
            alignItems="stretch"
        >
            <Button
                leftIcon={<BiFoodMenu />}
                size="lg" variant="ghost" color="#EEEEEE"
                justifyContent="flex-start"
                _hover={{color: "#49C7FF", bg: "#353535"}}
                _focus={{color: "#49C7FF"}}
            >
                Menu
            </Button>
            <Button
                leftIcon={<RiDraftLine />}
                size="lg" variant="ghost" color="#EEEEEE"
                justifyContent="flex-start"
                _hover={{color: "#49C7FF", bg: "#353535"}}
                _focus={{color: "#49C7FF"}}
                disabled
            >
                Orders
            </Button>
            <Button
                leftIcon={<CgProfile />}
                size="lg" variant="ghost" color="#EEEEEE"
                justifyContent="flex-start"
                _hover={{color: "#49C7FF", bg: "#353535"}}
                _focus={{color: "#49C7FF"}}
                disabled
            >
                Profile
            </Button>
            <Button
                leftIcon={<MdSettings />}
                size="lg" variant="ghost" color="#EEEEEE"
                justifyContent="flex-start"
                _hover={{color: "#49C7FF", bg: "#353535"}}
                _focus={{color: "#49C7FF"}}
                disabled
            >
                Settings
            </Button>
        </Stack>
    )
}

function LeftNavbarGitHub() {
    return (
        <Link href="https://github.com/smart-menu-ufrn" isExternal>
            <IconButton
                aria-label="Go to the Organization on GitHub"
                variant="outline" color="#AAAAAA"
                size="lg" border="0em"
                icon={<FaGithub />}
                _hover={{color: "#49C7FF"}}
                _active={{color: "#49C7FF"}}
            />
        </Link>
    )
}

function LeftNavbarFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <Flex
            direction="column"
            width="100%"
            alignItems="center"
            color="#AAAAAA"
        >
            <LeftNavbarGitHub />
            <Text>Smart Menu UFRN &copy; {currentYear}</Text>
        </Flex>
    )
}

export default function LeftNavbar() {
    return (
        <Flex
            direction="column"
            justifyContent="space-between"
            height="100vh"
            paddingTop="4em" paddingBottom="1em"
        >
            <LeftNavbarContent />

            <LeftNavbarFooter />
        </Flex>
    )
}
