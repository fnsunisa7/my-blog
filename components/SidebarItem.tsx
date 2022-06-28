import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

type SidebarItemType = {
    Icon?: IconType,
    title: string,
    onClick?: () => void
}

export default function SidebarItem({ Icon, title, onClick }: SidebarItemType) {
    return (
        <Button leftIcon={Icon && (<Icon />)} colorScheme='teal' variant='ghost' w='100%' justifyContent='left' onClick={onClick}>
            <Text fontSize='md'>{title}</Text>
        </Button>
    );
}
