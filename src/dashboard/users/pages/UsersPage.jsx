import React, { useEffect, useState } from "react";

import { FaUser } from "react-icons/fa6";
import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";

import service from "../service";
import { CreateButton, DeleteCardButton, EditCardButton } from "../components/buttons";
import PageContentLayout from "../../layouts/PageContentLayout";
import PageTopbarLayout from "../../layouts/PageTopbarLayout";
import { UserCard } from "../components/cards";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await service.getUsers();
                setUsers(response);
            } catch {
                console.log("error");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Flex direction="column" gap={5}>
            <PageTopbarLayout>
                Users
            </PageTopbarLayout>

            <PageContentLayout>
                {
                    users.map(
                        (user) => (
                            <UserCard
                                user={user}
                                handleEdit={null}
                            />
                        )
                    )
                }
            </PageContentLayout>

            <CreateButton />

        </Flex>
    )
}
