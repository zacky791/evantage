import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Home = () => {
    return (
        <Box maxWidth="800px">
            <Text fontSize="lg" fontWeight="bold" mb="4">What is a Computerized Maintenance Management System (CMMS/EAM)?</Text>
            <Text fontSize="sm" mb="2">
                CMMS stands for Computerized Maintenance Management System and is sometimes referred to as Enterprise Asset Management (EAM). It is computer software designed to simplify maintenance management and optimize the maintenance process.
            </Text>
            <Text fontSize="sm" mb="2">
                CMMS or EAM is used to easily keep a centralized record of all assets such as space, equipment, fleet and other types of asset that maintenance teams are responsible for, as well as schedule and track maintenance activities and keep a detailed record of the work they’ve performed.
            </Text>
            <Text fontSize="sm" mb="2">
                The evolution of the CMMS or EAM to a cloud-based, multi-site solution has made it easier than ever for any maintenance team to harness the power of digital transformation.
            </Text>

            <Text fontSize="lg" fontWeight="bold" mt="6" mb="2">Do you Know?</Text>
            <Text fontSize="sm" mb="2">
                <strong>Measure maintenance performance:</strong> A CMMS makes it easy to do preventive maintenance, which means there are fewer surprise breakdowns and work outages. Allowing you to make better business decisions.
            </Text>
            <Text fontSize="sm" mb="2">
                <strong>Better accountability:</strong> Work order tracking makes it possible to quickly see if a technician did their work on time and get alerted when a task is complete.
            </Text>
            <Text fontSize="sm" mb="2">
                <strong>Less overtime:</strong> Better scheduling means that your team isn’t sitting idle or working overtime, which means work can be distributed evenly.
            </Text>
            <Text fontSize="sm" mb="2">
                <strong>Information capture:</strong> Technicians can record problems and solutions, so this information is captured for others to use.
            </Text>
            <Text fontSize="sm" mb="2">
                <strong>Savings on purchases:</strong> Inventory planning features give you the time to shop around for spare parts pricing, instead of having to buy in a hurry.
            </Text>
            <Text fontSize="sm" mb="2">
                <strong>Certification and analysis:</strong> A full record of assets and performance helps managers analyze energy usage and plan maintenance spend.
            </Text>
        </Box>
    );
};

export default Home;
