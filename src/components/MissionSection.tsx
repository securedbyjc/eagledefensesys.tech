// src/components/MissionSection.tsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MissionSection: React.FC = () => {
  const bg = useColorModeValue("yellow.50", "gray.800");
  const badgeBg = useColorModeValue("yellow.100", "gray.700");
  const text = useColorModeValue("gray.800", "gray.100");

  return (
    <Box as="section" bg={bg} py={{ base: 10, md: 16 }}>
      <Container maxW="6xl">
        <HStack align="start" spacing={{ base: 6, md: 10 }} flexWrap="wrap">
          <VStack align="start" spacing={5} flex="1" minW="280px">
            <Heading as="h2" size="2xl" color={text} lineHeight="1.1">
              Win more federal contracts —
              <br /> without compliance headaches
            </Heading>
            <Text fontSize="lg" color={text}>
              Small and mid-sized contractors in the Defense Industrial Base face complex
              cybersecurity and supply-chain requirements (CMMC, DFARS, NIST 800-171).
              EDS aligns your systems, automates evidence, and keeps you audit-ready —
              so you can bid, win, and deliver with confidence.
            </Text>
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="yellow"
                size="lg"
                fontWeight="bold"
              >
                Schedule a Demo
              </Button>
              <Button
                as={RouterLink}
                to="/projects"
                variant="outline"
                size="lg"
              >
                See How It Works
              </Button>
            </HStack>
          </VStack>

          <Box
            flex="0 0 380px"
            minH="120px"
            borderRadius="xl"
            borderWidth="1px"
            borderStyle="dashed"
            bg={badgeBg}
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={6}
            py={8}
          >
            <Text fontWeight="semibold" opacity={0.9}>
              CMMC • DFARS • NIST 800-171
            </Text>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default MissionSection;
