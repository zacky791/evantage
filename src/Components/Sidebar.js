import React from 'react';
import { ChakraProvider, Box, Flex, Text, Button, VStack, IconButton, useDisclosure} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Sidebar({selectedMenu,setSelectedMenu}) {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <ChakraProvider>
            <Flex direction={{ base: 'column', md: 'row' }} height="100vh">
                <Box
                    w={{ base: '100%', md: '250px' }}
                    bg="gray.100"
                    p="4"
                    borderRight="1px solid #ddd"
                    display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
                >
                    <VStack  mt="25px">
                        <Text fontSize="xl" fontWeight="bold" mb="20px">Menu</Text>
                        <Button
                            w="full"
                            variant="ghost"
                            onClick={() => setSelectedMenu('Home')}
                            colorScheme={selectedMenu === 'Home' ? 'purple' : 'gray'}
                        >
                            Home
                        </Button>
                        <Button
                            w="full"
                            variant="ghost"
                            onClick={() => setSelectedMenu('AboutUs')}
                            colorScheme={selectedMenu === 'AboutUs' ? 'purple' : 'gray'}
                        >
                            About Us
                        </Button>
                        <Button
                            w="full"
                            variant="ghost"
                            onClick={() => setSelectedMenu('PasswordPolicy')}
                            colorScheme={selectedMenu === 'PasswordPolicy' ? 'purple' : 'gray'}
                        >
                            Password Policy
                        </Button>
                    </VStack>
                </Box>

                <Box
                    display={{ base: 'block', md: 'none' }}
                    position="absolute"
                    top="10px"
                    left="10px"
                >
                    <IconButton
                        icon={<HamburgerIcon />}
                        aria-label="Open Menu"
                        onClick={onToggle}
                        variant="outline"
                    />
                </Box>
            </Flex>
        </ChakraProvider>
    );
}

export default Sidebar;
