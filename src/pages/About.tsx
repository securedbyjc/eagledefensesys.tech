import React from 'react';
import { Box, Heading, Text, Stack, Container, Divider, Flex } from '@chakra-ui/react';
import { FaShieldAlt, FaRobot, FaUserShield, FaFlag } from 'react-icons/fa';

type Feature = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: FaShieldAlt as React.ElementType,
    title: "Security-First, Always",
    desc: "We design infrastructure and workflows to meet CMMC, NIST 800-53, and FedRAMP controls from day one—no bolt-on fixes or afterthoughts."
  },
  {
    icon: FaRobot as React.ElementType,
    title: "AI-Driven Compliance",
    desc: "Our custom technology leverages advanced analytics and machine learning to accelerate compliance mapping, threat detection, and reporting."
  },
  {
    icon: FaFlag as React.ElementType,
    title: "GovCon Focus",
    desc: "We specialize in the unique requirements of government contractors, including multi-jurisdictional mandates, Zero Trust architectures, and vendor due diligence."
  },
  {
    icon: FaUserShield as React.ElementType,
    title: "Veteran Leadership",
    desc: "Our team is led by former military leaders who understand mission assurance, risk, and the demands of both public and private sectors."
  }
];

const About = () => (
  <Box bg="gray.50" minH="100vh" py={{ base: 8, md: 16 }}>
    <Container maxW="4xl">
      <Stack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center" color="yellow.600" fontWeight="bold" mb={2}>
          About Eagle Defense Systems
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.700" textAlign="center" mb={4}>
          Eagle Defense Systems LLC is a veteran-owned cybersecurity consultancy dedicated to helping federal agencies and commercial enterprises secure their digital future. Founded by seasoned professionals with decades of experience in military, compliance, and cloud security operations, our mission is to bridge the gap between regulatory mandates and real-world defense.
        </Text>
        <Divider />

        <Box bg="white" borderRadius="xl" boxShadow="lg" p={{ base: 4, md: 8 }} w="100%">
          <Heading as="h2" size="lg" color="yellow.600" mb={2}>
            Our Vision
          </Heading>
          <Text fontSize="md" color="gray.800" mb={4}>
            To be the trusted partner for organizations that demand proactive, audit-ready, and resilient cybersecurity solutions.
          </Text>
          
          <Stack spacing={6} mt={4}>
            {features.map((feature, idx) => (
              <Flex key={idx} align="start">
                {React.createElement(feature.icon, {
                    size: 32,
                    color: "#D69E2E",
                    style: { marginRight: '1rem', marginTop: '0.25rem' }
         })}

                <Box>
                  <Heading as="h3" size="md" color="gray.900" mb={1}>
                    {feature.title}
                  </Heading>
                  <Text color="gray.600">{feature.desc}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>

        <Divider />

        <Box textAlign="center">
          <Heading as="h2" size="md" color="yellow.600" mb={2}>
            Why Choose Eagle Defense Systems?
          </Heading>
          <Text fontSize="lg" color="gray.800" mb={2}>
            We don’t just prepare you for audits—we build your operations to <b>pass them by design</b>.
          </Text>
          <Text color="gray.700">
            Whether you’re a startup seeking your first federal contract or a mature enterprise defending your compliance posture, Eagle Defense Systems delivers tailored, scalable, and actionable solutions.
          </Text>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default About;

