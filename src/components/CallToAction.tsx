// src/components/CallToAction.tsx
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const CallToAction = () => {
  return (
    <Box bg="yellow.400" color="black" py={12} px={6} textAlign="center">
      <Heading mb={4}>Ready to secure your next contract?</Heading>
      <Text fontSize="lg" mb={6}>
        Let’s walk you through how Eagle Defense Systems can help.
      </Text>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
        <Button colorScheme="blackAlpha" variant="solid">Schedule a Demo</Button>
        <Button colorScheme="blackAlpha" variant="outline">Learn More</Button>
      </Stack>
    </Box>
  );
};

export default CallToAction;