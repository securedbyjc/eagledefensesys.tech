// src/pages/Contact.tsx - Google Form Hybrid Solution
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

// Google Form configuration
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdoRFbl_wwXyuUB3FIyrhVf8JGaegB1ugYDoxVc0ptJL9rCCA/formResponse";

// Entry IDs from your Google Form
const GOOGLE_FORM_ENTRIES = {
  email: "emailAddress", // Google Forms special field for email collection
  name: "entry.668966128",
  organization: "entry.662803868",
  intendedUse: "entry.1502010173",
  linkedinProfile: "entry.1172121829",
  phone: "entry.129791099",
};

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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Don't prevent default - let the browser submit naturally
    // The form will redirect to Google's response page, then back to our success page
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

          {/* Success Message */}
          {submitted && (
            <Box mb={6} p={4} bg="green.50" borderRadius="md" borderWidth="1px" borderColor="green.200">
              <Text color="green.800" fontWeight="semibold" textAlign="center">
                ✓ Message sent successfully! We'll respond as soon as possible.
              </Text>
            </Box>
          )}

          {/* Use native form submission */}
          <form 
            action={GOOGLE_FORM_ACTION}
            method="POST"
            target="hidden_iframe"
          >
            {/* Hidden iframe to catch the response without redirecting */}
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: 'none' }}
              onLoad={() => {
                if ((document.getElementById('contact-form') as HTMLFormElement)?.submitted) {
                  setSubmitted(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />
            
            <Stack spacing={4} id="contact-form">
              <Box>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <Input
                  id="email"
                  name={GOOGLE_FORM_ENTRIES.email}
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </Box>

              <Box>
                <FormLabel htmlFor="name">Name *</FormLabel>
                <Input
                  id="name"
                  name={GOOGLE_FORM_ENTRIES.name}
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </Box>

              <Box>
                <FormLabel>Organization/Affiliation *</FormLabel>
                <Text fontSize="xs" color="gray.600" mb={2}>
                  Select all that apply
                </Text>
                {/* Hidden input to store selected values */}
                <input 
                  type="hidden" 
                  name={GOOGLE_FORM_ENTRIES.organization}
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
                <FormLabel htmlFor="intended-use">Intended Use *</FormLabel>
                <Textarea
                  id="intended-use"
                  name={GOOGLE_FORM_ENTRIES.intendedUse}
                  rows={4}
                  placeholder="Please describe how you intend to use our services..."
                  required
                />
                <Text fontSize="xs" color="gray.600" mt={1}>
                  Access is granted at no cost for approved academic, research, and internal
                  evaluation purposes. Commercial use requires prior written approval.
                </Text>
              </Box>

              <Box>
                <FormLabel htmlFor="linkedin">LinkedIn Profile (Optional)</FormLabel>
                <Input
                  id="linkedin"
                  name={GOOGLE_FORM_ENTRIES.linkedinProfile}
                  type="url"
                  placeholder="https://linkedin.com/in/your-profile"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="phone">Phone (Optional)</FormLabel>
                <Input
                  id="phone"
                  name={GOOGLE_FORM_ENTRIES.phone}
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </Box>

              <Button
                type="submit"
                colorScheme="yellow"
                size="lg"
                mt={4}
                isDisabled={selectedOrgs.length === 0}
                onClick={() => {
                  (document.getElementById('contact-form') as any).submitted = true;
                }}
              >
                Submit Request
              </Button>

              <Text fontSize="xs" color="gray.600" textAlign="center">
                Your responses will help us review your request and ensure our services are used
                responsibly. We will contact you by email after your submission is reviewed.
              </Text>
            </Stack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;