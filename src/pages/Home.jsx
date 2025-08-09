import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and CTAs */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                40 min skill tests.
                <br />
                No trick questions.
                <br />
                Accurate shortlisting.
              </h1>
              <p className="text-xl text-gray-700 max-w-lg">
                Test candidates for on-the-job skills with Adaface and find the
                most qualified candidates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/product"
                className="inline-flex items-center space-x-2 text-adaface-blue font-semibold hover:underline"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>SEE ADAFACE IN ACTION</span>
              </Link>
              <Link
                to="/product"
                className="bg-adaface-blue text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-600 transition-colors inline-block text-center"
              >
                TRY FOR FREE
              </Link>
            </div>
          </div>

          {/* Right Side - 3D Cube and Avatars */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* 3D Cube */}
              <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg transform rotate-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-adaface-blue font-bold text-2xl">
                    adaface
                  </span>
                </div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-800 rounded-sm"></div>
              </div>

              {/* Left Avatar - Entering */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md p-2">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">👩</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-8 bg-adaface-blue"></div>
                </div>
              </div>

              {/* Right Avatar 1 - Exiting with Good Score */}
              <div className="absolute -right-20 top-1/4">
                <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md p-2">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">👩</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-sm font-semibold text-gray-700">73/100</p>
                </div>
              </div>

              {/* Right Avatar 2 - Exiting with Bad Score */}
              <div className="absolute -right-20 bottom-1/4">
                <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md p-2">
                  <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">👨</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-sm font-semibold text-gray-700">18/100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-bold text-gray-900">
            Trusted by recruitment teams in enterprises globally
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              While resumes offer a subjective outline of a candidate's
              experience, our on-the-job skills assessments provide an objective
              analysis of skills, aptitude, and personality, transforming hiring
              from instinct-based to data-driven decisions.
            </h2>
            <Link
              to="/product"
              className="inline-flex items-center space-x-2 text-adaface-blue font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>View demo</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Highlighted */}
            <div className="bg-adaface-light-blue rounded-lg p-6 border-l-4 border-adaface-blue">
              <p className="text-lg font-semibold text-gray-900">
                >> Hire the best, with 500+ high-quality tests
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-lg font-semibold text-gray-900">
                > Invite thousands of candidates with a click
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-lg font-semibold text-gray-900">
                > Reduce time-to-hire by 30% with shortlists and benchmarks
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-lg font-semibold text-gray-900">
                > Integrate seamlessly into your current ATS workflow
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-lg font-semibold text-gray-900">
                > Improve your employer brand with friendly tests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Categories Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Valid and reliable tests to find the best
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our 500+ ready-to-use tests are built to help you quickly identify
              the best talent in your candidate pipeline, for every role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Programming Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Programming
              </h3>
              <p className="text-gray-600 mb-4">
                Identify top talent for your tech team with coding tests for 35+
                programming languages, 20+ frameworks, cloud skills and more.
              </p>
              <button className="w-full bg-blue-100 text-adaface-blue py-2 rounded-md font-medium hover:bg-blue-200 transition-colors">
                View tests
              </button>
            </div>

            {/* Cognitive Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cognitive
              </h3>
              <p className="text-gray-600 mb-4">
                Measure cognitive ability, problem solving and fluid
                intelligence, which are the strongest predictors of job success
                with 100+ aptitude tests.
              </p>
              <button className="w-full bg-blue-100 text-adaface-blue py-2 rounded-md font-medium hover:bg-blue-200 transition-colors">
                View tests
              </button>
            </div>

            {/* Business Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.815-8.742-2.255M21 13.255v-2.51A23.931 23.931 0 0012 10c-3.183 0-6.22.815-8.742 2.255M21 13.255L12 21l-9-7.745z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business</h3>
              <p className="text-gray-600 mb-4">
                Assess critical business skills like data analysis, Excel, SQL,
                Scrum, project management to hire the sharpest in the field.
              </p>
              <button className="w-full bg-blue-100 text-adaface-blue py-2 rounded-md font-medium hover:bg-blue-200 transition-colors">
                View tests
              </button>
            </div>

            {/* Typing Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8M3 3h18M3 9h18M3 15h18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Typing</h3>
              <p className="text-gray-600 mb-4">
                Evaluate typing speed, accuracy, and attention to detail to hire
                the best candidates for your data entry and administrative
                roles.
              </p>
              <button className="w-full bg-blue-100 text-adaface-blue py-2 rounded-md font-medium hover:bg-blue-200 transition-colors">
                View tests
              </button>
            </div>

            {/* Personality Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personality
              </h3>
              <p className="text-gray-600 mb-4">
                Identify key personality traits to ensure a good culture fit,
                with scientifically validated personality and psychometric
                tests.
              </p>
              <button className="w-full bg-blue-100 text-adaface-blue py-2 rounded-md font-medium hover:bg-blue-200 transition-colors">
                View tests
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
