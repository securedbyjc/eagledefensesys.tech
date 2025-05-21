// src/components/Footer.tsx
import React from "react";
import { Box, Container, Text, Stack, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const bg = useColorModeValue("black", "gray.900");
  const color = useColorModeValue("yellow.400", "yellow.300");
  const hoverColor = useColorModeValue("yellow.300", "yellow.200");

  return (
    <Box as="footer" bg={bg} color={color} py={6} mt={12}>
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
            <Link as={RouterLink} to="/about" _hover={{ color: hoverColor }}>
              About
            </Link>
            <Link as={RouterLink} to="/capabilities" _hover={{ color: hoverColor }}>
              Capabilities
            </Link>
            <Link as={RouterLink} to="/projects" _hover={{ color: hoverColor }}>
              Projects
            </Link>
            <Link as={RouterLink} to="/contact" _hover={{ color: hoverColor }}>
              Contact
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
