// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// Global chrome
import Header from "./components/Header";
import Footer from "./components/Footer";

// Home page blocks
import Hero from "./components/Hero";
import HomepageSections from "./components/HomepageSections";

// Pages
import Projects from "./pages/Projects";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";

// Access request flows
import LexSentinelAccessRequest from "./components/LexSentinelAccessRequest";
import SwiftEagleAccessRequest from "./components/SwiftEagleAccessRequest";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomepageSections />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/contact" element={<Contact />} />

          {/* Access requests */}
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
