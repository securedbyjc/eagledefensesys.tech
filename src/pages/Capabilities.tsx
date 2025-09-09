// /#Capabilities.tsx/
import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Divider,
  Link,
} from "@chakra-ui/react";

const services = [
  "Cybersecurity Program Design & Implementation",
  "CMMC, NIST, and FedRAMP Pre-Assessment & Gap Analysis",
  "Cloud Security Architecture (GCP, AWS, Azure)",
  "Third-Party & Supply Chain Risk Assessments",
  "Policy, Procedures, and SSP/POA&M Development",
  "Project Management (PMI/PMP-aligned)",
  "Compliance Automation (AI-powered monitoring & reporting)",
  "Incident Response Planning & Tabletop Exercises",
  "Security Awareness Training",
  "Technical Bid/Proposal & Compliance Support",
  "Access to CMMC Certified Professionals (CCP, CCA)",
];

const competencies = [
  "Governance, Risk & Compliance (GRC)",
  "Zero Trust Security Frameworks",
  "Regulatory Control Mapping (NIST, CMMC, ISO 27001)",
  "Audit Preparation & Readiness",
  "Automated Threat Detection & Analytics",
  "Vendor Due Diligence",
  "Cyber Resilience & Recovery",
];

const differentiators = [
  "Veteran-led, DoD and federal expertise",
  "AI-powered internal tools for compliance and threat management",
  "Network of CMMC Certified Professionals and Assessors (CCP, CCA)",
  "Agile, cloud-native approach for startups and agencies",
  "Direct support for bid/proposal cycles",
];

// ↳ Updated to NAICS 2022 titles commonly used for cyber/GRC consultancies
const naics = [
  "541511 – Custom Computer Programming Services",
  "541512 – Computer Systems Design Services",
  "541513 – Computer Facilities Management Services",
  "541519 – Other Computer Related Services",
  "541611 – Administrative/General Management Consulting Services",
  "541618 – Other Management Consulting Services",
  "541690 – Other Scientific & Technical Consulting Services",
  "611420 – Computer Training",
];

const certifications = [
  "CompTIA Security+",
  "Akylade Certified Cyber Resilience Fundamentals (A/CCRF)",
  "Certified Scrum Master (CSM)",
  "Frontend Web Development Certification – The Tech Academy",
];

const Capabilities = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardColor = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("yellow.600", "yellow.400");
  const textColor = useColorModeValue("gray.700", "gray.200");

  const renderList = (items: string[]) => (
    <List spacing={2}>
      {items.map((item, i) => (
        <ListItem key={i}>• {item}</ListItem>
      ))}
    </List>
  );

  return (
    <Box bg={bgColor} minH="100vh" py={{ base: 8, md: 16 }}>
      <Container maxW="6xl">
        <Stack spacing={10} align="center">
          <Stack textAlign="center" spacing={1}>
            <Heading as="h1" size="2xl" color={useColorModeValue("yellow.600", "yellow.400")} fontWeight="bold">
              Eagle Defense Systems LLC
            </Heading>
            <Text fontSize="lg" color={textColor}>
              Veteran-Owned | Cybersecurity, Compliance, & Cloud Security Solutions
            </Text>
          </Stack>

          <Divider />

          {/* Capability Statement CTA */}
          <Stack align="center" spacing={3}>
            <Button
              colorScheme="yellow"
              as="a"
              href="/assets/v1_EDS_Cap_Statement_09082025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              View Capability Statement (PDF)
            </Button>
            <Button
              colorScheme="yellow"
              variant="outline"
              as="a"
              href="/assets/v1_EDS_Cap_Statement_09082025.pdf"
              download
              size="md"
            >
              Download PDF
            </Button>
          </Stack>

          {/* Company Snapshot (new) */}
          <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6} w="100%">
            <Heading size="lg" color={headingColor} mb={3}>
              Company Snapshot
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Box>
                <Text fontWeight="semibold">Legal Name</Text>
                <Text color={textColor}>Eagle Defense Systems LLC</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold">Socioeconomic Status</Text>
                <Text color={textColor}>Veteran-Owned Small Business (VOSB)</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold">Primary Location</Text>
                <Text color={textColor}>Houston, Texas</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>
                Our Services
              </Heading>
              {renderList(services)}
            </Box>

            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>
                Core Competencies
              </Heading>
              {renderList(competencies)}
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>
                Differentiators
              </Heading>
              {renderList(differentiators)}
            </Box>

            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>
                NAICS Codes
              </Heading>
              {renderList(naics)}
              <Text mt={3} fontSize="sm">
                Need help selecting a primary?{" "}
                <Link href="https://www.census.gov/naics/" isExternal color="yellow.500" textDecoration="underline">
                  NAICS reference
                </Link>
              </Text>
            </Box>
          </SimpleGrid>

          <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6} w="100%" maxW="3xl">
            <Heading size="lg" color={headingColor} mb={2}>
              Certifications & Licenses
            </Heading>
            {renderList(certifications)}
          </Box>

          {/* Set-Asides & Contracting (new, optional) */}
          <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6} w="100%">
            <Heading size="lg" color={headingColor} mb={2}>
              Set-Asides & Contracting
            </Heading>
            {renderList([
              "Small Business – Eligible for small business set-asides",
              "Veteran-Owned (VOSB) opportunities",
              "Open to Prime/Subcontractor teaming, IDIQs, and BPA support",
            ])}
          </Box>

          <Box textAlign="center" w="100%">
            <Heading as="h2" size="md" color={headingColor} mb={2}>
              Past Performance
            </Heading>
            <Text color={textColor}>Available Upon Request</Text>
          </Box>

          {/* Contact CTA (new) */}
          <Stack align="center" spacing={3}>
            <Button as="a" href="/govcon-intake" colorScheme="yellow" size="lg">
              Schedule a Technical Demo
            </Button>
            <Text fontSize="sm" color={textColor}>
              Prefer email? <Link href="mailto:secure.eds@protonmail.com" color="yellow.500">secure.eds@protonmail.com</Link>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Capabilities;
