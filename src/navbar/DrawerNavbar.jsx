import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Image, Link, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { BiFoodMenu } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FaBars, FaGithub } from "react-icons/fa"
import { MdSettings } from "react-icons/md"
import { RiDraftLine } from "react-icons/ri"

function DrawerNavbarButton({ buttonRef, onOpen }) {
    return (
        <IconButton
            aria-label="Open navbar"
            variant="outline" color="#EEEEEE"
            fontSize="2em" border="0em"
            ref={buttonRef} onClick={onOpen}
            icon={<FaBars />}
            _hover={{color: "#49C7FF", bg: "#404040"}}
            _focus={{color: "#49C7FF"}}
            _active={{color: "#49C7FF"}}
        />
    )
}

function DrawerNavbarContent() {
    return (
        <Stack
            width="100%" gap={1} alignItems="stretch">
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

function DrawerNavbarLogo() {
    const logoSrc = "logo-light.png"

    return (
        <Image
            height="2em"
            src={logoSrc}
            alt="Smart Menu Logo"
        />
    )
}

function DrawerNavbarGitHub() {
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

function DrawerNavbarFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <Flex
            direction="column"
            width="100%"
            alignItems="center"
            color="#AAAAAA"
        >
            <DrawerNavbarGitHub />
            <Text>Smart Menu UFRN &copy; {currentYear}</Text>
        </Flex>
    )
}

export default function DrawerNavbar() {
    const buttonRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <DrawerNavbarButton
                buttonRef={buttonRef} onOpen={onOpen}
            />

            <Drawer
                placement='right'
                isOpen={isOpen} onClose={onClose}
                finalFocusRef={buttonRef}
                bgColor="#404040"
            >
                <DrawerOverlay />

                <DrawerContent bg="#303030" color="#EEEEEE">
                    <DrawerCloseButton size="lg" />

                    <DrawerHeader>
                        <DrawerNavbarLogo />
                    </DrawerHeader>

                    <DrawerBody>
                        <DrawerNavbarContent />
                    </DrawerBody>

                    <DrawerFooter>
                        <DrawerNavbarFooter />
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </>
    )
}
