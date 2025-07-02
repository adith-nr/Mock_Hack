import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
