// src/components/ExploreProjectsCTA.tsx
import React from 'react';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

const ExploreProjectsCTA = () => {
  return (
    <Box bg="yellow.50" py={16} px={6} textAlign="center">
      <Stack spacing={6} maxW="4xl" mx="auto">
        <Heading as="h3" size="lg">
          Explore Our Flagship Projects
        </Heading>
        <Text fontSize="lg" color="gray.700">
          From AI-powered compliance automation to Zero Trust infrastructure, our innovations support scalable and audit-ready builds tailored for GovCon clients.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
          <Button
            as={RouterLink}
            to="/projects"
            colorScheme="yellow"
            size="lg"
            mt={6}
            >
            View Our Tech Portfolio
            </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExploreProjectsCTA;
