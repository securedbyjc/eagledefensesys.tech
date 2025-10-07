// src/pages/Contact.tsx - CORS Workaround
import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Stack,
  FormLabel,
  Select,
  Container,
  Text,
  VStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

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
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([]);

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

          {/* Native form submission to bypass CORS */}
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            onSubmit={() => {
              // Show loading state briefly
              setTimeout(() => {
                window.location.href = "/contact?success=true";
              }, 100);
            }}
          >
            <Stack spacing={4}>
              {/* Hidden fields for Web3Forms */}
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Contact Form Submission from Eagle Defense Systems" />
              <input type="hidden" name="redirect" value="https://eagledefensesys.tech/contact?success=true" />
              
              {/* Honeypot for spam protection */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

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
                <input 
                  type="hidden" 
                  name="organization_affiliation" 
                  value={selectedOrgs.join(", ")} 
                />
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

          {/* Success message if redirected back with success param */}
          {typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') === 'true' && (
            <Box mt={4} p={4} bg="green.50" borderRadius="md" borderWidth="1px" borderColor="green.200">
              <Text color="green.800" fontWeight="semibold" textAlign="center">
                ✓ Message sent successfully! We'll respond as soon as possible.
              </Text>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;