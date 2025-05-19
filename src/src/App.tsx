import React from 'react';
import './App.css';

function App() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto text-center space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Securing Tomorrow’s Infrastructure — Today.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          AI-powered GRC solutions for GovCon, powered by multi-cloud, Zero Trust, and cyber resilience frameworks.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">Schedule a Demo</button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl">Learn More</button>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl shadow border">✅ AI-Driven Compliance Monitoring</div>
          <div className="p-4 rounded-xl shadow border">✅ Multi-Cloud Risk Management</div>
          <div className="p-4 rounded-xl shadow border">✅ Zero Trust & Cyber Resilience</div>
          <div className="p-4 rounded-xl shadow border">✅ Contractor Risk Intelligence</div>
        </div>
      </section>

      {/* Why EDS */}
      <section className="bg-gray-100 py-10 px-6 rounded-2xl">
        <blockquote className="text-xl italic max-w-3xl mx-auto">
          "Because regulatory complexity shouldn’t stop innovation."
        </blockquote>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We simplify compliance, accelerate authorization, and protect mission-critical systems—with AI at the core.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-8 px-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">📞 Ready to secure your next contract? Let’s talk.</h3>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-700 px-6 py-2 rounded-xl">Book a Consultation</button>
          <button className="border border-white px-6 py-2 rounded-xl">Contact Us</button>
        </div>
      </section>
    </main>
  );
}

export default App;
