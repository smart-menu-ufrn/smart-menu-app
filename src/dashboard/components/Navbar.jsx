import { Button, Flex, Image, Stack } from "@chakra-ui/react";
import { BiDrink } from "react-icons/bi";
import { BsBox, } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

function NavbarButton({ children, icon, path }) {
    const location = useLocation();
    const isActive = location.pathname === path;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    }

    return (
        <Button
            leftIcon={icon} justifyContent="start" alignItems="center"
            variant="ghost"
            color={isActive ? "black.main" : "white.5"}
            bg={isActive ? "blue.400" : "inherit"}
            size="lg" gap={1}
            rounded={0}
            onClick={handleClick}
            _hover={{ color: "black.main", bg: "blue.400" }}
        >
            {children}
        </Button>
    );
}

export default function Navbar() {

    return (
        <Flex
            direction="column" justifyContent="space-between" alignItems="center"
            height="100%" paddingTop={10} paddingBottom={3}
        >
            <Image boxSize="5em" src="/logo.png" alt="Smart Menu Logo" />

            <Stack width="100%">
                <NavbarButton icon={<BiDrink />} path={"/dash"}>
                    Items
                </NavbarButton>
                <NavbarButton icon={<CgNotes />} path={"/dash"}>
                    Orders
                </NavbarButton>
                <NavbarButton icon={<BsBox />} path={"/dash"}>
                    Stock
                </NavbarButton>
                <NavbarButton icon={<FaRegUser />} path={"/dash/users"}>
                    Users
                </NavbarButton>
            </Stack>

            <footer>
                Smart Menu UFRN &copy;
            </footer>
        </Flex>
    );
}
