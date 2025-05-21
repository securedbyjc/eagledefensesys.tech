// src/components/ExploreProjectsCTA.tsx
import React from 'react';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";


const ExploreProjectsCTA = () => {
  // Use static colors for now:
  const bg = "yellow.50";
  const text = "gray.700";

  return (
    <Box bg={bg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }} textAlign="center">
      <Stack spacing={6} maxW="4xl" mx="auto">
        <Heading as="h3" size="lg" color="red.700">
          Explore Our Flagship Projects
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color={text}>
          From AI-powered compliance automation to Zero Trust infrastructure, our innovations support scalable and audit-ready builds tailored for GovCon clients.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
          <Button
            as={RouterLink}
            to="/projects"
            colorScheme="yellow"
            size="lg"
            fontWeight="bold"
            mt={6}
            px={8}
          >
            View Our Tech Portfolio
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExploreProjectsCTA;
