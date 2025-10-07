// src/components/PlanSection.tsx
import React, { ElementType } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCalendarCheck, FaShieldAlt, FaTrophy } from "react-icons/fa";
import type { IconType } from "react-icons";

type Step = {
  title: string;
  desc: string;
  icon: IconType; // <-- store react-icons type here
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
  const text = useColorModeValue("gray.700", "gray.200");
  const heading = useColorModeValue("gray.900", "gray.100");

  return (
    <Box as="section" id="plan" bg={bg} py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <Heading
          as="h2"
          size="lg"
          textAlign="center"
          color="red.700"
          mb={{ base: 8, md: 10 }}
        >
          Your 3-Step Plan
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {steps.map((s, i) => (
            <Stack
              key={i}
              bg={cardBg}
              borderRadius="xl"
              boxShadow="md"
              p={6}
              spacing={4}
              align="flex-start"
              role="group"
            >
              {/* Cast only at the use-site */}
              <Icon as={s.icon as unknown as ElementType} boxSize={10} color="yellow.500" aria-hidden />
              <Heading as="h3" size="md" color={heading}>
                {s.title}
              </Heading>
              <Text color={text}>{s.desc}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PlanSection;
