import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Stack, Text, useBreakpointValue, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { EmailInput, PasswordInput } from "../components/inputs";
import service from "../service";
import { Form, useNavigate } from "react-router-dom";
import { FooterButton, MainButton } from "../components/buttons";

export default function RegisterPage() {
    const isMobileScreen = useBreakpointValue(
        { base: true, lg: false }
    )

    const [email, setEmail] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();

    const navigate = useNavigate();

    const errorToast = useToast(
        {
            id: 'errorToast',
            title: "Registration failed!",
            status: "error",
            duration: 6000,
            isClosable: false,
        }
    );

    const successToast = useToast(
        {
            id: 'successToast',
            title: "Registration success!",
            status: "success",
            duration: 6000,
            isClosable: false,
        }
    );

    const handleRegister = async () => {

        const passwordsMatches = password1 === password2;

        if (!passwordsMatches) {
            if (!successToast.isActive("errorToast")) {
                errorToast({ description: "The passwords should matches." });
            }

            return;
        }

        try {
            const registeredEmail = await service.register({ email, password1 });

            navigate("/auth/login");
            
            if (!successToast.isActive("successToast")) {
                successToast({ description: "User " + registeredEmail + " successfully registered." });
            }

        } catch {
            if (!errorToast.isActive("errorToast")) {
                errorToast({ description: "E-mail already in use. Please try again with another e-mail address." });
            }
        }
    }

    const navigateToLogin = () => {
        navigate("/auth/login");
    }

    return (
        <Card
            size="lg"
            width={isMobileScreen ? "xs" : "md"}
            variant="elevated"
            bg="black.main" color="white.3"
        >
            <CardHeader justifyItems="center">
                <Image height="4em" src="/brand.png" alt="Smart Menu UFRN Logo" />
            </CardHeader>

            <CardBody>
                <Form>
                    <Stack spacing={5}>
                        <Heading alignSelf="center">Register</Heading>

                        <EmailInput setEmail={setEmail} />

                        <PasswordInput setPassword={setPassword1} />

                        <PasswordInput setPassword={setPassword2} label="Confirm password" />

                        <MainButton handleClick={handleRegister} label="Register" />
                    </Stack>
                </Form>
            </CardBody>

            <CardFooter justifyContent="flex-end">
                <Flex alignItems="center" flexDirection="row" gap={2}>
                    <Text fontSize="sm">Already have an account?</Text>
                    <FooterButton handleClick={navigateToLogin} label="Login" />
                </Flex>
            </CardFooter>
        </Card>
    );
}
