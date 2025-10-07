// src/pages/Projects.tsx
import React, { ElementType } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Link,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { FaCogs, FaChartLine, FaGavel, FaRocket, FaShieldAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Project {
  title: string;
  description: string;
  icon: IconType;
  github?: string;
  comingSoon?: boolean;
  status?: string;
}

const projects: Project[] = [
  {
    title: "SwiftEagle AI",
    description:
      "A UEBA-based behavioral analytics engine designed to detect insider threats, automate risk scoring, and proactively defend against advanced threats.",
    icon: FaChartLine,
    status: "Active Development",
  },
  {
    title: "LexSentinel AI",
    description:
      "A legal document analysis tool leveraging AI to extract, summarize, and classify sensitive legal content for compliance and risk management.",
    icon: FaGavel,
    status: "Active Development",
  },
  {
    title: "COAP (Compliance Operations Automation Platform)",
    description:
      "Unified platform for continuous compliance monitoring, evidence automation, and audit-ready reporting across CMMC, NIST, and FedRAMP frameworks.",
    icon: FaCogs,
    comingSoon: true,
  },
  {
    title: "GreenCore AI",
    description:
      "AI-powered sustainability and environmental compliance platform for federal contractors meeting executive order requirements and ESG mandates.",
    icon: FaRocket,
    comingSoon: true,
  },
  {
    title: "Quantum Gate",
    description:
      "Post-quantum cryptography readiness platform preparing organizations for quantum-resistant security standards and migration planning.",
    icon: FaShieldAlt,
    comingSoon: true,
  },
];

const Projects: React.FC = () => (
  <Box as="section" bg="gray.900" color="yellow.400" py={16} minH="100vh">
    <Container maxW="6xl">
      {/* Main Heading */}
      <Heading as="h1" size="2xl" mb={4} textAlign="center">
        Technology & Innovation
      </Heading>
      <Text fontSize="lg" color="yellow.200" textAlign="center" mb={12}>
        Powered by EDS TECH, Inc.
      </Text>

      {/* EDS TECH Introduction */}
      <Box
        bg="gray.800"
        p={{ base: 6, md: 10 }}
        borderRadius="xl"
        boxShadow="2xl"
        mb={12}
        borderWidth="1px"
        borderColor="yellow.600"
      >
        <VStack spacing={4} align="start">
          <Heading as="h2" size="lg" color="yellow.400">
            About EDS TECH, Inc.
          </Heading>
          <Text color="gray.100" fontSize={{ base: "md", md: "lg" }}>
            <strong>EDS TECH, Inc.</strong> is the technology and innovation subsidiary of{" "}
            <strong>Eagle Defense Systems, LLC</strong> (51% equity owner), formed to commercialize,
            invest in, and develop advanced AI, cybersecurity, and compliance automation solutions
            for the Defense Industrial Base (DIB) and broader government contracting ecosystem.
          </Text>
          <Text color="gray.100" fontSize={{ base: "md", md: "lg" }}>
            As the intellectual property (IP) and venture development hub for the EDS enterprise,
            EDS TECH designs, funds, and scales proprietary software platforms that strengthen
            national security supply-chain resilience, automate compliance, and enable continuous
            monitoring across critical infrastructure sectors.
          </Text>
          <Text color="gray.100" fontSize={{ base: "md", md: "lg" }}>
            EDS TECH also functions as the strategic investment and private equity vehicle for the
            EDS group, leveraging specialized SPVs, syndicates, and venture partnerships to acquire,
            incubate, or co-develop emerging GovCon and AI-driven startups aligned with federal
            security, risk, and regulatory modernization goals.
          </Text>
        </VStack>
      </Box>

      <Divider borderColor="yellow.600" mb={12} />

      {/* Projects Section */}
      <Heading as="h2" size="xl" mb={8} textAlign="center" color="yellow.400">
        Our Technology Portfolio
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, idx) => {
          const { title, description, icon, github, comingSoon, status } = project;

          if (comingSoon) {
            return (
              <Box
                key={idx}
                bg="gray.800"
                p={6}
                borderRadius="lg"
                boxShadow="xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                minH="320px"
                borderWidth="1px"
                borderColor="gray.700"
                position="relative"
              >
                <Icon as={icon as ElementType} boxSize={10} color="yellow.400" mb={4} />
                <Heading as="h3" size="md" mb={3} color="yellow.300" textAlign="center">
                  {title}
                </Heading>
                <Text color="gray.100" fontSize="sm" textAlign="center" mb={4}>
                  {description}
                </Text>
                <Text fontSize="sm" color="yellow.200" mt="auto" opacity={0.95} fontWeight="bold">
                  Coming Soon
                </Text>
              </Box>
            );
          }

          return (
            <Link
              key={idx}
              href={github}
              isExternal
              _hover={{
                textDecoration: "none",
                transform: "scale(1.03)",
                boxShadow: "2xl",
              }}
              borderRadius="lg"
              transition="all 0.18s cubic-bezier(.4,0,.2,1)"
              display="block"
              role="group"
              aria-label={`View ${title} on GitHub`}
            >
              <Box
                bg="gray.800"
                p={6}
                borderRadius="lg"
                boxShadow="xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                minH="320px"
                borderWidth="1px"
                borderColor="gray.700"
                transition="all 0.18s cubic-bezier(.4,0,.2,1)"
                _groupHover={{ bg: "gray.700", borderColor: "yellow.500" }}
              >
                <Icon as={icon as ElementType} boxSize={10} color="yellow.400" mb={4} />
                <Heading as="h3" size="md" mb={3} color="yellow.300" textAlign="center">
                  {title}
                </Heading>
                <Text color="gray.100" fontSize="sm" textAlign="center" mb={4}>
                  {description}
                </Text>
                {status && (
                  <Text fontSize="xs" color="yellow.500" mb={2} fontWeight="semibold">
                    {status}
                  </Text>
                )}
                <Text fontSize="sm" color="yellow.200" mt="auto" opacity={0.85}>
                  View on GitHub &rarr;
                </Text>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>

      <Divider borderColor="yellow.600" my={12} />

      {/* Call to Action */}
      <Stack spacing={4} align="center" textAlign="center">
        <Heading as="h3" size="lg" color="yellow.400">
          Innovation for National Security
        </Heading>
        <Text fontSize="lg" color="yellow.200" maxW="3xl">
          EDS TECH bridges mission-critical innovation with responsible capital — uniting
          cybersecurity, artificial intelligence, and governance to power the next generation
          of secure, compliant, and resilient federal and commercial technology ecosystems.
        </Text>
        <Text fontSize="md" color="gray.300" mt={4}>
          Want a technical walkthrough or partnership discussion?{" "}
          <Link href="/contact" color="yellow.400" textDecoration="underline">
            Contact us
          </Link>{" "}
          to schedule a demo.
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default Projects;