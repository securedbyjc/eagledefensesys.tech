// src/pages/Projects.tsx
import React, { ComponentType } from "react";
import { Box, Container, Heading, SimpleGrid, Stack, Text, Icon, Link } from "@chakra-ui/react";
import { FaCogs, FaChartLine, FaGavel } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  icon: ComponentType<any>;
  github?: string;
  comingSoon?: boolean;
  accessLink?: string;
};

const projects: Project[] = [
  {
    title: "SwiftEagle-AI",
    description: "UEBA-based behavioral analytics and compliance insights.",
    icon: FaChartLine as ComponentType<any>,
    github: "https://github.com/securedbyjc/SwiftEagle-AI",
    accessLink: "/projects/swifteagle-access",
  },
  {
    title: "LexSentinel AI",
    description: "Your legal AI assistant for compliance automation.",
    icon: FaGavel as ComponentType<any>,
    github: "https://github.com/securedbyjc/lexsentinel-ai",
    accessLink: "/projects/lexsentinel-access",
  },
  {
    title: "Compliance Monitoring Dashboard",
    description:
      "A unified dashboard that tracks real-time GRC metrics, alerts on policy drift, and provides audit-ready reporting for CMMC, NIST, and FedRAMP.",
    icon: FaCogs as ComponentType<any>,
    comingSoon: true,
  },
];

const Projects: React.FC = () => (
  <Box as="section" bg="gray.900" color="yellow.400" py={16} minH="100vh">
    <Container maxW="5xl">
      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        Our Technology Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
        {projects.map(({ title, description, icon, github, comingSoon, accessLink }, idx) =>
          comingSoon ? (
            <Box
              key={idx}
              bg="gray.700"
              p={8}
              borderRadius="lg"
              boxShadow="xl"
              display="flex"
              flexDirection="column"
              alignItems="center"
              minH="340px"
              height="100%"
              opacity={1}
              cursor="not-allowed"
              position="relative"
            >
              <Icon as={icon} boxSize={12} color="yellow.400" mb={4} />
              <Heading as="h3" size="md" mb={3} mt={2} color="yellow.300" textAlign="center">
                {title}
              </Heading>
              <Text color="yellow.100" fontSize="md" textAlign="center" mb={2}>
                {description}
              </Text>
              {title === "LexSentinel AI" && (
                <Link
                  href="https://forms.gle/FiromRZ4MPR2bBFUA"
                  isExternal
                  color="red.700"
                  fontWeight="semibold"
                  textDecoration="underline"
                  mt={2}
                  display="block"
                >
                  Request Access
                </Link>
              )}
              <Text fontSize="sm" color="yellow.200" mt="auto" opacity={0.85}>
                View on GitHub &rarr;
              </Text>
              <Text fontSize="sm" color="yellow.200" mt="auto" opacity={0.95} fontWeight="bold">
                Coming Soon
              </Text>
            </Box>
          ) : (
            <Link
              key={idx}
              href={github}
              isExternal
              _hover={{
                textDecoration: "none",
                transform: "scale(1.04)",
                boxShadow: "2xl",
                bg: "yellow.900Alpha",
              }}
              borderRadius="lg"
              transition="all 0.18s cubic-bezier(.4,0,.2,1)"
              display="block"
              role="group"
              aria-label={`View ${title} on GitHub`}
            >
              <Box
                bg="gray.800"
                borderRadius="lg"
                boxShadow="xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                minH="340px"
                height="100%"
                transition="all 0.18s cubic-bezier(.4,0,.2,1)"
                _groupHover={{ bg: "gray.700" }}
              >
                <Icon as={icon} boxSize={12} color="yellow.400" mb={4} />
                <Heading as="h3" size="md" mb={3} mt={2} color="yellow.300" textAlign="center">
                  {title}
                </Heading>
                <Text color="yellow.100" fontSize="md" textAlign="center" mb={2}>
                  {description}
                </Text>
                {title === "LexSentinel AI" && (
                  <Link
                    href="/projects/lexsentinel-access"
                    className="text-red-700 underline font-semibold"
                    style={{ display: "block", marginTop: "0.5rem" }}
                  >
                    Request Access
                  </Link>
                )}
                <Text fontSize="sm" color="yellow.200" mt="auto" opacity={0.85}>
                  View on GitHub &rarr;
                </Text>
              </Box>
            </Link>
          )
        )}
      </SimpleGrid>
      <Stack mt={12} align="center">
        <Text fontSize="lg" color="yellow.200">
          Want a technical walkthrough? Schedule a demo and see how EDS delivers.
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default Projects;
