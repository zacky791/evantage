import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const AboutUs = () => {
    return (
        <Box maxWidth="800px">
            <Text fontSize="lg" fontWeight="bold" mb="4">About Us</Text>
            <Text fontSize="sm" mb="2">
                Evantage Solutions Sdn Bhd (Evantage), a software development company in Malaysia forms by group of management & consultants who work on the International market and abroad for many years.
            </Text>
            <Text fontSize="sm" mb="2">
                After years of working for in Maintenance Management Solutions Company & ERP Solutions Company, they decided to create a dynamic solutions company that is always ready to find solutions specially in Computerized Maintenance Management System (CMMS), Enterprise Asset Management (EAM) & Facility Management System (FMS) to its customer.
            </Text>
            <Text fontSize="sm" mb="2">
                Evantage gives clients the power to improve capital asset management in ways that increase reliability, enhance predictive maintenance, ensure regulatory compliance, reduce energy usage and support sustainability initiatives.
            </Text>
            <Text fontSize="lg" fontWeight="bold" mt="6" mb="2">Our Product & Services</Text>
            <Text fontSize="sm" mb="2">
                Evantage Computerised Maintenance Management Software (CMMS) or Enterprise Asset Management (EAM) is a comprehensive software/system that enables large, medium to small companies to proactively manage their assets and maintenance related operations. Evantage CMMS maximizes their return of the assets (ROA) by improving the efficiency and effective of their enterprise asset productivity, reduce costs and build organizational competitiveness.
            </Text>
            <Text fontSize="lg" fontWeight="bold" mt="4">Software Products</Text>
            <ul style={{ fontSize: 'small' }}>
                <li>Computerized Maintenance Management System (CMMS)</li>
                <li>Enterprise Asset Management System (EAM)</li>
                <li>Computerized Facility Management System (CFMS)</li>
                <li>Help-desk System</li>
                <li>Mobile Application</li>
                <li>Off-the-Shelf System Development</li>
                <li>Seamless Remote Desktop (RDS) Application</li>
            </ul>
            <Text fontSize="lg" fontWeight="bold" mt="4">Services</Text>
            <ul style={{ fontSize: 'small' }}>
                <li>Consultancy Service</li>
                <li>Turn Key Software Development</li>
                <li>Integration Services</li>
            </ul>
        </Box>
    );
};

export default AboutUs;
