// src/components/HomepageSections.tsx
import React from 'react';
import { Box, Container, Heading, Text, VStack, List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const HomepageSections = () => {
  return (
    <Box as="main">
      {/* About Section */}
      <Box id="about" bg="gray.50" py={16} px={6}>
        <Container maxW="6xl">
          <VStack spacing={4} align="start">
            <Heading size="lg" color="black">About Us</Heading>
            <Text fontSize="md" color="gray.700">
              Eagle Defense Systems LLC is a veteran-owned cybersecurity consultancy focused on helping federal and commercial clients meet complex security and compliance objectives. We specialize in translating cybersecurity policy into actionable operations—bridging the gap between leadership vision and technical implementation.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box id="capabilities" bg="white" py={16} px={6}>
        <Container maxW="6xl">
          <VStack spacing={4} align="start">
            <Heading size="lg" color="black">Our Capabilities</Heading>
            <List spacing={3} color="gray.700">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" /> Governance, Risk & Compliance (GRC)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" /> Cybersecurity Auditing & Controls Assessment
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" /> CMMC Pre-Assessment & Implementation
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" /> Cloud Security Architecture (Azure/GCP)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" /> Policy & Procedure Development
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.500" /> Threat Modeling & Zero Trust Strategy
              </ListItem>
            </List>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg="gray.100" py={16} px={6}>
        <Container maxW="6xl">
          <VStack spacing={4} align="start">
            <Heading size="lg" color="black">Contact Us</Heading>
            <Text fontSize="md" color="gray.700">
              Ready to connect? Reach out to schedule a demo or speak with a cybersecurity strategist.
            </Text>
            <Button colorScheme="yellow" variant="solid">Schedule a Demo</Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomepageSections;
