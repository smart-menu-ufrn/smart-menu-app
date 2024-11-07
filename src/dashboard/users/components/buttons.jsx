import { IconButton } from "@chakra-ui/react";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

export const CreateButton = ({ ...props }) => {
    return (
        <IconButton
            icon={<MdAdd />}
            variant="solid"
            color="gray.900"
            bg="green.400"
            size="lg"
            fontSize="2.5em"
            aria-label="Edit user"
            _hover={{ bg: "green.500" }}
            isRound={true}
            position="absolute"
            zIndex={1}
            bottom={6}
            right={10}
            {...props}
        />
    );
}

export const EditCardButton = ({ ...props }) => {
    return (
        <IconButton
            icon={<MdEdit />}
            variant="ghost"
            color="blue.400"
            fontSize="1.5em"
            aria-label="Edit user"
            _hover={{ color: "gray.100", bg: "blue.400" }}
            {...props}
        />
    );
}

export const DeleteCardButton = ({ ...props }) => {
    return (
        <IconButton
            icon={<MdDelete />}
            variant="ghost"
            color="red.400"
            fontSize="1.5em"
            aria-label="Delete user"
            _hover={{ color: "gray.100", bg: "red.400" }}
            {...props}
        />
    );
}
