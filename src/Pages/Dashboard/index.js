import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Button, Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton, useDisclosure, Image } from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from '../../Components/Sidebar';
import Home from '../../Components/Home';
import AboutUs from '../../Components/AboutUs';
import PasswordPolicy from '../../Components/PasswordPolicy';
import Hook from './hook'
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Full-Logo-Evantage.png'

function Dashboard() {
    const h = Hook();
    const [selectedMenu, setSelectedMenu] = useState('Home');
    const { isOpen, onToggle } = useDisclosure();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();


    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isAuthenticated', false);
        navigate('/');
    };

    return (
        <ChakraProvider>
            <Flex direction={{ base: 'column', md: 'row' }} height="100vh">
                {/* Sidebar */}
                <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    isOpen={isOpen}
                    onToggle={onToggle}
                />

                {/* Mobile Menu Toggle */}
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

                {/* Main Content Area */}
                <Box flex="1" p="6">
                    <Flex justify="space-between" align="center" mb="4">
                        <Image src={logo} width="150px" height="50px" alt="Evantage Logo" />
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                                <Avatar size="sm" name="Admin" src="https://bit.ly/dan-abramov" />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={handleLogout}>Log out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                    <Box
                        border="1px solid #ddd"
                        height="calc(100vh - 100px)"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        p="6"
                        overflowY="auto"
                    >
                        {selectedMenu === 'Home' && <Home />}
                        {selectedMenu === 'AboutUs' && <AboutUs />}
                        {selectedMenu === 'PasswordPolicy' && <PasswordPolicy policy={h.passwordPolicy} />}
                    </Box>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}

export default Dashboard;
