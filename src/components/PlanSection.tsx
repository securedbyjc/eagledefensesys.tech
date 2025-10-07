// src/components/PlanSection.tsx
import React, { ElementType } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCalendarCheck, FaShieldAlt, FaTrophy } from "react-icons/fa";

type Step = {
  title: string;
  desc: string;
  icon: ElementType; // <-- key fix
};

const steps: Step[] = [
  {
    title: "1. Schedule Your Readiness Call",
    desc:
      "We map your current posture, scope data flows, and identify gaps against CMMC/DFARS/NIST 800-171.",
    icon: FaCalendarCheck,
  },
  {
    title: "2. Deploy Your Security Plan",
    desc:
      "We harden controls, automate evidence, and align policies and systems to your target level of compliance.",
    icon: FaShieldAlt,
  },
  {
    title: "3. Win More Contracts",
    desc:
      "Stay audit-ready with continuous monitoring and clear artifacts that primes and auditors trust.",
    icon: FaTrophy,
  },
];

const PlanSection: React.FC = () => {
  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const headingColor = useColorModeValue("red.700", "yellow.300");
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box as="section" bg={bg} py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <VStack spacing={6} align="start">
          <Heading size="lg" color={headingColor}>
            Your 3-Step Plan
          </Heading>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            w="full"
          >
            {steps.map(({ title, desc, icon }, i) => (
              <Box
                key={i}
                flex="1"
                bg={cardBg}
                p={6}
                borderRadius="lg"
                boxShadow="md"
              >
                <Icon as={icon} boxSize={8} color="yellow.500" mb={3} />
                <Heading as="h3" size="md" mb={2} color={headingColor}>
                  {title}
                </Heading>
                <Text color={textColor}>{desc}</Text>
              </Box>
            ))}
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default PlanSection;
