// src/components/TechnologyShowcase.tsx
import React, { ElementType } from "react";
import { Box, Container, Heading, Stack, Text, Icon } from "@chakra-ui/react";
import { FaLock, FaRobot, FaCogs } from "react-icons/fa";

const iconProps = {
  boxSize: 12,
  color: "yellow.400",
  mb: 4,
};

const TechnologyShowcase: React.FC = () => (
  <Box as="section" bg="gray.900" color="yellow.400" py={16}>
    <Container maxW="5xl">
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Why Choose Eagle Defense Systems?
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={10} pt={8} justify="center">
        <Stack align="center" textAlign="center" maxW="300px">
          <Icon as={FaLock as ElementType} {...iconProps} />
          <Text fontWeight="semibold">Security-First Infrastructure</Text>
          <Text fontSize="sm" color="yellow.100">
            Architected from day one to meet CMMC, NIST 800-53, and FedRAMP controls—no bolt-on fixes required.
          </Text>
        </Stack>
        <Stack align="center" textAlign="center" maxW="300px">
          <Icon as={FaRobot as ElementType} {...iconProps} />
          <Text fontWeight="semibold">AI-Augmented Compliance</Text>
          <Text fontSize="sm" color="yellow.100">
            Our internal platforms use AI to detect misconfigurations, map control gaps, and accelerate audit prep.
          </Text>
        </Stack>
        <Stack align="center" textAlign="center" maxW="300px">
          <Icon as={FaCogs as ElementType} {...iconProps} />
          <Text fontWeight="semibold">Built to Scale with Startups & Agencies</Text>
          <Text fontSize="sm" color="yellow.100">
            Whether it's a GovCon startup or a federal contract, we deliver hardened systems that are ready to grow.
          </Text>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default TechnologyShowcase;
