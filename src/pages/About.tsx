// src/pages/About.tsx
import React, { ElementType } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

type Feature = {
  title: string;
  description: string;
  icon: ElementType; // <- Chakra Icon expects ElementType
};

const features: Feature[] = [
  {
    title: "Mission-Grade Security",
    description:
      "We design and operate systems aligned to CMMC, NIST 800-53, and FedRAMP baselines from day one.",
    icon: FaShieldAlt,
  },
  {
    title: "Built for Velocity",
    description:
      "Automation-first delivery with CI/CD, policy as code, and hardened reference architectures.",
    icon: FaRocket,
  },
  {
    title: "Human-Centered",
    description:
      "Clear communication, measurable outcomes, and enablement for your teams and stakeholders.",
    icon: FaUsers,
  },
];

const About: React.FC = () => (
  <Box as="section" bg="gray.900" color="yellow.400" py={16} minH="100vh">
    <Container maxW="5xl">
      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        About Eagle Defense Systems
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {features.map((feature, idx) => (
          <Stack
            key={idx}
            align="center"
            textAlign="center"
            bg="gray.800"
            p={8}
            borderRadius="lg"
            boxShadow="xl"
          >
            <Icon as={feature.icon} boxSize={12} color="yellow.400" mb={4} />
            <Heading as="h3" size="md" color="yellow.300">
              {feature.title}
            </Heading>
            <Text color="yellow.100">{feature.description}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default About;
