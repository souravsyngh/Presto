import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isTestLibraryOpen, setIsTestLibraryOpen] = useState(false);
  const [isSampleQuestionsOpen, setIsSampleQuestionsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Language */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-adaface-blue rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-adaface-blue">
                adaface
              </span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>EN</span>
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>Product</span>
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsTestLibraryOpen(!isTestLibraryOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>Test Library</span>
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsSampleQuestionsOpen(!isSampleQuestionsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>Sample questions</span>
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsPricingOpen(!isPricingOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>Pricing</span>
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>Resources</span>
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Log In
            </Link>
            <Link
              to="/product"
              className="bg-adaface-blue text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
              placeholder="Search test library by skills or roles"
              className="block w-full pl-10 pr-20 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-adaface-blue focus:border-adaface-blue"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <span className="text-sm text-gray-500">⌘ K</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
