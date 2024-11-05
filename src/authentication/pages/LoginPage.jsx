import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Stack, Text, useBreakpointValue, useToast } from "@chakra-ui/react";
import service from "../service";
import { EmailInput, KeepLoggedInput, PasswordInput } from "../components/inputs";
import { FooterButton, MainButton } from "../components/buttons";

export default function LoginPage() {

    const isMobileScreen = useBreakpointValue(
        {base: true, lg: false}
    )

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const errorToast =  useToast(
        {
            id: 'errorToast',
            title: "Login failed!",
            status: "error",
            duration: 6000,
            isClosable: false,
        }
    );

    const successToast = useToast(
        {
            id: 'successToast',
            title: "Login success!",
            status: "success",
            duration: 6000,
            isClosable: false,
        }
    );

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const authenticated = await service.login({email, password});
            
            localStorage.setItem("authenticated", authenticated);
            localStorage.setItem("email", email);
            
            if (!successToast.isActive("successToast")) {
                successToast({description: "You was successfully authenticated as " + email + "."});
            }

            navigate("/dash")
        } catch {
            if (!errorToast.isActive("errorToast")) {
                errorToast({description: "Invalid e-mail or password. Please try again."});
            }
        }
    }

    const navigateToRegister = () => {
        navigate("/auth/register");
    }

    return (
        <Card
            size="lg"
            width={isMobileScreen? "xs" : "md"}
            variant="elevated"
            bg="black.main" color="white.3"
        >
            <CardHeader justifyItems="center">
                <Image height="4em" src="/brand.png" alt="Smart Menu UFRN Logo" />
            </CardHeader>

            <CardBody>
                <Form>
                    <Stack spacing={5}>
                        <Heading alignSelf="center">Login</Heading>
                        
                        <EmailInput setEmail={setEmail} />

                        <PasswordInput setPassword={setPassword} />
                        
                        <KeepLoggedInput />

                        <MainButton handleClick={handleLogin} label="Login" />
                    </Stack>
                </Form>
            </CardBody>

            <CardFooter justifyContent="flex-end">
                <Flex alignItems="center" flexDirection="row" gap={2}>
                    <Text fontSize="sm">Don't have an account?</Text>
                    <FooterButton handleClick={navigateToRegister} label="Register" />
                </Flex>
            </CardFooter>
        </Card>
    );
}
