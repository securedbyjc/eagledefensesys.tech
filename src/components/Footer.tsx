// src/components/Footer.tsx
import React from "react";
import { Box, Container, Text, Stack, Link, HStack } from "@chakra-ui/react";

const Footer = () => (
  <Box bg="black" color="yellow.400" py={6} mt={12}>
    <Container maxW="5xl">
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        spacing={4}
      >
        <Text fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} Eagle Defense Systems LLC. All rights reserved.
        </Text>
        <HStack spacing={6}>
          <Link href="/about" _hover={{ color: "yellow.300" }}>
            About
          </Link>
          <Link href="/capabilities" _hover={{ color: "yellow.300" }}>
            Capabilities
          </Link>
          <Link href="/projects" _hover={{ color: "yellow.300" }}>
            Projects
          </Link>
          <Link href="/contact" _hover={{ color: "yellow.300" }}>
            Contact
          </Link>
        </HStack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
