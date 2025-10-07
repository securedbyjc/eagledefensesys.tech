//src/components/MissionSection.tsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MissionSection: React.FC = () => {
  const bg = useColorModeValue("yellow.50", "gray.900");
  const fg = useColorModeValue("gray.800", "yellow.100");
  const sub = useColorModeValue("gray.700", "yellow.200");

  return (
    <Box as="section" bg={bg} py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 12 }}
          align="center"
          justify="space-between"
        >
          <Stack spacing={4} maxW={{ md: "2xl" }}>
            <Heading size="xl" color={fg} lineHeight={1.2}>
              Win more federal contracts — without compliance headaches
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={sub}>
              Small and mid-sized contractors in the Defense Industrial Base face
              complex cybersecurity and supply-chain requirements (CMMC, DFARS,
              NIST 800-171). EDS aligns your systems, automates evidence, and
              keeps you audit-ready — so you can bid, win, and deliver with
              confidence.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={2}>
              <Button as={RouterLink} to="/contact" colorScheme="yellow">
                Schedule a Demo
              </Button>
              <Button
                as={RouterLink}
                to="/projects"
                variant="outline"
                colorScheme="yellow"
              >
                See How It Works
              </Button>
            </Stack>
          </Stack>

          {/* Optional illustration placeholder (kept simple for now) */}
          <Box
            aria-hidden
            borderWidth="1px"
            borderStyle="dashed"
            borderColor={useColorModeValue("yellow.300", "yellow.600")}
            rounded="xl"
            minH={{ base: 32, md: 40 }}
            minW={{ base: "full", md: "40%" }}
            opacity={0.7}
            _before={{
              content: '"CMMC • DFARS • NIST 800-171"',
              display: "block",
              fontWeight: 600,
              color: useColorModeValue("yellow.700", "yellow.300"),
              textAlign: "center",
              py: 10,
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default MissionSection;
