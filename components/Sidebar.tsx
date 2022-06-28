import { Avatar, Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaUserCircle, FaRegMoon, FaRegSun } from 'react-icons/fa';
import SidebarItem from "./SidebarItem";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useEffect, useRef } from "react";

export default function Sidebar() {
    console.log('call Sidebar');

    const { colorMode, toggleColorMode } = useColorMode();
    const didRunRef = useRef(false);

    useEffect(() => {
        if (didRunRef.current === false) {
            console.log('call Sidebar useEffect');
            
            didRunRef.current = true;

            const auth = getAuth();
            signInAnonymously(auth)
            .then(() => {
                console.log(auth.currentUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        }
    }, []);

    return (
        <Flex flexDirection='column' w={250} px={1}>
            <Flex p={4} borderRadius={4} bg={colorMode === 'dark' ? 'teal.600' : 'teal.200'} alignItems='center' gap={2}>
                <FaUserCircle fontSize='2.5rem' /><Text fontSize='md' fontWeight='bold'>Anonymous</Text>
            </Flex>
            <Box>
                <SidebarItem title='Toggle Color Mode' Icon={colorMode === 'dark' ? FaRegMoon : FaRegSun} onClick={toggleColorMode} />
            </Box>
        </Flex>

    );
}