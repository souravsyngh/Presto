import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import TestLibrary from "./pages/TestLibrary";
import SampleQuestions from "./pages/SampleQuestions";
import Pricing from "./pages/Pricing";
// import Resources from "./pages/Resources";
import Login from "./pages/Login";
// import Candidates from "./pages/Candidates";
// import MyTests from "./pages/MyTests";
// import Insights from "./pages/Insights";
// import Billing from "./pages/Billing";
// import Settings from "./pages/Settings";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/test-library" element={<TestLibrary />} />
          <Route path="/sample-questions" element={<SampleQuestions />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/candidates" element={<Candidates />} /> */}
          {/* <Route path="/my-tests" element={<MyTests />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
