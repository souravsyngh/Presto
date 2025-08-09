import React from "react";

const Product = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Product Tour
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how Adaface transforms your hiring process with intelligent
            skill assessments and data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Smart Assessment Engine
            </h3>
            <p className="text-gray-600">
              Our AI-powered platform creates personalized tests that accurately
              measure real-world skills.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Comprehensive Test Library
            </h3>
            <p className="text-gray-600">
              Access 500+ pre-built tests covering programming, cognitive,
              business, and personality skills.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Advanced Analytics
            </h3>
            <p className="text-gray-600">
              Get detailed insights into candidate performance with
              comprehensive reporting and analytics.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Integrate with your existing ATS and HR tools for a streamlined
              workflow.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Test Creation
            </h3>
            <p className="text-gray-600">
              Build custom assessments tailored to your specific role
              requirements and company culture.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Candidate Experience
            </h3>
            <p className="text-gray-600">
              Provide a professional and engaging testing experience that
              enhances your employer brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
