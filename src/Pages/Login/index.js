import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Button, FormControl, FormLabel, Input, Select, FormErrorMessage, Image } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../Assets/Full-Logo-Evantage.png'

function Login() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [siteOptions, setSiteOptions] = useState({ options: [], selectedSiteCode: '' });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    axios
      .get('http://evantage.ddns.net/evantage_api/get_sitecode.php')
      .then((response) => {
        setSiteOptions(prevState => ({
          ...prevState,
          options: response.data.data || []
        }));
      })
      .catch((error) => {
        console.error('Error fetching site data:', error);
        setSiteOptions(prevState => ({
          ...prevState,
          options: []
        }));
      });

    if (username) {
      axios
        .get(`http://evantage.ddns.net/evantage_api/get_default_site_cd.php?empl_id=${username}`)
        .then((response) => {
          const defaultSite = response.data.default_site || '';
          setSiteOptions(prevState => ({
            ...prevState,
            selectedSiteCode: defaultSite
          }));
          setValue('siteCode', defaultSite);
        })
        .catch((error) => {
          console.error('Error fetching site codes:', error);
        });
    }
  }, [username, setValue]);

  const onSubmit = (data) => {
    const { username, password, siteCode } = data;
    const formatSiteCode = siteCode.includes(':') ? siteCode.split(':')[0] : siteCode;
  
    if (username && password && formatSiteCode) {
      axios.get(`http://evantage.ddns.net/evantage_api/authenticate_login.php?site_cd=${formatSiteCode}&login_id=${username}&password=${password}`)
        .then((response) => {
          console.log('xxx2', response);
          if (response.data.status === "SUCCESS") {
            localStorage.setItem('isAuthenticated', true);
  
            // setAuthenticated(true); 
  
            navigate('/admin');
          } else {
            alert('Authentication failed');
          }
        })
        .catch((error) => {
          console.error('Authentication error:', error);
          alert('Error during authentication');
        });
    } else {
      alert('Please provide username, password, and site code');
    }
  };
  

  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bg="#f0f4f8"
      >
        <Box width="400px" mx="auto" p="6" borderRadius="md" boxShadow="md" bg="white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Image src={logo} width="150px" height="50px" mt="5px" mb="20px" ml="100px" alt="Evantage Logo" />

            <FormControl isInvalid={errors.username}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                {...register('username', { required: 'Username is required' })}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password} mt="4">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register('password', { required: 'Password is required' })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.siteCode} mt="4">
              <FormLabel htmlFor="siteCode">Select Site Code</FormLabel>
              <Select
                id="siteCode"
                placeholder="Select site code"
                {...register('siteCode')}
                value={siteOptions.selectedSiteCode}
                onChange={(e) => setSiteOptions({ ...siteOptions, selectedSiteCode: e.target.value })}
              >
                {siteOptions.selectedSiteCode ? (
                  <option value={siteOptions.selectedSiteCode}>
                    {siteOptions.selectedSiteCode}</option>
                ) : (
                  siteOptions.options.map((siteCode, index) => (
                    <option key={index} value={siteCode.site_cd}>
                      {siteCode.site_cd}
                    </option>
                  ))
                )}
              </Select>
              <FormErrorMessage>{errors.siteCode && errors.siteCode.message}</FormErrorMessage>
            </FormControl>

            <Button
              mt="4"
              width="full"
              colorScheme="purple"
              type="submit"
            >
              Log in
            </Button>
          </form>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
