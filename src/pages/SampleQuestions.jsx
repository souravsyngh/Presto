import React from "react";

const SampleQuestions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sample Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore sample questions from our comprehensive test library to
            understand the quality and depth of our assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Programming Questions
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <p className="text-gray-700 mb-2">
                  What is the output of the following JavaScript code?
                </p>
                <code className="bg-gray-100 p-2 rounded text-sm block">
                  console.log(typeof null);
                </code>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-gray-600">A) "null"</p>
                  <p className="text-sm text-gray-600">B) "undefined"</p>
                  <p className="text-sm text-gray-600">C) "object"</p>
                  <p className="text-sm text-gray-600">D) "number"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cognitive Questions
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <p className="text-gray-700 mb-2">
                  Complete the sequence: 2, 6, 12, 20, 30, ?
                </p>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-gray-600">A) 40</p>
                  <p className="text-sm text-gray-600">B) 42</p>
                  <p className="text-sm text-gray-600">C) 44</p>
                  <p className="text-sm text-gray-600">D) 46</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleQuestions;
