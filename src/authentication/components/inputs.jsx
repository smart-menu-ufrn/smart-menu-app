import { useState } from "react"
import { FaLock, FaUser } from "react-icons/fa6";
import { Button, Checkbox, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";

export function EmailInput({ setEmail, label }) {

    return (
        <FormControl>
            <FormLabel>
                <Text as="b">{label ? label : "E-mail"}:</Text>
            </FormLabel>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <FaUser color="inherit"/>
                </InputLeftElement>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="example@ufrn.edu.br"
                    variant="flushed"
                    borderColor="black.1" focusBorderColor="white.dark"
                    _placeholder={{color: "inherit", opacity: 0.4}}
                />
            </InputGroup>
        </FormControl>
    );
}

export function PasswordInput({ setPassword, label }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    return (
        <FormControl>
            <FormLabel>
                <Text as="b">{label ? label : "Password"}:</Text>
            </FormLabel>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <FaLock color="inherit"/>
                </InputLeftElement>
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    type={show ? "text" : "password"} placeholder={show ? "password" : "••••••••"}
                    variant="flushed"
                    borderColor="black.1" focusBorderColor="white.dark"
                    _placeholder={{color: "inherit", opacity: 0.4}}
                />
                <InputRightElement>
                    <Button
                        height="50%" size="xs"
                        color="inherit" bg="black.2"
                        onClick={handleShow}
                        _hover={{bg: "black.1"}}
                    >
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
}

export function KeepLoggedInput({ label }) {

    return (
        <FormControl>
            <Checkbox colorScheme="teal">
                {label ? label : "Keep me logged in"}
            </Checkbox>
        </FormControl>
    );
}
