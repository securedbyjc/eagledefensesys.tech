// src/components/HomepageSections.tsx
import React, { ElementType } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaCalendarCheck, FaShieldAlt, FaTrophy } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import type { IconType } from "react-icons";

const CapabilityItem = ({ children }: { children: React.ReactNode }) => (
  <ListItem>
    <ListIcon as={CheckCircleIcon} color="yellow.500" />
    {children}
  </ListItem>
);

type Step = {
  title: string;
  desc: string;
  icon: IconType;
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

const HomepageSections: React.FC = () => {
  const missionBg = useColorModeValue("yellow.50", "gray.800");
  const planBg = useColorModeValue("white", "gray.900");
  const aboutBg = useColorModeValue("gray.50", "gray.800");
  const capabilitiesBg = useColorModeValue("white", "gray.900");
  const contactBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const badgeBg = useColorModeValue("yellow.100", "gray.700");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const heading = useColorModeValue("gray.900", "gray.100");

  return (
    <Box as="main">
      {/* Mission Section - Win more federal contracts */}
      <Box as="section" bg={missionBg} py={{ base: 10, md: 16 }}>
        <Container maxW="6xl">
          <HStack align="start" spacing={{ base: 6, md: 10 }} flexWrap="wrap">
            <VStack align="start" spacing={5} flex="1" minW="280px">
              <Heading as="h2" size="2xl" color={textColor} lineHeight="1.1">
                Win more federal contracts —
                <br /> without compliance headaches
              </Heading>
              <Text fontSize="lg" color={textColor}>
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

      {/* Plan Section - Your 3-Step Plan */}
      <Box as="section" id="plan" bg={planBg} py={{ base: 12, md: 16 }}>
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
                <Icon as={s.icon as unknown as ElementType} boxSize={10} color="yellow.500" aria-hidden />
                <Heading as="h3" size="md" color={heading}>
                  {s.title}
                </Heading>
                <Text color={textColor}>{s.desc}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" id="about" bg={aboutBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={6} align="start" maxW="4xl">
            <Heading size="lg" color="red.700">About Us</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
              Eagle Defense Systems LLC is a veteran-owned cybersecurity consultancy focused on helping
              federal and commercial clients meet complex security and compliance objectives. We
              specialize in translating cybersecurity policy into actionable operations—bridging the gap
              between leadership vision and technical implementation.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box as="section" id="capabilities" bg={capabilitiesBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={6} align="start" maxW="4xl">
            <Heading size="lg" color="red.700">Our Capabilities</Heading>
            <List spacing={3} color={textColor}>
              <CapabilityItem>Governance, Risk &amp; Compliance (GRC)</CapabilityItem>
              <CapabilityItem>Cybersecurity Auditing &amp; Controls Assessment</CapabilityItem>
              <CapabilityItem>CMMC Pre-Assessment &amp; Implementation</CapabilityItem>
              <CapabilityItem>Cloud Security Architecture (Azure/GCP)</CapabilityItem>
              <CapabilityItem>Policy &amp; Procedure Development</CapabilityItem>
              <CapabilityItem>Threat Modeling &amp; Zero Trust Strategy</CapabilityItem>
            </List>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" bg={contactBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={6} align="start" maxW="4xl">
            <Heading size="lg" color="red.700">Contact Us</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
              Ready to connect? Reach out to schedule a demo or speak with a cybersecurity strategist.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
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