import { Button, FormControl } from "@chakra-ui/react";

export const MainButton = ({ handleClick, label }) => {

    return (
        <FormControl>
            <Button
                onClick={handleClick}
                width="100%" bg="teal"
                color="white.main"
                _hover={{color: "black.main", bg: "white.3"}}
            >
                {label ? label : "Click"}
            </Button>
        </FormControl>
    );
}

export const FooterButton = ({ handleClick, label }) => {

    return (
        <Button
            onClick={handleClick}
            size="xs" fontSize="sm" paddingX="1em"
            color="inherit" bg="black.2"
            _hover={{bg: "black.1"}}
        >
            {label ? label : "Click"}
        </Button>
    );
}
