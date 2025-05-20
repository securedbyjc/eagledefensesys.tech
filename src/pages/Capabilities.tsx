// src/pages/Capabilities.tsx

import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Divider,
  SimpleGrid,
  List,
  ListItem,
  Button,
  useColorModeValue,
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

const naics = [
  "541519 – Other Computer Related Services",
  "541512 – Computer Systems Design Services",
  "541511 – Custom Computer Programming Services",
  "541690 – Other Scientific & Technical Consulting",
];

const certifications = [
  "CompTIA Security+",
  "Akylade Certified Cyber Resilience Fundamentals (A/CCRF)",
  "Certified Scrum Master (CSM)",
  "Frontend Web Development Certification – The Tech Academy",
];

const Capabilities = () => (
  <Box bg={useColorModeValue("gray.50", "gray.800")} minH="100vh" py={{ base: 8, md: 16 }}>
    <Container maxW="5xl">
      <Stack spacing={10} align="center">
        <Heading as="h1" size="2xl" color="yellow.500" fontWeight="bold" textAlign="center">
          Eagle Defense Systems LLC
        </Heading>
        <Text fontSize="lg" color="gray.700" textAlign="center">
          Veteran-Owned | Cybersecurity, Compliance, & Cloud Security Solutions
        </Text>
        <Divider />

    
        {/* Download/View Capability Statement Buttons */}
        <Stack align="center" mt={0} mb={8}>
        <Button
            colorScheme="yellow"
            as="a"
            href="/assets/EDS-Capabilities-Statement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            mb={2}
        >
            View Capability Statement (PDF)
        </Button>
        <Button
            colorScheme="yellow"
            variant="outline"
            as="a"
            href="/assets/EDS-Capabilities-Statement.pdf"
            download
            size="md"
        >
            Download PDF
        </Button>
        </Stack>


        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
          {/* Services */}
          <Box bg="white" borderRadius="xl" boxShadow="md" p={6}>
            <Heading as="h2" size="lg" color="yellow.600" mb={2}>
              Our Services
            </Heading>
            <List spacing={2}>
              {services.map((service, i) => (
                <ListItem key={i}>• {service}</ListItem>
              ))}
            </List>
          </Box>

          {/* Core Competencies */}
          <Box bg="white" borderRadius="xl" boxShadow="md" p={6}>
            <Heading as="h2" size="lg" color="yellow.600" mb={2}>
              Core Competencies
            </Heading>
            <List spacing={2}>
              {competencies.map((comp, i) => (
                <ListItem key={i}>• {comp}</ListItem>
              ))}
            </List>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
          {/* Differentiators */}
          <Box bg="white" borderRadius="xl" boxShadow="md" p={6}>
            <Heading as="h2" size="lg" color="yellow.600" mb={2}>
              Differentiators
            </Heading>
            <List spacing={2}>
              {differentiators.map((item, i) => (
                <ListItem key={i}>• {item}</ListItem>
              ))}
            </List>
          </Box>

          {/* NAICS Codes */}
          <Box bg="white" borderRadius="xl" boxShadow="md" p={6}>
            <Heading as="h2" size="lg" color="yellow.600" mb={2}>
              NAICS Codes
            </Heading>
            <List spacing={2}>
              {naics.map((code, i) => (
                <ListItem key={i}>• {code}</ListItem>
              ))}
            </List>
          </Box>
        </SimpleGrid>

        {/* Certifications & Licenses */}
        <Box bg="white" borderRadius="xl" boxShadow="md" p={6} w="100%" maxW="3xl">
          <Heading as="h2" size="lg" color="yellow.600" mb={2}>
            Certifications & Licenses
          </Heading>
          <List spacing={2}>
            {certifications.map((cert, i) => (
              <ListItem key={i}>• {cert}</ListItem>
            ))}
          </List>
        </Box>

        {/* Past Performance */}
        <Box textAlign="center" w="100%">
          <Heading as="h2" size="md" color="yellow.600" mb={2}>
            Past Performance
          </Heading>
          <Text color="gray.700">Available Upon Request</Text>
        </Box>
      </Stack>
    </Container>
  </Box>
);


export default Capabilities;
