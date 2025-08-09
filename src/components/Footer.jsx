import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Section 1: Adaface Branding and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-adaface-blue rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">adaface</span>
            </div>
            <div className="space-y-2 mb-4">
              <p className="font-bold text-gray-900">40 min tests.</p>
              <p className="font-bold text-gray-900">No trick questions.</p>
              <p className="font-bold text-gray-900">Accurate shortlisting.</p>
            </div>
            <a
              href="mailto:deepti@adaface.com"
              className="text-adaface-blue text-sm"
            >
              deepti@adaface.com
            </a>
          </div>

          {/* Section 2: Product and Usecases */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">PRODUCT</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/product"
                    className="text-adaface-blue hover:underline"
                  >
                    Product Tour
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-adaface-blue hover:underline"
                  >
                    Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-adaface-blue hover:underline"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-adaface-blue hover:underline"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-adaface-blue hover:underline"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-adaface-blue hover:underline"
                  >
                    AI Resume Parser
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">USECASES</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/test-library"
                    className="text-adaface-blue hover:underline"
                  >
                    Aptitude Tests
                  </Link>
                </li>
                <li>
                  <Link
                    to="/test-library"
                    className="text-adaface-blue hover:underline"
                  >
                    Coding Tests
                  </Link>
                </li>
                <li>
                  <Link
                    to="/test-library"
                    className="text-adaface-blue hover:underline"
                  >
                    Psychometric Tests
                  </Link>
                </li>
                <li>
                  <Link
                    to="/test-library"
                    className="text-adaface-blue hover:underline"
                  >
                    Personality Tests
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Helpful Content and Books & Tools */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">HELPFUL CONTENT</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Skills assessment tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    52 pre-employment tools compared
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Compare Adaface with competitors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Skill mapping series
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Job description templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Interview questions templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Online Compilers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">BOOKS & TOOLS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Guide to pre-employment tests
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Check out all tools
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Company and Locations */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/product"
                    className="text-adaface-blue hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-adaface-blue hover:underline"
                  >
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-adaface-blue hover:underline"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">LOCATIONS</h3>
              <div className="mb-4">
                <p className="font-bold text-gray-900">Singapore (HQ)</p>
                <p className="text-gray-900 text-sm">
                  32 Carpenter Street, Singapore 059911
                </p>
                <p className="text-gray-900 text-sm">Contact: +65 9447 0488</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">India</p>
                <p className="text-gray-900 text-sm">
                  WeWork Prestige Atlanta, 80 Feet Main Road,
                </p>
                <p className="text-gray-900 text-sm">
                  Koramangala 1A Block, Bengaluru, Karnataka,
                </p>
                <p className="text-gray-900 text-sm">560034</p>
                <p className="text-gray-900 text-sm">Contact: +91 6305713227</p>
              </div>
            </div>
          </div>

          {/* Section 5: Empty column for spacing */}
          <div className="md:col-span-1"></div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-900">© 2025 Adaface Pte. Ltd.</p>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-adaface-blue rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
