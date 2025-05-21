import { Box, Button, Heading, Text, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  return (
    <Box position="relative" w="100%" minH={{ base: '60vh', md: '75vh' }} overflow="hidden">
      {/* Background Video */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={0}
        overflow="hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Overlay for readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.700"
        zIndex={1}
        // Uncomment the next line for a blur effect (browser support required)
        // style={{ backdropFilter: 'blur(2px)' }}
      />

      {/* Hero Content */}
      <Stack
        position="relative"
        zIndex={2}
        h="100%"
        align="center"
        justify="center"
        spacing={6}
        textAlign="center"
        pt={{ base: 20, md: 32 }}
        pb={{ base: 20, md: 32 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          color="white"
          fontWeight="bold"
          textShadow="2px 2px 8px rgba(0,0,0,0.6)"
        >
          Ready to secure your next contract?
        </Heading>
        <Text color="white" fontSize={{ base: "md", md: "xl" }}>
          Let’s walk you through how Eagle Defense Systems can help.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} pt={4}>
          <Button
            as={RouterLink}
            to="/contact"
            colorScheme="yellow"
            variant="solid"
            size="lg"
          >
            Schedule a Demo
          </Button>
          <Button
            as={RouterLink}
            to="/capabilities"
            colorScheme="yellow"
            variant="outline"
            size="lg"
          >
            Learn More
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
