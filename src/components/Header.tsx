// src/components/Header.tsx
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Image, IconButton, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";


const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="black" color="yellow.400" py={4} px={6} boxShadow="md">
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={3}>
          <Flex
             as={RouterLink}
             to="/"
             align="center"
             gap={3}
             style={{ textDecoration: "none" }}
             _hover={{ cursor: "pointer" }}
            >
            <Image src="/assets/logo-eds-black.png" alt="EDS Logo" boxSize="50px" />
            <Heading size="md" color="yellow.400">
                    Eagle Defense Systems
             </Heading>
            </Flex>
        </Flex>
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
          variant="ghost"
          color="yellow.400"
        />
        <Flex
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          gap={6}
          mt={{ base: 4, md: 0 }}
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
    </Box>
  );
};

export default Header;
