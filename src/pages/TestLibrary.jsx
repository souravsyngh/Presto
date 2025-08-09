import React, { useState } from "react";
import { Link } from "react-router-dom";

const TestLibrary = () => {
  const [activeTab, setActiveTab] = useState("test-library");

  const programmingLanguages = [
    "JavaScript",
    "Java",
    "Python",
    "PHP",
    "C#",
    "Ruby",
    "C++",
    "Embedded",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Application Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-adaface-blue rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-adaface-blue">
                adaface
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <Link
                to="/candidates"
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === "candidates" ? "text-adaface-blue" : ""
                }`}
                onClick={() => setActiveTab("candidates")}
              >
                Candidates
              </Link>
              <Link
                to="/my-tests"
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === "my-tests" ? "text-adaface-blue" : ""
                }`}
                onClick={() => setActiveTab("my-tests")}
              >
                My Tests
              </Link>
              <Link
                to="/test-library"
                className={`text-adaface-blue border-b-2 border-adaface-blue px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === "test-library" ? "text-adaface-blue" : ""
                }`}
                onClick={() => setActiveTab("test-library")}
              >
                Test Library
              </Link>
              <Link
                to="/insights"
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === "insights" ? "text-adaface-blue" : ""
                }`}
                onClick={() => setActiveTab("insights")}
              >
                Insights
              </Link>
              <Link
                to="/billing"
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === "billing" ? "text-adaface-blue" : ""
                }`}
                onClick={() => setActiveTab("billing")}
              >
                Billing
              </Link>
              <Link
                to="/settings"
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === "settings" ? "text-adaface-blue" : ""
                }`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">CREDITS USAGE</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Adaface</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Search 500+ tests by skill or role name or Request a custom test
            </h2>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Q Find your test"
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-adaface-blue focus:border-adaface-blue"
            />
          </div>
        </div>

        {/* Test Categories */}
        <div className="space-y-8">
          {/* Programming Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-4">
              <p className="text-gray-600">
                Comprehensive programming tests covering multiple languages,
                frameworks, and development concepts.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {programmingLanguages.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                >
                  <span className="text-gray-700">{language}</span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Entry Level Developer Tests */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Entry Level Developer Tests</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Data Science */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-4">
              <p className="text-gray-600">
                Advanced data science and analytics tests for machine learning,
                statistics, and data engineering roles.
              </p>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50">
              <span className="text-gray-700">Data Science</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLibrary;
