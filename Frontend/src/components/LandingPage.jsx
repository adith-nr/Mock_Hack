import React from "react";
import ControlPanel from "./ControlPanel";
import CartBill from "./CartBill";

const LandingPage = () => {
  return (
    <main className="flex w-full min-h-screen bg-gradient-to-r from-green-50 via-white to-green-50">
      <ControlPanel />
      <CartBill />
    </main>
  );
};

export default LandingPage;
