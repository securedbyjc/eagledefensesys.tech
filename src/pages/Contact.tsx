// src/pages/Contact.tsx
import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Stack,
  useToast,
  FormLabel,
  Select,
  Container,
  Text,
  VStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

// TODO: Get your access key from https://web3forms.com/
// It's free - just enter your email to get the key
const WEB3FORMS_ACCESS_KEY = "68ea9167-6934-4da4-9041-b6f9556d6075";

const organizationOptions = [
  "Academic / University",
  "Research Institution",
  "Government",
  "Legal / Law Firm",
  "Healthcare",
  "Financial Services",
  "Technology / Software",
  "Consulting",
  "Manufacturing",
  "Nonprofit / NGO",
  "Defense / Military",
  "Energy / Utilities",
  "Media / Publishing",
  "Student / Independent",
  "Other",
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([]);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Add Web3Forms access key
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    
    // Add selected organizations
    formData.append("organization", selectedOrgs.join(", "));
    
    // Add custom subject line
    formData.append("subject", "New Contact Form Submission from Eagle Defense Systems");
    
    // Optional: Redirect after submission (set to false to stay on page)
    formData.append("redirect", "false");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. We'll respond as soon as possible.",
          status: "success",
          duration: 7000,
          isClosable: true,
        });
        e.currentTarget.reset();
        setSelectedOrgs([]);
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong.",
        description: "Please try again later or email us directly at secure.eds@protonmail.com",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box bg="gray.50" minH="100vh" py={{ base: 12, md: 20 }}>
      <Container maxW="lg">
        <Box bg="white" p={8} borderRadius="xl" boxShadow="md">
          <Heading as="h1" size="lg" mb={2} color="yellow.600" textAlign="center">
            Contact Us
          </Heading>
          <Text fontSize="sm" color="gray.600" textAlign="center" mb={6}>
            Have questions or want to discuss a partnership? Reach out to us and we'll respond promptly.
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {/* Honeypot field for spam protection (hidden from users) */}
              <Input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <Box>
                <FormLabel htmlFor="name">Name *</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </Box>

              <Box>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </Box>

              <Box>
                <FormLabel htmlFor="company">Organization (Optional)</FormLabel>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company or organization"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="inquiry-type">Inquiry Type *</FormLabel>
                <Select id="inquiry-type" name="inquiry_type" required>
                  <option value="">Select type...</option>
                  <option value="general">General Inquiry</option>
                  <option value="demo">Schedule a Demo</option>
                  <option value="partnership">Partnership/Teaming Opportunity</option>
                  <option value="technical">Technical Question</option>
                  <option value="other">Other</option>
                </Select>
              </Box>

              <Box>
                <FormLabel>Organization/Affiliation (Optional)</FormLabel>
                <Text fontSize="xs" color="gray.600" mb={2}>
                  Select all that apply
                </Text>
                <CheckboxGroup 
                  value={selectedOrgs} 
                  onChange={(values) => setSelectedOrgs(values as string[])}
                >
                  <VStack align="start" spacing={2} maxH="200px" overflowY="auto" pr={2}>
                    {organizationOptions.map((org) => (
                      <Checkbox key={org} value={org} size="sm">
                        {org}
                      </Checkbox>
                    ))}
                  </VStack>
                </CheckboxGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your inquiry or request..."
                  required
                />
              </Box>

              <Box>
                <FormLabel htmlFor="phone">Phone (Optional)</FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </Box>

              <Button
                type="submit"
                colorScheme="yellow"
                isLoading={submitting}
                isDisabled={submitting}
                size="lg"
                mt={4}
              >
                Send Message
              </Button>

              <Text fontSize="xs" color="gray.600" textAlign="center">
                By submitting this form, you agree to be contacted by Eagle Defense Systems regarding your inquiry.
              </Text>
            </Stack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;