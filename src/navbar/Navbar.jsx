import { Flex, Image, Select } from "@chakra-ui/react"
import DrawerNavbar from "./DrawerNavbar"

function NavbarLogo({ isMobileScreen }) {
    const logoSrc = "brand.png"
    const mobileLogoSrc = "logo.png"

    return (
        <Image
            height="3em"
            src={isMobileScreen ? mobileLogoSrc : logoSrc}
            alt="Smart Menu Logo"
        />
    )
}

export default function Navbar({ isMobileScreen }) {

    return (
        <Flex
            position="fixed"
            zIndex="docked"
            alignItems="center"
            alignContent="center"
            justifyContent={isMobileScreen ? "space-between" : "space-around"}
            width="100%" height={isMobileScreen ? "5em" : "4em"}
            paddingX={isMobileScreen ? "1em" : "2em"}
            bg="#404040"
        >
            <NavbarLogo isMobileScreen={isMobileScreen} />

            <Select
                placeholder="Choose a restaurant/bar"
                size="md" width={isMobileScreen ? "15em" : "40em"}
                variant="filled"
                bg="#505050" color="#EEEEEE"
                _hover={{"bg": "#555555"}}
                disabled={true}
            >
            </Select>

            { 
                isMobileScreen ? (
                    <DrawerNavbar />
                ) : null
            }
        </Flex>
    )
}
