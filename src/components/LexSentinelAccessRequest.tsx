import React, { useState } from "react";

const LexSentinelAccessRequest: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, integrate with your backend or use a service like Formspree, or send a notification/email.
  };

  return (
    <div className="max-w-xl mx-auto bg-white/80 rounded-2xl shadow-lg p-8 mt-12">
      <h1 className="text-3xl font-bold text-center mb-2">Request Access to LexSentinel AI</h1>
      <p className="text-center text-gray-700 mb-6">
        LexSentinel AI is a source-available, approval-required legal AI assistant.<br />
        Access is granted free of charge for academic, research, or internal business evaluation purposes.<br />
        <b>Commercial use is not permitted without written approval.</b>
      </p>

      {submitted ? (
        <div className="text-green-600 font-semibold text-center">
          Thank you for your request. We will review your submission and contact you at the provided email.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 border rounded p-2"
                placeholder="Full Name"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 border rounded p-2"
                placeholder="your@email.com"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Organization / Affiliation (optional)
              <input
                type="text"
                name="organization"
                className="w-full mt-1 border rounded p-2"
                placeholder="University, Company, etc."
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Intended Use
              <textarea
                name="intendedUse"
                required
                className="w-full mt-1 border rounded p-2"
                rows={3}
                placeholder="Briefly describe your intended use (e.g., research, internal evaluation, academic study)"
              ></textarea>
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 text-gray-500 text-sm text-center">
        For urgent or special requests, contact{" "}
        <a
          href="mailto:jcollins@eagledefensesys.com"
          className="text-red-700 underline"
        >
          jcollins@eagledefensesys.com
        </a>
        .
      </div>
    </div>
  );
};

export default LexSentinelAccessRequest;
