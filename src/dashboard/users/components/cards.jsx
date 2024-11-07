import { Card, CardBody, CardFooter, CardHeader, Text, useDisclosure } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import { DeleteCardButton, EditCardButton } from "./buttons";
import service from "../service";
import { DeleteAlertDialog } from "./alerts";
import { useRef } from "react";

export const UserCard = ({ user }) => {
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
    const cancelDeleteRef = useRef();

    const handleDelete = async (user) => {
        try {
            await service.deleteUser(user.id);
            onDeleteClose();
        } catch {
            console.log("error");
        }
    }

    return (
        <Card
            variant="elevated"
            size="md" width="40em"
            direction="row" alignItems="center"
            color="whiteAlpha.900" bg="blackAlpha.200"
            rounded={10}
        >

            <CardHeader>
                <FaUser size="1.5em" />
            </CardHeader>

            <CardBody>
                <Text fontSize="1em">
                    {user.profile.name ? user.profile.name : "Undefined"}
                </Text>

                <Text fontSize="0.8em" color="whiteAlpha.600">
                    {user.email}
                </Text>
            </CardBody>

            <CardFooter gap={2}>
                <EditCardButton onClick={null} />
                <DeleteCardButton onClick={onDeleteOpen} />
            </CardFooter>

            <DeleteAlertDialog
                isOpen={isDeleteOpen}
                onOpen={onDeleteClose}
                cancelRef={cancelDeleteRef}
                handleDelete={(user) => handleDelete(user)}
            />

        </Card >
    );
}
