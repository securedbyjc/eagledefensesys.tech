import React from "react";
import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";

const SwiftEagleAccessRequest: React.FC = () => {
  const cardBg = useColorModeValue("whiteAlpha.900", "gray.800");

  return (
    <Box
      maxW="xl"
      mx="auto"
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="lg"
      p={{ base: 4, md: 8 }}
      mt={12}
    >
      <Heading as="h1" size="xl" textAlign="center" mb={2} color="red.700">
        SwiftEagle-AI Access Request
      </Heading>
      <Text textAlign="center" color="gray.700" mb={6}>
        Please complete the form below to request access to SwiftEagle-AI.<br />
        Your request will be reviewed and you will be contacted by email.
      </Text>
      <Box
        as="iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdoRFbl_wwXyuUB3FIyrhVf8JGaegB1ugYDoxVc0ptJL9rCCA/viewform?embedded=true"
        width="100%"
        height="1274px"
        border="none"
        bg="transparent"
        title="SwiftEagle-AI Access Request"
        rounded="xl"
        mb={2}
      />
      <Text mt={6} color="gray.500" fontSize="sm" textAlign="center">
        For urgent or special requests, contact{" "}
        <Link
          href="mailto:jcollins@eagledefensesys.com"
          color="red.700"
          textDecor="underline"
          fontWeight="semibold"
        >
          jcollins@eagledefensesys.com
        </Link>
        .
      </Text>
    </Box>
  );
};

export default SwiftEagleAccessRequest;
