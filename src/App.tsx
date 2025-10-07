// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Homepage hero/cta
import Hero from "./components/Hero";
import ExploreProjectsCTA from "./components/ExploreProjectsCTA";

// StoryBrand homepage sections
import MissionSection from "./components/MissionSection";
import PlanSection from "./components/PlanSection";
import TechnologyShowcase from "./components/TechnologyShowcase";
import HomepageSections from "./components/HomepageSections";

// Pages
import Projects from "./pages/Projects";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";

// Access request flows
import LexSentinelAccessRequest from "./components/LexSentinelAccessRequest";
import SwiftEagleAccessRequest from "./components/SwiftEagleAccessRequest";

const Home: React.FC = () => (
  <Box as="main">
    <Hero />
    <ExploreProjectsCTA />
    <MissionSection />
    <PlanSection />
    <TechnologyShowcase />
    <HomepageSections />
  </Box>
);

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/contact" element={<Contact />} />

          {/* Access request routes */}
          <Route
            path="/projects/lexsentinel-access"
            element={<LexSentinelAccessRequest />}
          />
          <Route
            path="/projects/swifteagle-access"
            element={<SwiftEagleAccessRequest />}
          />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;
