// src/components/HomepageSections.tsx
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const HomepageSections = () => {
  // Chakra color mode aware backgrounds (optional)
  const aboutBg = useColorModeValue("gray.50", "gray.900");
  const capabilitiesBg = useColorModeValue("white", "gray.800");
  const contactBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box as="main">
      {/* About Section */}
      <Box id="about" bg={aboutBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={4} align="start">
            <Heading size="lg" color="red.700">About Us</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              Eagle Defense Systems LLC is a veteran-owned cybersecurity consultancy focused on helping federal and commercial clients meet complex security and compliance objectives. We specialize in translating cybersecurity policy into actionable operations—bridging the gap between leadership vision and technical implementation.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box id="capabilities" bg={capabilitiesBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={4} align="start">
            <Heading size="lg" color="red.700">Our Capabilities</Heading>
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
      <Box id="contact" bg={contactBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={4} align="start">
            <Heading size="lg" color="red.700">Contact Us</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              Ready to connect? Reach out to schedule a demo or speak with a cybersecurity strategist.
            </Text>
            <Button
              colorScheme="yellow"
              variant="solid"
              size="lg"
              fontWeight="bold"
              px={8}
            >
              Schedule a Demo
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomepageSections;
