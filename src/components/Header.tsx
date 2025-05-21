// src/components/Header.tsx
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  IconButton,
  useDisclosure,
  Button,
  Collapse,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const bg = useColorModeValue("black", "gray.900");
  const color = useColorModeValue("yellow.400", "yellow.300");

  return (
    <Box bg={bg} color={color} py={4} px={6} boxShadow="md" as="header">
      <Flex align="center" justify="space-between">
        <Flex as={RouterLink} to="/" align="center" gap={3} _hover={{ textDecoration: "none" }}>
          <Image src="/assets/logo-eds-black.png" alt="EDS Logo" boxSize="50px" />
          <Heading size="md" color={color} letterSpacing="wider">
            Eagle Defense Systems
          </Heading>
        </Flex>
        <IconButton
          aria-label={isOpen ? "Close menu" : "Open menu"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          variant="ghost"
          color={color}
        />
        <Flex
          display={{ base: "none", md: "flex" }}
          direction="row"
          gap={6}
          align="center"
        >
          <Button as={RouterLink} to="/about" variant="link" colorScheme="yellow">
            About
          </Button>
          <Button as={RouterLink} to="/capabilities" variant="link" colorScheme="yellow">
            Capabilities
          </Button>
          <Button as={RouterLink} to="/projects" variant="link" colorScheme="yellow">
            Projects
          </Button>
          <Button as={RouterLink} to="/contact" variant="link" colorScheme="yellow">
            Contact
          </Button>
        </Flex>
      </Flex>
      {/* Mobile nav (collapse) */}
      <Collapse
        in={isOpen}
        animateOpacity
        children={
          <Flex
            direction="column"
            gap={4}
            mt={4}
            display={{ md: "none" }}
          >
            <Button as={RouterLink} to="/about" variant="link" colorScheme="yellow" w="100%">
              About
            </Button>
            <Button as={RouterLink} to="/capabilities" variant="link" colorScheme="yellow" w="100%">
              Capabilities
            </Button>
            <Button as={RouterLink} to="/projects" variant="link" colorScheme="yellow" w="100%">
              Projects
            </Button>
            <Button as={RouterLink} to="/contact" variant="link" colorScheme="yellow" w="100%">
              Contact
            </Button>
          </Flex>
        }
      />
    </Box>
  );
};

export default Header;
